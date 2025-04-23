import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setIsAtTop(scrollY < 10);

    if (!isScrolling) {
      setVisible(false);
      setIsScrolling(true);
    }

    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      setVisible(true);
    }, 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-5 2xl:pl-20 xl:pl-6 lg:pl-4 md:pl-4 pl-4 transition-all duration-300
    ${visible ? "translate-y-0" : "-translate-y-full"}
    ${
      isAtTop ? "bg-transparent" : "bg-gray-900 bg-opacity-95 backdrop-blur-md"
    }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Elito Logo" className="h-14 w-40" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                to={`/#hero`}
                className="text-white hover:text-green-400 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-green-400 transition-colors"
              >
                About us
              </Link>
            </li>
            <Link
              to={`/#allservices`}
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              className="text-white hover:text-green-400 transition-colors"
              >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
              Services
            </Link>
            <li>
              <Link
                to="/portfolio"
                className="text-white hover:text-green-400 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white hover:text-green-400 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contactUs"
                className="text-white hover:text-green-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            to="/contactUs"
            className="bg-green-500 flex justify-center items-center gap-3 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300"
          >
            Contact
            <FaArrowRightLong />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 absolute top-20 left-0 w-full py-5">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                to={`/#hero`}
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
            <Link
              to={`/#allservices`}
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              className="text-white hover:text-green-400 transition-colors"
              >
              Services
            </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contactUs"
                className="text-white hover:text-green-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="mt-4">
              <Link
                to="/contactUs"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
