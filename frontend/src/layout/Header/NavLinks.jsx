const NavLinks = () => {
  return (
    <nav className="group flex">
      <p className="hidden max-sm:block">☰</p>
      <ul className="flex space-x-15 font-medium max-sm:hidden">
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default NavLinks;
