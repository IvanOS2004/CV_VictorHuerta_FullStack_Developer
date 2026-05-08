export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(13,17,23,0.95)",
        borderTop: "1px solid rgba(31,41,55,0.5)",
        padding: "24px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono',monospace",
            fontSize: "0.62rem",
            color: "#6b7280",
            letterSpacing: "0.05em",
          }}
        >
          © 2024 DEVARCHITECT · BUILT WITH PRECISION
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {["Source Code", "Privacy Policy"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontFamily: "'Space Mono',monospace",
                fontSize: "0.62rem",
                color: "#6b7280",
                textDecoration: "none",
                transition: "color 0.2s",
                cursor: "none",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#818cf8")}
              onMouseLeave={(e) => (e.target.style.color = "#6b7280")}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
