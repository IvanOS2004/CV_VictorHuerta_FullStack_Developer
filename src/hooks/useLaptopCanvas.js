import { useEffect } from "react";

export default function useLaptopCanvas(ref) {
  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let raf;
    let t = 0;

    const lines = [
      {
        text: "import { useState } from 'react'",
        color: "#818cf8",
      },
      {
        text: "const DevArchitect = () => {",
        color: "#e5e7eb",
      },
      {
        text: "  const [future, setFuture] = useState(true)",
        color: "#22d3ee",
      },
      {
        text: "  useEffect(() => {",
        color: "#e5e7eb",
      },
      {
        text: "    buildTheFuture()",
        color: "#34d399",
      },
      {
        text: "  }, [])",
        color: "#e5e7eb",
      },
      {
        text: "  return <Canvas3D />",
        color: "#a78bfa",
      },
    ];

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

      const fontSize = Math.max(10, W * 0.022);

      ctx.font = `${fontSize}px Space Mono`;

      const lineHeight = fontSize * 1.8;

      const startY = H * 0.15;

      lines.forEach((line, i) => {
        const visible = Math.floor((t - i * 8) / 1);

        if (visible <= 0) return;

        const text = line.text.slice(0, Math.min(visible, line.text.length));

        ctx.fillStyle = line.color;

        ctx.globalAlpha = 0.85;

        ctx.fillText(text, W * 0.08, startY + i * lineHeight);
      });

      ctx.globalAlpha = 1;

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
