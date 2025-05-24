import { Link } from "react-router-dom";
import githubLogo from "../../assets/images/github-logo.png";
import upRightArrowLogo from "../../assets/images/up-right-arrow.png";
const ProjectCard = ({ name, img, description, link, github }) => {
  return (
    <section className="flex w-[350px] flex-col justify-center rounded-2xl p-4 bg-[#ffffff3c] backdrop-blur-xs">
      <div className="text-2xl capitalize">{name}</div>
      <div className="mt-3 flex h-[180px] shadow-2xl w-[100%] items-center justify-center overflow-hidden rounded-2xl">
        <img className="h-full" src={img} alt={name} />
      </div>
      <div className="h-[100px] mt-3 p-2 text-xl text-[0.9rem] font-[500] text-shadow-neutral-900">
        {description}
      </div>
      <div className="flex w-full items-center justify-between p-4">
        <Link to={github} target="_blank">
          <img className="mr-3 w-6" src={githubLogo} alt="github" />
        </Link>
        <Link to={link} target="_blank">
          <img className="mr-3 w-6" src={upRightArrowLogo} alt="arrow" />
        </Link>
      </div>
    </section>
  );
};
export default ProjectCard;
