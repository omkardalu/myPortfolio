import { useState } from "react";
import NavLinks from "./NavLinks.jsx";
import { Link } from "react-router-dom";
const Header = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  return (
    <header className="bounce-once sticky top-0 right-0 left-0 z-10 flex items-center justify-between p-4 px-6 backdrop-blur-3xl">
      <Link to={"/"}>
        <p onClick={() => setIsPopUpOpen(false)}>Home</p>
      </Link>
      {/* <p className="align-right">light</p> */}
      <NavLinks isPopUpOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} />
    </header>
  );
};

export default Header;
