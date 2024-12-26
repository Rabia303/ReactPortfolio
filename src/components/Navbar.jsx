import logo from '../assets/logo1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4  text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-32 h-auto" src={logo} alt="logo" />
      </div>
      
      {/* Social Icons Section */}
      <div className="flex items-center gap-6 text-2xl">
        <FaLinkedin />
        <FaGithub />
        <FaTwitch />
        <FaTwitterSquare />
      </div>
    </nav>
  );
};

export default Navbar;
