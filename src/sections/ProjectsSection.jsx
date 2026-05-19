import ProjectCard from "../components/projects/ProjectCard";
import Reveal from "../components/common/Reveal";

import medicappImg from "../assets/projects/medicapp_project.jpeg";
import smartschoolImg from "../assets/projects/smartschool_project.PNG";
import reciclablesImg from "../assets/projects/reciclablesguadiana_project.PNG";
import servicioImg from "../assets/projects/serviciocitas_project.PNG";

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
              A collection of full-stack, mobile and backend projects designed
              to solve real-world problems.
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
            image={medicappImg}
            title="Medical Appointment Platform"
            desc="Cross-platform medical appointment app developed using React Native, Tailwind CSS, Java Spring Boot and Postman for API testing and integration."
            tags={[
              "React Native",
              "Tailwind CSS",
              "Java Spring Boot",
              "Postman",
            ]}
            repos={[
              {
                label: "Frontend Code",
                url: "https://github.com/IvanOS2004/MedicApp_Movil.git",
              },
              {
                label: "Backend Code",
                url: "https://github.com/Andr000meda/medicApp.git",
              },
            ]}
          />

          {/* PROJECT 2 */}
          <ProjectCard
            image={smartschoolImg}
            title="Smart School Website"
            desc="Frontend development for an educational platform."
            tags={["React", "Tailwind CSS"]}
            repos={[
              {
                label: "Frontend Code",
              },
            ]}
          />

          {/* PROJECT 3 */}
          <ProjectCard
            image={reciclablesImg}
            title="Reciclables Guadiana"
            desc="Frontend development for a recycling center."
            tags={["React", "Tailwind CSS"]}
            repos={[
              {
                label: "Frontend Code",
                url: "https://github.com/ElReyUnicornio/reciclables-guadiana.git",
              },
            ]}
          />

          {/* PROJECT 4 */}
          <ProjectCard
            image={servicioImg}
            title="Dating Services"
            desc="Appointment scheduling system for a multipurpose platform."
            tags={["Laravel", "Tailwind CSS", "Livewire", "Alpine.js"]}
            repos={[
              {
                label: "Frontend Code",
                url: "https://github.com/GMStoreMexico/CitasServicios.git",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
