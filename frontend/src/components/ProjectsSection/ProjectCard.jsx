import { Link } from "react-router-dom";
import githubLogo from "../../assets/images/github-logo.png";
import upRightArrowLogo from "../../assets/images/up-right-arrow.png";
const ProjectCard = ({ name, img, description, tools, link, github }) => {
  return (
    <section className="flex w-[350px] flex-col shadow-2xl m-4 justify-center rounded-2xl bg-[#ffffff3c] p-4 backdrop-blur-xs">
      <div className="text-2xl capitalize">{name}</div>
      <div className="mt-3 flex h-[180px] w-[100%] items-center justify-center overflow-hidden rounded-2xl shadow-2xl">
        <img className="h-full" src={img} alt={name} />
      </div>
      <div className="mt-3 h-[100px] p-2 text-xl text-[0.9rem] font-[500] text-shadow-neutral-900">
        {description}
      </div>
      <p className="font-mono text-[0.9rem] ml-2">Built on: {tools}</p>
      <div className="flex w-full items-center justify-between p-3">
        <Link to={github} target="_blank">
          <img title="visit github repo" className="mr-3 w-6" src={githubLogo} alt="github" />
        </Link>
        <Link to={link} target="_blank">
          <img title="visit live" className="mr-3 w-4" src={upRightArrowLogo} alt="arrow" />
        </Link>
      </div>
    </section>
  );
};
export default ProjectCard;
