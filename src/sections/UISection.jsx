import { useEffect, useState } from "react";

import Reveal from "../components/common/Reveal";
import Feature from "../components/common/Feature";
import Blob from "../components/common/Blob";

import SplineScene from "../components/canvas/SplineScene";

import useLaptopCanvas from "../hooks/useLaptopCanvas";

import reactIcon from "../assets/tech/react.svg";
import tailwindcssIcon from "../assets/tech/tailwindcss.svg";
import figmaIcon from "../assets/tech/figma.svg";

export default function UISection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="frontend"
      style={{
        padding: isMobile ? "90px 0" : "112px 0",
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

            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",

            gap: isMobile ? 60 : 64,

            alignItems: "center",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              order: isMobile ? 2 : 1,
            }}
          >
            <Reveal>
              <h2
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,

                  fontSize: "clamp(2rem,3.5vw,3rem)",

                  letterSpacing: "-0.03em",

                  color: "#fff",

                  marginBottom: 24,

                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Front-end skills
              </h2>
            </Reveal>

            <div
              style={{
                display: "grid",

                gridTemplateColumns:
                  window.innerWidth <= 600
                    ? "1fr"
                    : "repeat(2, minmax(0, 1fr))",

                gap: 22,
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
                title="React"
                pct={0.95}
                level="intermediate"
                iconBg="rgba(14,165,233,0.08)"
              />

              <Feature
                icon={reactIcon}
                title="React Native"
                pct={0.75}
                level="intermediate"
                iconBg="rgba(14,165,233,0.08)"
              />

              <Feature
                icon={tailwindcssIcon}
                title="Tailwind CSS"
                pct={0.8}
                level="intermediate"
                iconBg="rgba(250,204,21,0.08)"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <Reveal delay={0.08}>
            <div
              style={{
                order: isMobile ? 1 : 2,

                width: "100%",

                maxWidth: isMobile ? 520 : "100%",

                margin: isMobile ? "0 auto" : "0",
              }}
            >
              <SplineScene
                canvasHook={useLaptopCanvas}
                label="[ 3D Laptop Asset ]"
                height={isMobile ? 320 : 440}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
