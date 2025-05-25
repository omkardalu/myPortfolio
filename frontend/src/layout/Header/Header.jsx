import NavLinks from "./NavLinks.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="sticky top-0 right-0 left-0 z-10 flex items-center justify-between p-4 px-6 backdrop-blur-2xl">
      <Link to={"/"}>Home</Link>
      <NavLinks />
    </header>
  );
};

export default Header;
