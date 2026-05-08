import { useEffect } from "react";

export default function useServerCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;

    let t = 0;
    let raf;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, W, H);

      const units = 5;

      const uw = W * 0.6;
      const ux = (W - uw) / 2;

      const totalH = H * 0.65;
      const uy = H * 0.17;

      const gap = 6;

      const uh = (totalH - gap * (units - 1)) / units;

      for (let i = 0; i < units; i++) {
        const y = uy + i * (uh + gap);

        ctx.fillStyle = "rgba(17,24,39,0.95)";
        ctx.strokeStyle = "rgba(99,102,241,0.28)";
        ctx.lineWidth = 0.8;

        ctx.beginPath();
        ctx.roundRect(ux, y, uw, uh, 4);

        ctx.fill();
        ctx.stroke();

        const blink = Math.sin(t * 0.06 + i * 1.3) > 0.2;

        ctx.fillStyle = blink ? "#34d399" : "rgba(52,211,153,0.15)";

        ctx.beginPath();
        ctx.arc(ux + 14, y + uh / 2, 4, 0, Math.PI * 2);

        ctx.fill();

        if (blink) {
          const g = ctx.createRadialGradient(
            ux + 14,
            y + uh / 2,
            0,
            ux + 14,
            y + uh / 2,
            10,
          );

          g.addColorStop(0, "rgba(52,211,153,0.3)");
          g.addColorStop(1, "transparent");

          ctx.fillStyle = g;

          ctx.beginPath();
          ctx.arc(ux + 14, y + uh / 2, 10, 0, Math.PI * 2);

          ctx.fill();
        }

        const bars = 9;
        const bw = (uw * 0.48) / bars;

        for (let b = 0; b < bars; b++) {
          const h =
            (uh - 10) *
            (0.25 + 0.65 * Math.abs(Math.sin(t * 0.04 + i * 0.7 + b * 0.5)));

          const alpha = 0.4 + 0.4 * Math.abs(Math.sin(t * 0.03 + b));

          ctx.fillStyle = `rgba(99,102,241,${alpha})`;

          ctx.fillRect(ux + uw * 0.38 + b * (bw + 2), y + uh - 5 - h, bw, h);
        }
      }

      const grd = ctx.createLinearGradient(0, H * 0.75, 0, H);

      grd.addColorStop(0, "transparent");
      grd.addColorStop(1, "rgba(99,102,241,0.06)");

      ctx.fillStyle = grd;
      ctx.fillRect(0, H * 0.75, W, H * 0.25);

      t++;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);
}
