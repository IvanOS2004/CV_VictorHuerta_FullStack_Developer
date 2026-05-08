import useReveal from "../../hooks/useReveal";
import useCounter from "../../hooks/useCounter";

export default function Stat({ target, label }) {
  const [ref, visible] = useReveal();

  const val = useCounter(target, visible);

  return (
    <div ref={ref}>
      <div className="stat-num">{val}+</div>

      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.1em",
          color: "#6b7280",
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}
