export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(13,17,23,0.95)",
        borderTop: "1px solid rgba(31,41,55,0.5)",
        padding: "32px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h3
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "1rem",
              color: "#e5e7eb",
              fontWeight: 700,
            }}
          >
            Victor Huerta
          </h3>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.85rem",
              color: "#6b7280",
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            Passionate about building modern web experiences, scalable backends
            and clean UI architectures.
          </p>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          {/* GITHUB */}
          <a
            href="https://github.com/IvanOS2004"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              color: "#9ca3af",
              transition: "0.25s",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#818cf8";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9ca3af";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 0 0 7.863 10.92c.575.104.787-.25.787-.556 0-.275-.01-1.004-.016-1.97-3.2.695-3.877-1.543-3.877-1.543-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.08-.7.08-.7 1.154.08 1.762 1.186 1.762 1.186 1.026 1.758 2.69 1.25 3.344.955.104-.743.402-1.25.73-1.538-2.554-.29-5.238-1.277-5.238-5.684 0-1.255.45-2.28 1.186-3.084-.12-.29-.514-1.458.112-3.04 0 0 .968-.31 3.172 1.178a11.04 11.04 0 0 1 5.776 0c2.204-1.488 3.17-1.178 3.17-1.178.628 1.582.234 2.75.115 3.04.738.804 1.184 1.83 1.184 3.084 0 4.418-2.688 5.39-5.25 5.675.414.356.783 1.058.783 2.133 0 1.54-.014 2.782-.014 3.16 0 .31.208.665.794.552A11.503 11.503 0 0 0 23.5 12C23.5 5.648 18.352.5 12 .5Z" />
            </svg>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/victor-ivan-huerta-054b7130a/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{
              color: "#9ca3af",
              transition: "0.25s",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#818cf8";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9ca3af";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2ZM1.5 8h3V22h-3V8Zm7.5 0h2.878v1.91h.041c.401-.76 1.38-1.56 2.84-1.56 3.038 0 3.6 2 3.6 4.59V22h-3v-7.01c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V22h-3V8Z" />
            </svg>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:victor.ivan.huertac@gmail.com?subject=Portfolio%20Contact"
            aria-label="Email"
            style={{
              color: "#9ca3af",
              transition: "0.25s",
              cursor: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#818cf8";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#9ca3af";
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
