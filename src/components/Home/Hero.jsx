import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer"; // <-- Correct
import background from "../../assets/main-bg.jpg";
import profile from "../../assets/logo.jpg";
import { FaArrowRight } from "react-icons/fa";
import { IoShieldHalfOutline } from "react-icons/io5";

const useCountUp = (target, trigger) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1000; // milliseconds
    const stepTime = Math.max(Math.floor(duration / target), 15);
    const interval = setInterval(() => {
      start += 1;
      setCount((prev) => {
        if (prev < target) return start;
        clearInterval(interval);
        return target;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [trigger, target]);

  return count;
};

const Hero = () => {
  const { ref: experienceRef, inView: experienceInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceCount = useCountUp(135, experienceInView);

  const skills = [
    "Customized Apps Development",
    "Mobile Application Development",
    "Web Development",
    "Ux/Ui Design",
    "Oracle Solution Hub",
    "APEX Build & Support",
    "Advanced Infra Setup",
    "Digital Marketing Services",
  ];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3500);

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
          
          {/* Left Content */}
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
              I am Mobin.
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.h2
                key={skills[currentSkillIndex]}
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
              className="text-gray-300 mb-8 max-w-md lg:max-w-lg text-lg"
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              I help bridge the gap between business goals and technology by
              challenging outdated beliefs and delivering effective
              digital solutions.
            </motion.p>

            <motion.div transition={{ duration: 0.5, delay: 0.9 }}>
              <Link
                to="/contactUs"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300"
              >
                Hire Me <FaArrowRight className="inline-block ml-2" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content */}
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
                    alt="Mobin Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Projects Completed Badge */}
              <div
                ref={experienceRef}
                className="absolute bottom-0 left-4 lg:left-20 z-20 bg-white px-4 py-2 rounded-md shadow-md"
              >
                <div className="flex items-center gap-4">
                  <IoShieldHalfOutline size={30} color="#00a63e" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">
                      {experienceCount}+
                    </span>
                    <span className="ml-2 text-sm text-gray-600">
                      Completed Projects
                    </span>
                  </div>
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
