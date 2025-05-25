import Projects from "./Projects.jsx";
const ProjectsSection = () => {
  return (
    <section
      id="projects-section"
      className="flex flex-col items-center justify-center p-8 text-4xl font-bold"
    >
      <h1 id="project-title">Projects</h1>
      <Projects />
    </section>
  );
};

export default ProjectsSection;
