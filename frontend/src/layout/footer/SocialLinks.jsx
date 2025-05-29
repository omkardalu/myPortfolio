import { Link } from "react-router-dom";
import gitHubLogo from "../../assets/images/github-logo.svg";
import linkedinLogo from "../../assets/images/linkedin-logo.svg";
import instagramLogo from "../../assets/images/instagram-logo.svg";
import XLogo from "../../assets/images/X-logo.svg";

const socialLink = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link to={"https://github.com/omkardalu"} target="_blank">
        <img
          rel="preload"
          as="image"
          className="h-6"
          src={gitHubLogo}
          alt="github"
        />
      </Link>
      <Link
        to={"https://www.linkedin.com/in/omkar-dalu-004169301/"}
        target="_blank"
      >
        <img
          rel="preload"
          as="image"
          className="h-6"
          src={linkedinLogo}
          alt="github"
        />
      </Link>
      <Link to={"https://www.instagram.com/omkardalu/"} target="_blank">
        <img
          rel="preload"
          as="image"
          className="h-6"
          src={instagramLogo}
          alt="github"
        />
      </Link>
      <Link to={"https://x.com/DaluOmkar"} target="_blank">
        <img
          rel="preload"
          as="image"
          className="h-6"
          src={XLogo}
          alt="github"
        />
      </Link>
    </div>
  );
};

export default socialLink;
