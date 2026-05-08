import Reveal from "../components/common/Reveal";
import Feature from "../components/common/Feature";
import Blob from "../components/common/Blob";

import SplineScene from "../components/canvas/SplineScene";

import useLaptopCanvas from "../hooks/useLaptopCanvas";

export default function UISection() {
  return (
    <section
      style={{
        padding: "112px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Blob
        w={420}
        h={420}
        color="#6366f1"
        style={{
          top: "40%",
          right: -120,
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
          {/* Left */}
          <div>
            <Reveal>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem,3.5vw,3rem)",
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  marginBottom: 20,
                }}
              >
                Crafting Immersive UIs
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p
                style={{
                  color: "#9ca3af",
                  lineHeight: 1.75,
                  marginBottom: 36,
                  fontWeight: 300,
                }}
              >
                Delivering pixel-perfect, accessible, and highly interactive
                user interfaces.
              </p>
            </Reveal>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <Feature
                icon="⟨/⟩"
                title="React & Next.js"
                desc="Modern frontend architecture."
                pct={0.92}
                iconBg="rgba(99,102,241,0.12)"
              />

              <Feature
                icon="✦"
                title="Tailwind CSS"
                desc="Scalable utility-first styling."
                pct={0.95}
                iconBg="rgba(34,211,238,0.1)"
              />

              <Feature
                icon="◈"
                title="Framer Motion"
                desc="Fluid animations and transitions."
                pct={0.88}
                iconBg="rgba(52,211,153,0.1)"
              />
            </div>
          </div>

          {/* Right */}
          <Reveal delay={0.08}>
            <SplineScene
              canvasHook={useLaptopCanvas}
              label="[ 3D Laptop Asset ]"
              height={440}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
