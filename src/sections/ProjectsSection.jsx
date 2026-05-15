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

            <p
              style={{
                color: "#6b7280",
                fontSize: "0.95rem",
                maxWidth: 650,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Proyectos.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 20,
          }}
        >
          {/* PROJECT 1 */}
          <ProjectCard
            image="https://placehold.co/600x400/0f172a/818cf8?text=Project+1"
            title="Medical Appointment Platform"
            desc="Cross-platform medical appointment app developed using React Native, Tailwind CSS, Java Spring Boot and Postman for API testing and integration."
            tags={[
              "React Native",
              "Tailwind CSS",
              "Java Spring Boot",
              "Postman",
            ]}
          />

          {/* PROJECT 2 */}
          <ProjectCard
            image="https://placehold.co/600x400/0f172a/818cf8?text=Project+2"
            title="Correos de México / Mex-Post APIs"
            desc="Backend API development for logistic and package management."
            tags={["FastAPI", "Python", "Postman", "QR Code", "PDF Automation"]}
          />

          {/* PROJECT 3 */}
          <ProjectCard
            image="https://placehold.co/600x400/0f172a/818cf8?text=Project+3"
            title="Smart School Website"
            desc="Frontend development for an educational platform."
            tags={["React", "Tailwind CSS"]}
          />
        </div>
      </div>
    </section>
  );
}
