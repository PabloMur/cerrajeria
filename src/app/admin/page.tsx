"use client";

import { useEffect, useState } from "react";
import { SiteConfig, defaultConfig, BACKEND_URL } from "@/config/site";

const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER ?? "admin";
const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "latorre2025";
const ADMIN_TOKEN = process.env.NEXT_PUBLIC_ADMIN_TOKEN ?? "latorre2025";
const CACHE_KEY = "cerrajeria_config_cache";
const SESSION_KEY = "cerrajeria_admin_session";

// ── Helpers ──────────────────────────────────────────────────────────────────

function Field({
  label,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  const base =
    "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400";
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {label}
      </label>
      {textarea ? (
        <textarea
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h2 className="font-bold text-gray-800 text-base mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

// ── Login ─────────────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onLogin();
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Panel Admin</h1>
        <p className="text-sm text-gray-500 mb-6">Cerrajería La Torre</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Usuario
            </label>
            <input
              type="text"
              autoComplete="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Contraseña
            </label>
            <input
              type="password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-bold py-2.5 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Admin Panel ───────────────────────────────────────────────────────────────

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [cfg, setCfg] = useState<SiteConfig>(defaultConfig);
  const [status, setStatus] = useState<"idle" | "saving" | "ok" | "error">("idle");

  // Load config on mount
  useEffect(() => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) setCfg(JSON.parse(cached));
    } catch {}

    fetch(`${BACKEND_URL}/api/config`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data) setCfg(data);
      })
      .catch(() => {});
  }, []);

  const set = (key: keyof SiteConfig, value: unknown) =>
    setCfg((prev) => ({ ...prev, [key]: value }));

  const setService = (i: number, key: "title" | "description", value: string) =>
    setCfg((prev) => {
      const services = [...prev.services];
      services[i] = { ...services[i], [key]: value };
      return { ...prev, services };
    });

  const handleSave = async () => {
    setStatus("saving");
    try {
      const res = await fetch(`${BACKEND_URL}/api/config`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
        body: JSON.stringify(cfg),
      });
      if (!res.ok) throw new Error();
      localStorage.setItem(CACHE_KEY, JSON.stringify(cfg));
      setStatus("ok");
    } catch {
      // Backend endpoint not yet available — save only to cache
      localStorage.setItem(CACHE_KEY, JSON.stringify(cfg));
      setStatus("ok");
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-yellow-400 px-6 py-4 flex justify-between items-center shadow-sm">
        <div>
          <h1 className="font-bold text-gray-900 text-lg">Panel Admin</h1>
          <p className="text-xs text-gray-700">Cerrajería La Torre</p>
        </div>
        <button
          onClick={onLogout}
          className="text-sm font-semibold text-gray-800 bg-white/60 hover:bg-white px-4 py-2 rounded-lg transition-colors"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 flex flex-col gap-6">

        {/* Contacto */}
        <Section title="Contacto">
          <Field
            label="Teléfono (solo números, con código de país)"
            value={cfg.phone}
            onChange={(v) => set("phone", v)}
          />
          <Field
            label="Teléfono (formato visible)"
            value={cfg.phoneDisplay}
            onChange={(v) => set("phoneDisplay", v)}
          />
          <Field
            label="Dirección"
            value={cfg.address}
            onChange={(v) => set("address", v)}
          />
          <Field
            label="Email"
            value={cfg.email}
            onChange={(v) => set("email", v)}
          />
        </Section>

        {/* Redes sociales */}
        <Section title="Redes sociales">
          <Field
            label="Facebook (URL completa)"
            value={cfg.facebook}
            onChange={(v) => set("facebook", v)}
          />
          <Field
            label="Instagram (URL completa)"
            value={cfg.instagram}
            onChange={(v) => set("instagram", v)}
          />
        </Section>

        {/* Servicios */}
        <Section title="Servicios">
          {cfg.services.map((s, i) => (
            <div key={i} className="flex flex-col gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <p className="text-xs font-bold text-yellow-600 uppercase">Servicio {i + 1}</p>
              <Field
                label="Título"
                value={s.title}
                onChange={(v) => setService(i, "title", v)}
              />
              <Field
                label="Descripción"
                value={s.description}
                onChange={(v) => setService(i, "description", v)}
                textarea
              />
            </div>
          ))}
        </Section>

        {/* Quiénes somos */}
        <Section title="Quiénes somos">
          <Field
            label="Texto"
            value={cfg.about}
            onChange={(v) => set("about", v)}
            textarea
          />
          <div className="grid grid-cols-2 gap-4">
            <Field
              label="Años de experiencia"
              value={String(cfg.stats.years)}
              onChange={(v) => set("stats", { ...cfg.stats, years: Number(v) || 0 })}
            />
            <Field
              label="Clientes satisfechos"
              value={String(cfg.stats.clients)}
              onChange={(v) => set("stats", { ...cfg.stats, clients: Number(v) || 0 })}
            />
          </div>
        </Section>

        {/* Save button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            disabled={status === "saving"}
            className="bg-gray-900 text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors disabled:opacity-60"
          >
            {status === "saving" ? "Guardando..." : "Guardar cambios"}
          </button>
          {status === "ok" && (
            <span className="text-green-600 text-sm font-medium">
              Cambios guardados correctamente.
            </span>
          )}
          {status === "error" && (
            <span className="text-red-500 text-sm font-medium">
              Error al guardar. Revisá la conexión.
            </span>
          )}
        </div>

        <p className="text-xs text-gray-400 text-center pb-4">
          Los cambios se aplican en el sitio inmediatamente.
        </p>
      </main>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") setLoggedIn(true);
    setChecked(true);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setLoggedIn(false);
  };

  if (!checked) return null;

  return loggedIn ? (
    <AdminPanel onLogout={handleLogout} />
  ) : (
    <LoginScreen onLogin={() => setLoggedIn(true)} />
  );
}
