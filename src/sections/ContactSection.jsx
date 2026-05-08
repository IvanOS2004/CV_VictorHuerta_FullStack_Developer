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
          maxWidth: 640,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Syne',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem,3.5vw,3rem)",
              color: "#fff",
              marginBottom: 14,
            }}
          >
            Initialize Communication
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            style={{
              color: "#6b7280",
              marginBottom: 48,
            }}
          >
            Looking to build something extraordinary?
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div
            style={{
              background: "#111827",
              border: "1px solid #1f2937",
              borderRadius: 16,
              padding: 32,
            }}
          >
            <input
              type="text"
              className="form-input"
              placeholder="Your name"
              style={{ marginBottom: 16 }}
            />

            <input
              type="email"
              className="form-input"
              placeholder="Your email"
              style={{ marginBottom: 16 }}
            />

            <textarea
              rows={5}
              className="form-input"
              placeholder="Your message..."
              style={{
                resize: "none",
                marginBottom: 20,
              }}
            />

            <button
              className="btn-primary"
              style={{
                width: "100%",
              }}
            >
              Send Transmission
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
