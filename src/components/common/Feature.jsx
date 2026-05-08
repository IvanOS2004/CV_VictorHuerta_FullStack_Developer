import Reveal from "./Reveal";
import SkillBar from "./SkillBar";

export default function Feature({ icon, title, desc, pct, iconBg, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div
        style={{
          display: "flex",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: iconBg,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            fontSize: "0.8rem",

            flexShrink: 0,
            marginTop: 2,
          }}
        >
          {icon}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              color: "#fff",
              fontSize: "0.88rem",
              marginBottom: 4,
            }}
          >
            {title}
          </div>

          <div
            style={{
              color: "#6b7280",
              fontSize: "0.82rem",
              lineHeight: 1.6,
            }}
          >
            {desc}
          </div>

          <SkillBar pct={pct} />
        </div>
      </div>
    </Reveal>
  );
}
