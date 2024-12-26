import logo from '../assets/logo1.png';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="w-32 h-auto" src={logo} alt="logo" />
      </div>

      {/* Social Icons Section */}
      <div className="flex items-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/rabia-imtiaz/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Rabia303" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:rabiaimtiaz203@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://x.com/shxxrabia" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
