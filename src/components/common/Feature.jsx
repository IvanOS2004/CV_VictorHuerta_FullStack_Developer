import Reveal from "./Reveal";
import SkillBar from "./SkillBar";

export default function Feature({
  icon,
  title,
  pct,
  level = "basic",
  iconBg,
  delay = 0,
}) {
  const levelConfig = {
    basic: {
      active: 1,
      color: "#22c55e",
    },

    intermediate: {
      active: 2,
      color: "#f59e0b",
    },

    advanced: {
      active: 3,
      color: "#ef4444",
    },
  };

  const currentLevel = levelConfig[level];

  return (
    <Reveal delay={delay}>
      <div
        style={{
          display: "flex",
          gap: 14,
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 10,
            background: iconBg,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            flexShrink: 0,
          }}
        >
          <img
            src={icon}
            alt={title}
            style={{
              width: 22,
              height: 22,
              objectFit: "contain",
            }}
          />
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                color: "#fff",
                fontSize: "0.9rem",
              }}
            >
              {title}
            </div>

            {/* Level Dots */}
            <div
              style={{
                display: "flex",
                gap: 6,
              }}
            >
              {[1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",

                    background:
                      dot <= currentLevel.active
                        ? currentLevel.color
                        : "#374151",

                    transition: "0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Skill Bar */}
          <SkillBar pct={pct} />
        </div>
      </div>
    </Reveal>
  );
}
