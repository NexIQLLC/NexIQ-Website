"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-animate='fade-up']"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el, idx) => {
        requestAnimationFrame(() => el.classList.add("in-view"));
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    // Reset elements on route change to avoid stale state
    elements.forEach((el) => {
      el.classList.remove("in-view");
      observer.observe(el);
    });

    // Re-trigger on theme changes (class attribute on html)
    const html = document.documentElement;
    const mo = new MutationObserver(() => {
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-animate='fade-up']"));
      els.forEach((el) => {
        el.classList.remove("in-view");
        observer.observe(el);
      });
    });
    mo.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}


