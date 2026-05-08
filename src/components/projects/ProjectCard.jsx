import Reveal from "../common/Reveal";

export default function ProjectCard({
  icon,
  title,
  desc,
  tags = [],
  previewBg,
  previewEl,
  delay = 0,
}) {
  return (
    <Reveal delay={delay}>
      <div className="project-card">
        {/* Preview */}
        <div
          style={{
            height: 180,
            background: previewBg || "linear-gradient(135deg,#111827,#1a2035)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Icon */}
          {icon && (
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 14,
                background: "rgba(99,102,241,0.12)",
                border: "1px solid rgba(99,102,241,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                zIndex: 2,
              }}
            >
              {icon}
            </div>
          )}

          {/* Custom Preview Element */}
          {previewEl}
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
              gap: 6,
              marginBottom: 14,
            }}
          >
            {tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
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
