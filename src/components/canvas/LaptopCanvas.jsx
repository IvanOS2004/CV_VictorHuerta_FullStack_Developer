import { useEffect } from "react";

export default function useLaptopCanvas(ref) {
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

    const lines = [
      { text: "import { useState } from 'react'", color: "#818cf8" },
      { text: "const DevArchitect = () => {", color: "#e5e7eb" },
      {
        text: "  const [future, setFuture] = useState(true)",
        color: "#22d3ee",
      },
      { text: "", color: "" },
      { text: "  useEffect(() => {", color: "#e5e7eb" },
      { text: "    buildTheFuture()", color: "#34d399" },
      { text: "  }, [])", color: "#e5e7eb" },
      { text: "", color: "" },
      { text: "  return <Canvas3D scene='immersive' />", color: "#a78bfa" },
      { text: "}", color: "#e5e7eb" },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, W, H);

      const fs = Math.max(10, W * 0.022);

      ctx.font = `${fs}px 'Space Mono', monospace`;

      const lineH = fs * 1.8;
      const startY = H * 0.15;

      lines.forEach((line, i) => {
        if (!line.text) return;

        const visible = Math.floor((t - i * 8) / 1);

        if (visible <= 0) return;

        const text = line.text.slice(0, Math.min(visible, line.text.length));

        ctx.fillStyle = line.color;
        ctx.globalAlpha = 0.85;

        ctx.fillText(text, W * 0.08, startY + i * lineH);

        if (
          i === Math.min(Math.floor(t / 10), lines.length - 1) &&
          visible < line.text.length
        ) {
          ctx.fillStyle = "#6366f1";

          ctx.globalAlpha = Math.sin(t * 0.15) > 0 ? 0.9 : 0;

          ctx.fillRect(
            W * 0.08 + ctx.measureText(text).width + 2,
            startY + i * lineH - fs,
            2,
            fs + 2,
          );
        }
      });

      ctx.globalAlpha = 1;

      for (let sy = 0; sy < H; sy += 4) {
        ctx.fillStyle = "rgba(0,0,0,0.12)";
        ctx.fillRect(0, sy, W, 2);
      }

      t++;

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(raf);
  }, []);
}
