import Reveal from "../components/common/Reveal";
import Feature from "../components/common/Feature";
import Blob from "../components/common/Blob";

import SplineScene from "../components/canvas/SplineScene";

import useServerCanvas from "../hooks/useServerCanvas";

import springIcon from "../assets/tech/spring.svg";
import dotnetIcon from "../assets/tech/dotnet.svg";
import postgresIcon from "../assets/tech/postgres.svg";
import postmanIcon from "../assets/tech/postman.svg";
import dockerIcon from "../assets/tech/docker.svg";
import awsIcon from "../assets/tech/aws.svg";

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
            <SplineScene canvasHook={useServerCanvas} height={440} />
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
                Back-end skills
              </h2>
            </Reveal>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <Feature
                icon={postgresIcon}
                title="PostgreSQL"
                pct={0.8}
                level="intermediate"
                iconBg="rgba(34,211,238,0.08)"
              />

              <Feature
                icon={postmanIcon}
                title="Postman"
                pct={0.75}
                level="intermediate"
                iconBg="rgba(249,115,22,0.08)"
              />

              <Feature
                icon={springIcon}
                title="Java + Spring Boot"
                pct={0.9}
                level="basic"
                iconBg="rgba(239,68,68,0.08)"
              />

              <Feature
                icon={dotnetIcon}
                title=".NET"
                pct={0.8}
                level="basic"
                iconBg="rgba(168,85,247,0.08)"
              />

              <Feature
                icon={dockerIcon}
                title="Docker"
                pct={0.7}
                level="basic"
                iconBg="rgba(14,165,233,0.08)"
              />

              <Feature
                icon={awsIcon}
                title="AWS"
                pct={0.5}
                level="basic"
                iconBg="rgba(250,204,21,0.08)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
