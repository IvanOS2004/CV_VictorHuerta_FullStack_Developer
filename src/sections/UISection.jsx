import Reveal from "../components/common/Reveal";
import Feature from "../components/common/Feature";
import Blob from "../components/common/Blob";

import SplineScene from "../components/canvas/SplineScene";

import useLaptopCanvas from "../hooks/useLaptopCanvas";

import reactIcon from "../assets/tech/react.svg";
import tailwindcssIcon from "../assets/tech/tailwindcss.svg";
import figmaIcon from "../assets/tech/figma.svg";

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
                Front-end skills
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
                icon={figmaIcon}
                title="Figma"
                pct={0.7}
                level="intermediate"
                iconBg="rgba(14,165,233,0.08)"
              />

              <Feature
                icon={reactIcon}
                title="React and React Native"
                pct={0.95}
                level="intermediate"
                iconBg="rgba(14,165,233,0.08)"
              />

              <Feature
                icon={tailwindcssIcon}
                title="Tailwindcss"
                pct={0.8}
                level="intermediate"
                iconBg="rgba(250,204,21,0.08)"
              />
            </div>
          </div>

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
