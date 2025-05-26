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
        className={`fixed flex flex-col bounce-once max-sm:bg-gradient-to-br from-[#d25eb1] to-[#f3c190] font-bold shadow-md backdrop-blur-3xl transition-all duration-300 max-sm:top-14 max-sm:right-0 max-sm:left-0 max-sm:text-4xl sm:relative sm:w-auto sm:flex-row sm:items-center sm:space-x-15 sm:bg-transparent sm:shadow-none ${open ? "flex" : "hidden"} z-20 sm:flex`}
      >
        <Link to={"/"} onClick={() => setOpen(false)}>
          <li className="cursor-pointer rounded max-sm:border-b-1 max-sm:px-5 max-sm:py-5">
            Projects
          </li>
        </Link>
        <Link to={"/blogposts"} onClick={() => setOpen(false)}>
          <li className="cursor-pointer rounded max-sm:border-b-1 max-sm:px-5 max-sm:py-5">
            Blog
          </li>
        </Link>
        <Link to={"/contact"} onClick={() => setOpen(false)}>
          <li className="cursor-pointer rounded max-sm:px-5 max-sm:py-5">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavLinks;
