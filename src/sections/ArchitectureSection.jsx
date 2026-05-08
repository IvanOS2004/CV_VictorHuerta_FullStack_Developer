import Reveal from "../components/common/Reveal";
import Feature from "../components/common/Feature";
import Blob from "../components/common/Blob";

import SplineScene from "../components/canvas/SplineScene";

import useServerCanvas from "../hooks/useServerCanvas";

export default function ArchitectureSection() {
  return (
    <section
      id="stack"
      style={{
        padding: "112px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Blob
        w={500}
        h={500}
        color="#a78bfa"
        style={{
          top: "25%",
          left: -160,
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <Reveal delay={0.08}>
            <SplineScene
              canvasHook={useServerCanvas}
              label="[ 3D Data Node Asset ]"
              height={440}
            />
          </Reveal>

          <div>
            <Reveal>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  color: "#fff",
                  marginBottom: 20,
                }}
              >
                Robust Architectures
              </h2>
            </Reveal>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <Feature
                icon="▶"
                title="Node.js & Express"
                desc="Efficient backend systems."
                pct={0.9}
                iconBg="rgba(52,211,153,0.1)"
              />

              <Feature
                icon="◎"
                title="PostgreSQL & Redis"
                desc="Fast and scalable databases."
                pct={0.85}
                iconBg="rgba(34,211,238,0.1)"
              />

              <Feature
                icon="⬡"
                title="Docker & CI/CD"
                desc="Containerized deployments."
                pct={0.87}
                iconBg="rgba(167,139,250,0.1)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
