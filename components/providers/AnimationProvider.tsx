"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AnimationProvider() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: false,
      mirror: true,
      offset: 80,
      debounceDelay: 50,
      throttleDelay: 99,
      disableMutationObserver: false,
      startEvent: "DOMContentLoaded",
    });

    const handleLoad = () => {
      AOS.refreshHard();
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", AOS.refresh);
    window.addEventListener("orientationchange", AOS.refresh);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", AOS.refresh);
      window.removeEventListener("orientationchange", AOS.refresh);
    };
  }, []);

  return null;
}
