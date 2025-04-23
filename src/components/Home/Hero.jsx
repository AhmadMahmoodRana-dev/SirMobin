import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import background from "../../assets/main-bg.jpg";
import profile from "../../assets/profile.jpg";
import photoshop from "../../assets/photoshop.png";
import sketch from "../../assets/sketch.png";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  const skills = [
    "Customized Apps Development",
    "Mobile Application Development",
    "Web Development",
    "Ux/Ui Design",
    "Oracle Solution Hub",
    "APEX Build & Support",
    "Advanced Infra Setup",
    "Digital Marketing Services"
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3500); // change skill every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative 2xl:pl-20 xl:pl-6 lg:pl-4 md:pl-4 pl-4 pb-5 flex items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content - Animates from Bottom */}
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0 sm:text-left text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-yellow-400 text-4xl md:text-5xl font-semibold mb-4"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hello,
            </motion.h3>
            <motion.h1
              className="text-white text-5xl md:text-8xl font-bold mb-4"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I am Ronald.
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.h2
                key={skills[currentSkillIndex]} // helps detect change
                className="text-green-500 text-3xl md:text-3xl font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {skills[currentSkillIndex]}
              </motion.h2>
            </AnimatePresence>

            <motion.p
              className="text-gray-300 mb-8 max-w-md lg:max-w-lg text-lg "
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              I help bridge the gap between business goals and technology by
              challenging outdated beliefs and delivering effective
              digital solutions
            </motion.p>
            <motion.div transition={{ duration: 0.5, delay: 0.9 }}>
              <Link
                to="/contact"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
              >
                Hire Me <FaArrowRight className="inline-block ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Animates from Right */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative">
              {/* Profile Image */}
              <div className="mx-auto relative z-10 flex justify-center">
                <div className="rounded-full bg-blue-400 overflow-hidden h-64 w-64 lg:h-[80%] lg:w-[80%] relative">
                  <img
                    src={profile}
                    alt="Ronald Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Software Icons */}
              <div className="absolute -top-2 right-1 lg:right-22 z-20 bg-white p-2 rounded-md shadow-md">
                <img
                  src={photoshop}
                  alt="Photoshop Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="absolute bottom-12 right-1 lg:right-22 z-20 bg-white p-2 rounded-md shadow-md">
                <img src={sketch} alt="Sketch Icon" className="w-12 h-12" />
              </div>

              {/* Projects Completed Badge */}
              <div className="absolute bottom-0 left-4 lg:left-20 z-20 bg-white px-4 py-2 rounded-md shadow-md">
                <div className="flex items-center">
                  <span className="font-bold text-gray-900">100+</span>
                  <span className="ml-2 text-sm text-gray-600">
                    Complete Projects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
