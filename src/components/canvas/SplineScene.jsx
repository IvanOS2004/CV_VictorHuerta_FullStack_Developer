import { useRef } from "react";

export default function SplineScene({
  canvasHook,
  label,
  height = 460,
  className = "",
}) {
  const canvasRef = useRef(null);

  canvasHook(canvasRef);

  return (
    <div className={`spline-wrap ${className}`} style={{ height }}>
      <div className="scan-line" />

      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />

      <div className="spline-label">{label}</div>
    </div>
  );
}
