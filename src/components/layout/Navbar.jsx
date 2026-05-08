export default function Navbar({ activeSection }) {
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
        <a
          href="#"
          style={{
            fontFamily: "'Syne',sans-serif",
            fontWeight: 800,
            fontSize: "0.9rem",
            letterSpacing: "0.12em",
            color: "#fff",
            textDecoration: "none",
            textTransform: "uppercase",
            cursor: "none",
          }}
        >
          Dev<span style={{ color: "#818cf8" }}>Architect</span>
        </a>

        {/* Navigation */}
        <div style={{ display: "flex", gap: 32 }}>
          {["experience", "projects", "stack", "contact"].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`nav-link${activeSection === s ? " active" : ""}`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>

        {/* Actions */}
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

          <button className="btn-primary">Resume ↗</button>
        </div>
      </div>
    </nav>
  );
}
