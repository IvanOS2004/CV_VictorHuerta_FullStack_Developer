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

      const unitWidth = W * 0.6;

      const unitX = (W - unitWidth) / 2;

      const totalHeight = H * 0.65;

      const unitY = H * 0.17;

      const gap = 6;

      const unitHeight = (totalHeight - gap * (units - 1)) / units;

      for (let i = 0; i < units; i++) {
        const y = unitY + i * (unitHeight + gap);

        ctx.fillStyle = "rgba(17,24,39,0.95)";

        ctx.strokeStyle = "rgba(99,102,241,0.28)";

        ctx.lineWidth = 0.8;

        ctx.beginPath();

        ctx.roundRect(unitX, y, unitWidth, unitHeight, 4);

        ctx.fill();
        ctx.stroke();
      }

      t++;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, [ref]);
}
