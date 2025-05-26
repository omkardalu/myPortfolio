import { Link } from "react-router-dom";
import githubLogo from "../../assets/images/github-logo.svg";
import upRightArrowLogo from "../../assets/images/up-right-arrow.png";
const ProjectCard = ({ name, img, description, tools, link, github }) => {
  return (
    <section className="m-4 flex w-[350px] flex-col justify-center rounded-2xl border-2 border-transparent bg-[#ffffff3c] p-3 shadow-2xl backdrop-blur-xs transition-all duration-300 ease-in-out hover:bg-[#ffffff5e]">
      <div className="px-2 text-2xl capitalize">{name}</div>
      <div className="mt-1 flex h-[180px] w-[100%] items-center justify-center overflow-hidden rounded-2xl border-2 border-transparent shadow-md">
        <img className="h-full w-full object-cover" src={img} alt={name} />
      </div>
      <div className="mt-3 h-[4lh] px-2 text-xl text-[0.9rem] font-[500] text-shadow-neutral-900">
        {description}
      </div>
      <p className="ml-3 flex h-[2lh] items-center font-mono text-[0.9rem]">
        Built on: {tools}
      </p>
      <div className="mt-3 flex w-full items-center justify-between px-4">
        <Link to={github} target="_blank">
          <img
            title="visit github repo"
            className="w-5"
            src={githubLogo}
            alt="github"
          />
        </Link>
        <Link to={link} target="_blank">
          <img
            title="visit live"
            className="w-4"
            src={upRightArrowLogo}
            alt="arrow"
          />
        </Link>
      </div>
    </section>
  );
};
export default ProjectCard;
