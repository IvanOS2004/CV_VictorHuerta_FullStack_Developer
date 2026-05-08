import ProjectCard from "../components/projects/ProjectCard";
import Reveal from "../components/common/Reveal";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "112px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <Reveal>
          <div
            style={{
              textAlign: "center",
              marginBottom: 60,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem,3.5vw,3rem)",
                color: "#fff",
                marginBottom: 12,
              }}
            >
              Project Showcase
            </h2>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 20,
          }}
        >
          <ProjectCard
            icon="📊"
            title="Nexus Analytics Platform"
            desc="Real-time analytics dashboard."
            tags={["Next.js", "PostgreSQL"]}
          />

          <ProjectCard
            icon="🛒"
            title="E-Commerce Microservices"
            desc="Headless commerce architecture."
            tags={["Node.js", "Stripe"]}
          />

          <ProjectCard
            icon="⚙️"
            title="WebGL Configurator"
            desc="Interactive 3D product configurator."
            tags={["Three.js", "React Three Fiber"]}
          />
        </div>
      </div>
    </section>
  );
}
