import useReveal from "../../hooks/useReveal";

export default function SkillBar({ pct, color = "#6366f1" }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        height: 3,
        background: "rgba(31,41,55,0.8)",
        borderRadius: 2,
        overflow: "hidden",
        marginTop: 10,
      }}
    >
      <div
        className="skill-bar-fill"
        style={{
          height: "100%",
          borderRadius: 2,

          background: `linear-gradient(
            90deg,
            ${color},
            #22d3ee
          )`,

          transform: visible ? `scaleX(${pct})` : "scaleX(0)",

          transformOrigin: "left",
        }}
      />
    </div>
  );
}
