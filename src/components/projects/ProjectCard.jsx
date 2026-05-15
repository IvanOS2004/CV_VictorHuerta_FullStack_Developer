import Reveal from "../common/Reveal";

export default function ProjectCard({
  image,
  title,
  desc,
  tags = [],
  delay = 0,
}) {
  return (
    <Reveal delay={delay}>
      <div className="project-card">
        {/* Preview */}
        <div
          style={{
            height: 200,
            position: "relative",
            overflow: "hidden",
            background: "#0f172a",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",

              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(7,9,15,0.65), rgba(7,9,15,0.05))",
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            padding: "20px 20px 18px",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              color: "#6b7280",
              fontSize: "0.82rem",
              lineHeight: 1.65,
              marginBottom: 14,
            }}
          >
            {desc}
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 14,
            }}
          >
            {tags.map((tag, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,

                  padding: "7px 12px",

                  borderRadius: 999,

                  background: "rgba(99,102,241,0.08)",

                  border: "1px solid rgba(99,102,241,0.18)",

                  color: "#c7d2fe",

                  fontSize: "0.72rem",

                  fontFamily: "'Space Mono', monospace",

                  letterSpacing: "0.03em",

                  transition: "0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                  e.currentTarget.style.background = "rgba(99,102,241,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px)";
                  e.currentTarget.style.borderColor = "rgba(99,102,241,0.18)";
                  e.currentTarget.style.background = "rgba(99,102,241,0.08)";
                }}
              >
                <span>{tag}</span>
              </div>
            ))}
          </div>

          {/* Link */}
          <a
            href="#"
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: "0.68rem",
              color: "#818cf8",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#22d3ee")}
            onMouseLeave={(e) => (e.target.style.color = "#818cf8")}
          >
            VIEW CODE <span>→</span>
          </a>
        </div>
      </div>
    </Reveal>
  );
}
