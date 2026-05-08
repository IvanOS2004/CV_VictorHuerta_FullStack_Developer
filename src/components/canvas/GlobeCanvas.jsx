import { useEffect } from "react";

export default function useGlobeCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;

    const cx = W / 2;
    const cy = H / 2;

    const r = Math.min(W, H) * 0.37;

    let t = 0;
    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.3);

      grd.addColorStop(0, "rgba(99,102,241,0.14)");
      grd.addColorStop(1, "rgba(99,102,241,0)");

      ctx.fillStyle = grd;

      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(99,102,241,0.22)";
      ctx.lineWidth = 0.8;

      for (let lat = -80; lat <= 80; lat += 20) {
        const y = Math.sin((lat * Math.PI) / 180) * r;
        const rx = Math.cos((lat * Math.PI) / 180) * r;

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
          r * Math.abs(Math.cos(angle)),
          r,
          Math.PI / 2,
          0,
          Math.PI * 2,
        );

        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(129,140,248,0.45)";
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      // Orbit dot
      const hx = cx + Math.cos(t * 0.025) * r * 0.7;
      const hy = cy + Math.sin(t * 0.018) * r * 0.35;

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

      // Pink dot
      const px = cx + Math.cos(-t * 0.02 + 2) * r * 0.55;
      const py = cy + Math.sin(-t * 0.015 + 1) * r * 0.28;

      ctx.beginPath();
      ctx.arc(px, py, 2.5, 0, Math.PI * 2);

      ctx.fillStyle = "rgba(236,72,153,0.8)";
      ctx.fill();

      t += 0.4;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);
}
