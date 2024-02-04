import { useEffect } from "react";

export function useNavigationScroll() {
  return useEffect(() => {
    if (typeof window !== "undefined") {
      const SmoothScroll = require("smooth-scroll");
      const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        offset: 50,
      });

      // Limpieza al desmontar el componente
      return () => {
        scroll.destroy();
      };
    }
  }, []);
}
