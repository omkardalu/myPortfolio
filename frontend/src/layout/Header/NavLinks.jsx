import { Link } from "react-router-dom";
import { useState } from "react";

const NavLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center">
      <button
        className="p-2 focus:outline-none sm:hidden"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className="mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-300"
          style={{ transform: open ? "rotate(45deg) translateY(7px)" : "none" }}
        ></span>
        <span
          className={`mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          className="block h-0.5 w-6 bg-gray-800 transition-all duration-300"
          style={{
            transform: open ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        ></span>
      </button>
      <ul
        className={`fixed max-sm:right-0.5 max-sm:left-0.5 max-sm:top-14 flex flex-col rounded-2xl bg-[#ffffffc2] backdrop-blur-xs font-bold max-sm:text-4xl shadow-md transition-all duration-300 sm:relative  sm:w-auto sm:flex-row sm:items-center sm:space-x-15 sm:bg-transparent sm:shadow-none ${open ? "flex" : "hidden"} z-20 sm:flex`}
      >
        <Link to={"/"} onClick={() => setOpen(false)}>
          <li className="cursor-pointer rounded max-sm:px-5 max-sm:py-5 max-sm:border-b-1 ">
            Projects
          </li>
        </Link>
        <Link to={"/blogposts"} onClick={() => setOpen(false)}>
          <li className="cursor-pointer rounded max-sm:px-5 max-sm:py-5 max-sm:border-b-1 ">
            Blog
          </li>
        </Link>
        <li className="cursor-pointer rounded max-sm:px-5 max-sm:py-5 ">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
