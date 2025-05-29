import { Link } from "react-router-dom";

const NavLinks = ({ isPopUpOpen, setIsPopUpOpen }) => {
  return (
    <nav className="relative flex items-center">
      <button
        className="p-2 focus:outline-none sm:hidden"
        onClick={() => setIsPopUpOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className="mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-300"
          style={{
            transform: isPopUpOpen ? "rotate(45deg) translateY(7px)" : "none",
          }}
        ></span>
        <span
          className={`mb-1 block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${isPopUpOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className="block h-0.5 w-6 bg-gray-800 transition-all duration-300"
          style={{
            transform: isPopUpOpen ? "rotate(-45deg) translateY(-7px)" : "none",
          }}
        ></span>
      </button>
      <ul
        className={`bounce-once fixed flex flex-col from-[#d25eb1] to-[#f3c190] font-bold shadow-md backdrop-blur-3xl transition-all duration-300 max-sm:top-14 max-sm:right-0 max-sm:left-0 max-sm:bg-gradient-to-br max-sm:text-4xl sm:relative sm:w-auto sm:flex-row sm:items-center sm:space-x-15 sm:bg-transparent sm:shadow-none ${isPopUpOpen ? "flex" : "hidden"} z-20 sm:flex`}
      >
        <li
          className={
            "cursor-pointer rounded max-sm:border-b-1 max-sm:px-5 max-sm:py-5"
          }
        >
          <Link to={"/blogposts"} onClick={() => setIsPopUpOpen(false)}>
            Blogs
          </Link>
        </li>
        <li className="cursor-pointer rounded max-sm:px-5 max-sm:py-5">
          <Link to={"/contact"} onClick={() => setIsPopUpOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
