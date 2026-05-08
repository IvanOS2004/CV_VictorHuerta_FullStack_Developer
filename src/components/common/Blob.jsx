export default function Blob({ w, h, color, style = {} }) {
  return (
    <div
      style={{
        position: "absolute",
        width: w,
        height: h,
        borderRadius: "50%",
        background: color,
        filter: "blur(120px)",
        opacity: 0.1,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}
