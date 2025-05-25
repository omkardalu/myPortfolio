import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="group flex">
      <p className="hidden max-sm:block">☰</p>
      <ul className="absolute flex space-x-15 font-medium max-sm:hidden sm:static">
        <Link to={'/'}><li className="cursor-pointer">Projects</li></Link>
        <Link to={'/blog'}><li className="cursor-pointer">Blog</li></Link>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default NavLinks;
