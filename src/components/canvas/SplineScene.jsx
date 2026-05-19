import { useRef } from "react";

export default function SplineScene({
  canvasHook,
  height = 460,
  className = "",
  label = "",
}) {
  const canvasRef = useRef(null);

  canvasHook(canvasRef);

  return (
    <div
      className={`spline-wrap ${className}`}
      style={{
        width: "100%",
        height,

        position: "relative",

        overflow: "hidden",

        borderRadius: 20,
      }}
    >
      <div className="scan-line" />

      {/* REAL CANVAS CONTAINER */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          width: "100%",
          height: "100%",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",

            display: "block",
          }}
        />
      </div>

      {label && <div className="spline-label">{label}</div>}
    </div>
  );
}
