import NavLinks from './NavLinks.jsx';
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <header className="flex justify-between items-center p-4 px-6 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10">
      <Link to={'/'}>Home</Link>
      <NavLinks />
    </header>
)
};

export default Header;