import Blob from "../components/common/Blob";
import Reveal from "../components/common/Reveal";
import Stat from "../components/common/Stat";

import SplineScene from "../components/canvas/SplineScene";

import useGlobeCanvas from "../hooks/useGlobeCanvas";

export default function HeroSection() {
  return (
    <section
      id="experience"
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Blob w={600} h={600} color="#6366f1" style={{ top: -80, left: -200 }} />

      <Blob
        w={500}
        h={500}
        color="#a78bfa"
        style={{ top: "20%", right: -180 }}
      />

      <Blob
        w={400}
        h={400}
        color="#22d3ee"
        style={{
          bottom: -60,
          left: "35%",
          opacity: 0.05,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            minHeight: "85vh",
          }}
        >
          {/* Left */}
          <div>
            <Reveal>
              <div
                style={{
                  fontFamily: "'Space Mono',monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.2em",
                  color: "#818cf8",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 20,
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
                System Initialization...
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem,5vw,4.2rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  marginBottom: 24,
                }}
              >
                Building the
                <br />
                <span className="gradient-text-warm">Future of the Web</span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p
                style={{
                  color: "#9ca3af",
                  lineHeight: 1.75,
                  marginBottom: 36,
                  maxWidth: 420,
                  fontWeight: 300,
                }}
              >
                Full-Stack Engineer specializing in high-performance React
                applications, scalable Node.js architectures, and immersive
                digital experiences.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  marginBottom: 52,
                }}
              >
                <button className="btn-primary">View Projects</button>

                <button className="btn-ghost">Contact Me</button>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  alignItems: "center",
                }}
              >
                <Stat target={5} label="Years Exp." />

                <div
                  style={{
                    width: 1,
                    height: 40,
                    background: "#1f2937",
                  }}
                />

                <Stat target={48} label="Projects" />

                <div
                  style={{
                    width: 1,
                    height: 40,
                    background: "#1f2937",
                  }}
                />

                <Stat target={12} label="Open Source" />
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <Reveal delay={0.1} className="float">
            <SplineScene
              canvasHook={useGlobeCanvas}
              label="[ 3D Render Canvas ]"
              height={480}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
