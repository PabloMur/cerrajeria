"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SiteConfig, defaultConfig, BACKEND_URL } from "@/config/site";

const CACHE_KEY = "cerrajeria_config_cache";

type SiteConfigContextType = {
  config: SiteConfig;
  saveConfig: (c: SiteConfig) => Promise<void>;
  loading: boolean;
};

const SiteConfigContext = createContext<SiteConfigContextType>({
  config: defaultConfig,
  saveConfig: async () => {},
  loading: false,
});

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig>(defaultConfig);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load from cache immediately to avoid flash
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) setConfig(JSON.parse(cached));
    } catch {}

    // Then fetch fresh from backend
    fetch(`${BACKEND_URL}/api/config`)
      .then((res) => {
        if (!res.ok) throw new Error("no config endpoint");
        return res.json();
      })
      .then((data: SiteConfig) => {
        setConfig(data);
        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      })
      .catch(() => {
        // Backend doesn't have the endpoint yet — stay with cache/defaults
      })
      .finally(() => setLoading(false));
  }, []);

  const saveConfig = async (c: SiteConfig) => {
    const token = process.env.NEXT_PUBLIC_ADMIN_TOKEN;
    const res = await fetch(`${BACKEND_URL}/api/config`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(c),
    });

    if (!res.ok) throw new Error("Error al guardar en el backend");

    setConfig(c);
    localStorage.setItem(CACHE_KEY, JSON.stringify(c));
  };

  return (
    <SiteConfigContext.Provider value={{ config, saveConfig, loading }}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export const useSiteConfig = () => useContext(SiteConfigContext);
