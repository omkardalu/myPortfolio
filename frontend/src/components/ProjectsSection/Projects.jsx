import ProjectCard from "./ProjectCard.jsx";
const Projects = () => {
  const projects = [
    {
      name: "Portfolio",
      img: "./images/portfolio.png",
      description:
        "A Portfolio website that shows all my projects,skills and information  ",
      tools: "tailwindCSS, React",
      link: "https://omkar-x1nz.onrender.com/",
      github: "https://github.com/omkardalu/myPortfolio",
    },
    {
      name: "write&X",
      img: "./images/write-x.png",
      description:
        "A Blog posting website where users can login, create blogs,like,share, follow, search etc. with professional text formater  ",
      tools: "CSS, React, Express, sqlite3",
      link: "https://writeandx.onrender.com",
      github: "https://github.com/omkardalu/shivaji-omkar-write-X/tree/main",
    },
    {
      name: "Quiz time",
      img: "./images/quiz-time.png",
      description:
        "An interactive quiz application that allows users to test their knowledge, with features like timer, music and Score Board.",
      tools: "HTML, CSS, JavaScript",
      link: "https://omkardalu.github.io/quiz-time/",
      github: "https://github.com/omkardalu/quiz-time",
    },
    {
      name: "window clone",
      img: "./images/windows-clone.png",
      description:
        "A windows desktop clone with File Explorer, start menu and taskbar with HTML and CSS",
      tools: "HTML, CSS",
      link: "https://omkardalu.github.io/windows-clone/",
      github: "https://github.com/omkardalu/windows-clone",
    },
    {
      name: "apple clone",
      img: "./images/apple-clone.png",
      description:
        "A clone of the Apple website's homepage UI, showcasing its products and features.",
      tools: "HTML, CSS",
      link: "https://omkardalu.github.io/apple-clone/",
      github: "https://github.com/omkardalu/apple-clone",
    },
    {
      name: "squareSpace clone",
      img: "./images/squarespace-clone.png",
      description:
        "A clone of the squarespace website homepage UI, showcasing its products and features.",
      tools: "HTML, CSS",
      link: "https://omkardalu.github.io/Squarespace/",
      github: "https://github.com/omkardalu/Squarespace",
    },
    {
      name: "flipkart clone",
      img: "./images/flipkart-clone.png",
      description:
        "A clone of the Flipkart website homepage UI, showcasing its products and features.",
      tools: "HTML, CSS",
      link: "https://jovial-puppy-c62964.netlify.app/",
      github: "https://github.com/path-tw/my-clone-omkardalu",
    },
  ];
  const projectsList = projects.map((project) => (
    <ProjectCard
      key={project.name}
      name={project.name}
      img={project.img}
      description={project.description}
      tools={project.tools}
      link={project.link}
      github={project.github}
    />
  ));
  return (
    <section id="projects" className="mt-10">
      <div className="flex grow flex-wrap items-center justify-center">
        {projectsList}
      </div>
    </section>
  );
};
export default Projects;
