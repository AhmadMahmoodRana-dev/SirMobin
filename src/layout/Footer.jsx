import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="bg-red-500 p-10 rounded-lg mb-16 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-0">
              Send me a message and make something together.
            </h3>
          </div>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-white text-red-500 hover:bg-gray-200 px-8 py-3 rounded-full font-medium transition duration-300"
            >
              Send Message
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img src="/images/logo.png" alt="Elito Logo" className="h-12 w-12" />
              <span className="text-white text-3xl font-bold ml-2">Elito.</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Welcome and open yourself to your truest love this year with us! With the Release Process
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-700 transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition duration-300">
                  Video Guide
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition duration-300">
                  Recent Post
                </Link>
              </li>
            </ul>
          </div>

          {/* All Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">All Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition duration-300">
                  Web Design
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition duration-300">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition duration-300">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition duration-300">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Link */}
          <div>
            <h4 className="text-xl font-bold mb-6">Useful Link</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">Copyright © {new Date().getFullYear()} Elito. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
