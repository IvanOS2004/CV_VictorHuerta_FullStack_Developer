import { useEffect, useState } from "react";

import Blob from "../components/common/Blob";
import Reveal from "../components/common/Reveal";
import Stat from "../components/common/Stat";

import SplineScene from "../components/canvas/SplineScene";

import useGlobeCanvas from "../hooks/useGlobeCanvas";

export default function HeroSection() {
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
      id="experience"
      className="grid-bg"
      style={{
        minHeight: "100vh",

        display: "flex",

        alignItems: "center",

        paddingTop: isMobile ? 120 : 80,

        paddingBottom: isMobile ? 60 : 0,

        position: "relative",

        overflow: "hidden",
      }}
    >
      <Blob
        w={600}
        h={600}
        color="#6366f1"
        style={{
          top: -80,
          left: -200,
        }}
      />

      <Blob
        w={500}
        h={500}
        color="#a78bfa"
        style={{
          top: "20%",
          right: -180,
        }}
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

            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",

            gap: isMobile ? 40 : 60,

            alignItems: "center",

            minHeight: isMobile ? "auto" : "85vh",
          }}
        >
          <div
            style={{
              order: isMobile ? 2 : 1,

              textAlign: isMobile ? "center" : "left",
            }}
          >
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

                  justifyContent: isMobile ? "center" : "flex-start",

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

                  fontWeight: 300,

                  fontSize: isMobile
                    ? "clamp(2.4rem,10vw,3.5rem)"
                    : "clamp(2.8rem,5vw,4.2rem)",

                  lineHeight: 1.05,

                  letterSpacing: "-0.03em",

                  color: "#fff",

                  marginBottom: 24,
                }}
              >
                Hello World.
                <br />
                I'm Victor Huerta
                <br />
                <span className="gradient-text-warm">
                  Software engineer / Full-stack developer jr.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <p
                style={{
                  color: "#9ca3af",

                  lineHeight: 1.75,

                  marginBottom: 36,

                  maxWidth: isMobile ? "100%" : 420,

                  marginInline: isMobile ? "auto" : "0",

                  fontWeight: 300,

                  fontSize: isMobile ? "0.95rem" : "1rem",
                }}
              >
                Full-Stack Engineer specializing in high-performance React
                applications, scalable backend architectures, and immersive
                digital experiences.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div
                style={{
                  display: "flex",

                  justifyContent: isMobile ? "center" : "flex-start",

                  gap: isMobile ? 24 : 32,

                  alignItems: "center",

                  flexWrap: "wrap",
                }}
              >
                <Stat target={3} label="Years Exp." />

                <div
                  style={{
                    width: 1,

                    height: 40,

                    background: "#1f2937",
                  }}
                />

                <Stat target={4} label="Projects" />
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="float">
            <div
              style={{
                order: isMobile ? 1 : 2,

                width: "100%",

                maxWidth: isMobile ? 520 : "100%",

                margin: "0 auto",
              }}
            >
              <SplineScene
                canvasHook={useGlobeCanvas}
                label=""
                height={isMobile ? 300 : 620}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
