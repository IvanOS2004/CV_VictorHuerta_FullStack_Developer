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
      </div>
    </section>
  );
}
