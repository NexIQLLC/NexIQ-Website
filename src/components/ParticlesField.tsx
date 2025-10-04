"use client";

import { useEffect, useRef } from "react";
import type particlesConfig from "../../particlesjs-config.json";

type ParticlesConfig = typeof particlesConfig;

export const ParticlesField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let config: ParticlesConfig | null = null;
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };

    const init = (cfg: ParticlesConfig) => {
      particles = [];
      const count = Math.min(
        Math.floor((canvas.width * canvas.height) / 15000),
        cfg.particles.number.value
      );
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * cfg.particles.move.speed * 0.1,
          vy: (Math.random() - 0.5) * cfg.particles.move.speed * 0.1,
          size: Math.max(1, Math.random() * cfg.particles.size.value),
        });
      }
    };

    const animate = (cfg: ParticlesConfig) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        const isLight = document.documentElement.classList.contains("light");
        const nodeColor = isLight
          ? "#003D77"
          : cfg.particles.color.value || "#3B82F6";
        ctx.fillStyle = `${nodeColor}80`;
        ctx.fill();

        if (cfg.particles.line_linked.enable) {
          for (let j = i + 1; j < particles.length; j++) {
            const o = particles[j];
            const dx = p.x - o.x;
            const dy = p.y - o.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < cfg.particles.line_linked.distance) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(o.x, o.y);

              const alpha =
                cfg.particles.line_linked.opacity *
                (1 - dist / cfg.particles.line_linked.distance);

              const linkColor = isLight
                ? "#6C7D8E"
                : cfg.particles.line_linked.color || "#4d5059";

              ctx.strokeStyle = `${linkColor}${Math.round(alpha * 255)
                .toString(16)
                .padStart(2, "0")}`;
              ctx.lineWidth = cfg.particles.line_linked.width;
              ctx.stroke();
            }
          }
        }
      });

      animationRef.current = requestAnimationFrame(() => animate(cfg));
    };

    const onResize = () => {
      if (!config) return;
      resize();
      init(config);
    };

    resize();
    import("../../particlesjs-config.json").then((mod) => {
      config = mod as ParticlesConfig;
      if (!config) return;
      init(config);
      animate(config);
      window.addEventListener("resize", onResize);
    });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticlesField;
