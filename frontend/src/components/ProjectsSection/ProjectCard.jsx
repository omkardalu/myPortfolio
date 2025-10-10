import { Link } from "react-router-dom";
import githubLogo from "../../assets/images/github-logo.svg";
import upRightArrowLogo from "../../assets/images/up-right-arrow.png";
const ProjectCard = ({ name, img, description, tools, link, github,tag }) => {
  return (
    <section className="m-4 flex w-[345px] flex-col justify-center rounded-lg border-2 overflow-hidden border-[var(--card-bg-color)] bg-[var(--card-bg-color)] p-3 shadow-2xl backdrop-blur-xs transition-all duration-300 ease-in-out hover:bg-[#ffffff5e]">
        <div className="px-2 text-2xl capitalize">{name}</div>
        <div className={`absolute top-0 right-0  bg-[var(--card-bg-color)] px-4 py-1 text-[15px] text-[${tag === "new"? "#e85b5e":"#95287d"}] rounded-bl-2xl `}>{tag}</div>
      <div className="mt-1 flex h-[180px] w-[100%] items-center justify-center overflow-hidden rounded-lg border-2 border-[var(--card-bg-color)] shadow-md">
        <img className="h-full w-full object-cover" src={img} alt={name} />
      </div>
      <div className="mt-3 h-[4lh] px-2 text-xl text-[0.9rem] font-[500] text-shadow-neutral-900">
        {description}
      </div>
      <p className="ml-3 flex h-[2lh] items-center font-mono text-[0.9rem]">
        Built on: {tools}
      </p>
      <div className="mt-3 flex w-full items-center justify-between px-4 text-[0.9rem] font-medium">
        <div className="">
          {github && (
            <Link to={github} target="_blank">
              <img
                title="visit github repo"
                className="w-5"
                src={githubLogo}
                alt="github"
              />
            </Link>
          )}
        </div>
        <Link to={link} target="_blank">
          <div className="flex items-center gap-2 rounded-sm border border-[var(--card-bg-color)] bg-[var(--card-bg-color)] p-2 px-3">
            <span>Live:</span>
            <img
              title="visit live"
              className="w-4 invert"
              src={upRightArrowLogo}
              alt="arrow"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};
export default ProjectCard;
