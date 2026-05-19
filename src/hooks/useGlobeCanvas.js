import { useEffect } from "react";

export default function useGlobeCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let raf;
    let t = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });

    resizeObserver.observe(canvas.parentElement);

    const draw = () => {
      const W = canvas.width / (window.devicePixelRatio || 1);
      const H = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;

      const radius = Math.min(W, H) * 0.28;

      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        radius * 1.3,
      );

      gradient.addColorStop(0, "rgba(99,102,241,0.14)");
      gradient.addColorStop(1, "rgba(99,102,241,0)");

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(99,102,241,0.22)";
      ctx.lineWidth = 0.8;

      for (let lat = -80; lat <= 80; lat += 20) {
        const y = Math.sin((lat * Math.PI) / 180) * radius;

        const rx = Math.cos((lat * Math.PI) / 180) * radius;

        ctx.beginPath();

        ctx.ellipse(cx, cy + y, rx, rx * 0.34, 0, 0, Math.PI * 2);

        ctx.stroke();
      }

      for (let lon = 0; lon < 180; lon += 20) {
        const angle = ((lon + t) * Math.PI) / 180;

        ctx.beginPath();

        ctx.ellipse(
          cx,
          cy,
          radius * Math.abs(Math.cos(angle)),
          radius,
          Math.PI / 2,
          0,
          Math.PI * 2,
        );

        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(129,140,248,0.45)";
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      const hx = cx + Math.cos(t * 0.025) * radius * 0.7;
      const hy = cy + Math.sin(t * 0.018) * radius * 0.35;

      ctx.beginPath();
      ctx.arc(hx, hy, 3.5, 0, Math.PI * 2);

      ctx.fillStyle = "rgba(34,211,238,0.9)";
      ctx.fill();

      const glow = ctx.createRadialGradient(hx, hy, 0, hx, hy, 14);

      glow.addColorStop(0, "rgba(34,211,238,0.3)");
      glow.addColorStop(1, "transparent");

      ctx.fillStyle = glow;

      ctx.beginPath();
      ctx.arc(hx, hy, 14, 0, Math.PI * 2);

      ctx.fill();

      t += 0.4;

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, [ref]);
}
