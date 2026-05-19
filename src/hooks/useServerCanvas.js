import { useEffect } from "react";

export default function useServerCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let raf;
    let t = 0;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;

      const rect = parent.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);

    resizeObserver.observe(canvas.parentElement);

    const draw = () => {
      const W = canvas.width / (window.devicePixelRatio || 1);
      const H = canvas.height / (window.devicePixelRatio || 1);

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

    draw();

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
    };
  }, [ref]);
}
