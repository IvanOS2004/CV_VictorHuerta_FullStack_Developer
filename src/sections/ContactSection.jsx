import Reveal from "../components/common/Reveal";
import Blob from "../components/common/Blob";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        padding: "112px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Blob */}
      <Blob
        w={600}
        h={600}
        color="#a78bfa"
        style={{
          bottom: -120,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.07,
        }}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* HEADER */}
        <Reveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: 56,
            }}
          >
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#818cf8",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                marginBottom: 18,
                textTransform: "uppercase",
              }}
            >
              Contact
            </p>

            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem,5vw,4.5rem)",
                lineHeight: 1,
                color: "#fff",
                marginBottom: 20,
              }}
            >
              Have a project? <br />
              <span className="gradient-text">Let's talk.</span>
            </h2>

            <p
              style={{
                color: "#6b7280",
                fontSize: "1rem",
                lineHeight: 1.8,
                maxWidth: 620,
                margin: "0 auto",
              }}
            >
              Whether you need a modern frontend, scalable backend APIs or a
              complete full-stack solution, feel free to reach out.
            </p>
          </div>
        </Reveal>

        {/* FORM */}
        <Reveal delay={0.15}>
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(17,24,39,0.96), rgba(15,23,42,0.96))",

              border: "1px solid rgba(99,102,241,0.12)",

              borderRadius: 24,

              padding: 36,

              backdropFilter: "blur(10px)",

              boxShadow: "0 20px 80px rgba(0,0,0,0.35)",
            }}
          >
            {/* NAME */}
            <div style={{ marginBottom: 18 }}>
              <label
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#cbd5e1",
                  fontSize: "0.85rem",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Name
              </label>

              <input
                type="text"
                className="form-input"
                placeholder="John Doe"
              />
            </div>

            {/* EMAIL */}
            <div style={{ marginBottom: 18 }}>
              <label
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#cbd5e1",
                  fontSize: "0.85rem",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Email
              </label>

              <input
                type="email"
                className="form-input"
                placeholder="john@example.com"
              />
            </div>

            {/* MESSAGE */}
            <div style={{ marginBottom: 24 }}>
              <label
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#cbd5e1",
                  fontSize: "0.85rem",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Message
              </label>

              <textarea
                rows={6}
                className="form-input"
                placeholder="Tell me about your project..."
                style={{
                  resize: "none",
                }}
              />
            </div>

            {/* BUTTON */}
            <button
              className="btn-primary"
              style={{
                width: "100%",
                height: 54,
                fontSize: "0.78rem",
              }}
            >
              SEND MESSAGE
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
