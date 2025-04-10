import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AdvantageSection = () => {
  const [experienceRef, experienceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
      },
    }),
  };
  return (
    <div className="bg-[#1c1c1c] bg-gradient-to-br from-[#292717] to-[#1c1c1c] text-white py-12 md:py-20 sm:px-6 xl:px-20 lg:px-10 md:px-6 pl-8 pr-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Experience Box */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, x: -50 }}
          animate={experienceInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full xl:w-[55%] lg:w-[50%] md:w-[40%] md:h-[70vh] h-auto xl:h-[70vh] lg:h-[75vh] text-center relative flex flex-col justify-center xl:items-center"
        >
          <div className="bg-[#2a2a1f] p-6 md:p-10 w-full xl:w-[52%] lg:w-[70%] h-auto md:h-[75%] relative">
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={experienceInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-6xl xs:text-7xl md:text-9xl font-bold text-yellow-400"
            >
              08
            </motion.h1>
            <p className="text-lg md:text-xl mt-2">Years of Experience</p>
            <motion.div
              initial={{ scale: 0 }}
              animate={experienceInView ? { scale: 1 } : ""}
              transition={{ delay: 0.4 }}
              className="w-full md:w-[74%] bg-[#2a2a1f] border border-white rounded-md mt-6 md:mt-0 md:absolute flex items-center min-h-[80px] lg:min-h-[100px] lg:-right-24 md:-right-6 md:bottom-10"
            >
              <h1 className="text-[#59c378] text-3xl lg:text-5xl font-semibold w-[60%]">
                100 %
              </h1>
              <h1 className="w-[40%] text-left text-sm lg:text-base font-semibold">
                Clients Satisfaction
              </h1>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, x: 50 }}
          animate={contentInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full xl:w-[45%] lg:w-[50%] md:w-[60%]"
        >
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold mb-6 md:mb-8 md:text-left text-center">
            My Advantage
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 w-full md:w-[90%] text-base md:text-[1.1rem] md:text-left text-center leading-relaxed">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account the system and expound the actual.
          </p>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                label: "Figma",
                value: "98%",
                color: "text-yellow-400 border-pink-600",
              },
              {
                label: "Sketch",
                value: "92%",
                color: "text-green-400 border-green-600",
              },
              {
                label: "Photoshop",
                value: "88%",
                color: "text-red-400 border-red-600",
              },
              {
                label: "Illustrator",
                value: "77%",
                color: "text-orange-400 border-orange-500",
              },
              {
                label: "WordPress",
                value: "43%",
                color: "text-blue-400 border-blue-500",
              },
              {
                label: "ReactJS",
                value: "37%",
                color: "text-yellow-400 border-purple-500",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={skillVariants}
                initial="hidden"
                animate={contentInView ? "visible" : "hidden"}
                custom={index}
                className={`border ${skill.color} rounded-xl px-4 py-6 md:px-6 md:py-10 text-center`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  {skill.value}
                </h3>
                <p
                  className={`text-base md:text-lg font-medium mt-2 ${
                    skill.color.split(" ")[0]
                  }`}
                >
                  {skill.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvantageSection;
