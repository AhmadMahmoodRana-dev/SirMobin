import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import background from "../../assets/main-bg.jpg"
import profile from "../../assets/profile.jpg"
import photoshop from "../../assets/photoshop.png"
import sketch from "../../assets/sketch.png"
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="relative 2xl:pl-20 xl:pl-6 lg:pl-4 md:pl-4 pl-4 flex items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.h3
              className="text-yellow-400 text-xl md:text-5xl font-semibold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello,
            </motion.h3>
            <motion.h1
              className="text-white text-4xl md:text-8xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I am Ronald.
            </motion.h1>
            <motion.h2
              className="text-green-500 text-xl md:text-3xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              UI/UX Designer
            </motion.h2>
            <motion.p
              className="text-gray-300 mb-8 max-w-md lg:max-w-lg md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Must explain to how all this mistaken idea denouncing pleasure pain
              the system and expound the actua.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
              >
                Hire Me <FaArrowRight className="inline-block ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 relative">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Profile Image */}
              <div className="mx-auto relative z-10">
                <div className="rounded-full bg-blue-400 overflow-hidden h-64 w-64 lg:h-[80%] lg:w-[80%] relative">
                  <img
                    src={profile}
                    alt="Ronald Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Software Icons */}
              <div className="absolute -top-5 right-8 lg:right-40 z-20 bg-white p-2 rounded-md shadow-md">
                <img src={photoshop} alt="Photoshop Icon" className="w-12 h-12" />
              </div>
              <div className="absolute top-12 right-2 lg:right-24 z-20 bg-white p-2 rounded-md shadow-md">
                <img src={sketch} alt="Sketch Icon" className="w-12 h-12" />
              </div>

              {/* Projects Completed Badge */}
              <div className="absolute bottom-0 left-4 lg:left-20 z-20 bg-white px-4 py-2 rounded-md shadow-md">
                <div className="flex items-center">
                  <span className="font-bold text-gray-900">100+</span>
                  <span className="ml-2 text-sm text-gray-600">Complete Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
