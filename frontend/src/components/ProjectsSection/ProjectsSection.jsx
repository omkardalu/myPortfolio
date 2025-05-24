import Projects from "./Projects.jsx";
const ProjectsSection = () => {
  return (
    <section 
      id="projects-section"
      className="flex flex-col items-center text-4xl font-bold justify-center bg-gradient-to-tr from-[#cf81c1] to-[#ffd8b1] p-8"
    >
      <h1>Projects</h1>
      <Projects />
    </section>
  );
};

export default ProjectsSection;
