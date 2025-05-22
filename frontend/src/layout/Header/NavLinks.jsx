const NavLinks = () => {
  return (
    <nav className="flex">
      <p className="hidden max-sm:block">☰</p>
      <ul className="flex space-x-15 font-medium max-sm:hidden">
        <li>Home</li>
        <li>Projects</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
};

export default NavLinks;