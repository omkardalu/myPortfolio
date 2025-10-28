import SkillCard from "./SkillCard";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      image: "./images/skillLogos/html-logo.svg",
    },
    {
      name: "CSS",
      image: "./images/skillLogos/css-logo.svg",
    },
    {
      name: "JavaScript",
      image: "./images/skillLogos/JavaScript-logo.png",
    },
    {
      name: "React.js",
      image: "./images/skillLogos/react-logo.svg",
    },
    {
      name: "tailwind",
      image: "./images/skillLogos/tailwind-logo.svg",
    },
    {
      name: "git/github",
      image: "./images/skillLogos/git-logo.svg",
    },
    // {
    //   name:"CPP",
    //   image:"./images/skillLogos/cpp-logo.svg",
    // },
    // {
    //   name:"C",
    //   image:"./images/skillLogos/c-logo.svg",
    // },
    // {
    //   name:"Java",
    //   image:"./images/skillLogos/java-logo.svg",
    // },
  ];
  return (
    <div className="flex flex-col flex-wrap items-center gap-2  justify-center rounded-lg border-2 border-transparent bg-[var(--card-bg-color)] m-4 p-4 shadow-2xl">
      <span className="self-start text-3xl font-bold">Skills</span>
      <div className="flex flex-wrap bg-[#ffffff1d] rounded-lg columns-3 items-center justify-center">
        {skills.map((skill) => (
          <SkillCard skillName={skill.name} image={skill.image} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
