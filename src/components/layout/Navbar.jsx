import { smoothScrollTo } from "../../utils/smoothScroll";

export default function Navbar({ activeSection }) {
  const sections = [
    { id: "experience", label: "Experience" },
    { id: "frontend", label: "Stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(7,9,15,0.72)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(31,41,55,0.45)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => smoothScrollTo("experience")}
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            color: "#fff",
            textDecoration: "none",
            textTransform: "uppercase",
            cursor: "none",
            background: "none",
            border: "none",
          }}
        >
          Full-stack
          <span style={{ color: "#818cf8" }}>Developer</span>
        </button>

        {/* Navigation */}
        <div style={{ display: "flex", gap: 32 }}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => smoothScrollTo(section.id)}
              className={`nav-link${
                activeSection === section.id ? " active" : ""
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Status */}
        <div style={{ display: "flex", gap: 10 }}>
          <button
            className="btn-ghost"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              className="pulse-dot"
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            Open to Work
          </button>
        </div>
      </div>
    </nav>
  );
}
