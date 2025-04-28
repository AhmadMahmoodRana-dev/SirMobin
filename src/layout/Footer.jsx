import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const Icons = [
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/1ANS3NPnoH/",
    },
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/syed.mobinahmad?igsh=c25jNGR6OWxwNGdh",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/mobin-ahmad-36944111/",
    },
    {
      icon: FaGithub,
      link: "https://github.com/mobin-ahmad",
    },
  ];
  const serviceData = [
    {
      title: "Customized Apps Development",
      description: "Tailored Solutions for Your Business Needs",
      link: "services/customise-app",
    },
    {
      title: "Mobile Application Development",
      description: "Custom Solutions for a Connected World",
      link: "services/mobile-app",
    },
    {
      title: "Web Development",
      description: "Creating Dynamic and Scalable Digital Solutions",
      link: "services/web-development",
    },
    {
      title: "UX/UI Design",
      description: "Crafting Engaging and Intuitive Digital Experiences",
      link: "services/ux-ui",
    },
    {
      title: "Oracle Solution Hub",
      description: "Tailored Oracle Services for Your Business",
      link: "services/oracle-solution-hub",
    },
    {
      title: "APEX Build & Support",
      description: "Extensive Oracle APEX Development and Maintenance Services",
      link: "services/apex-build-support",
    },
    {
      title: "Advanced Infra Setup",
      description: "Exclusive Services for Provincial & National Organizations",
      link: "services/advanced-infra-setup",
    },
    {
      title: "Digital Marketing Services",
      description: "Driving Growth in the Digital Era",
      link: "services/digital-marketting",
    },
  ];

  return (
    <footer className="bg-[#1c1c1c] bg-gradient-to-br 2xl:pl-20 xl:pl-6 lg:pl-4 md:pl-4 pl-4 text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <motion.div
          className="bg-red-500 p-10 rounded-lg mb-16 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl md:text-3xl font-bold mb-0">
              Send me a message and make something together.
            </h3>
          </div>
          <div>
            <Link
              to="/contactUs"
              className="inline-block bg-white text-red-500 hover:bg-gray-200 px-8 py-3 rounded-full font-medium transition duration-300"
            >
              Send Message
            </Link>
          </div>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Logo and About */}
          <div className="lg:border-r">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Elito Logo"
                className="h-12 rounded-full w-12"
              />
              <h1 className="px-4 text-white">Mobin Ahmad</h1>
            </Link>
            <p className="text-gray-400 mb-6">
              Smart systems. Real impact . Let's build what your business really
              needs.
            </p>
            <div className="flex space-x-4">
              {Icons.map((Icon, index) => (
                <motion.a
                  key={index}
                  href={Icon.link}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-opacity-80 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon.icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactUs"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Video Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Recent Post
                </Link>
              </li>
            </ul>
          </div>

          {/* All Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">All Services</h4>
            <ul className="space-y-3">
              {serviceData.map((data) => {
                return (
                  <li>
                    <Link
                      to={`${data.link}`}
                      className="text-gray-400 hover:text-white transition duration-300"
                    >
                      {data?.title}{" "}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Useful Link */}
          <div>
            <h4 className="text-xl font-bold mb-6">Useful Link</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#hero"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home Page
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/#allservices"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contactUs"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            Copyright © {new Date().getFullYear()} Elito. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
