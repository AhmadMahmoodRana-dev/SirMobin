import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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

  
  // Skill data
  const skills = [
    {
      label: "Oracle App",
      value: 98,
      color: "text-yellow-400 border-pink-600",
    },
    {
      label: "Process Mapping",
      value: 85,
      color: "text-green-400 border-green-600",
    },
    { label: "Oracle Apex", value: 90, color: "text-red-400 border-red-600" },
    {
      label: "Bussiness Technologies",
      value: 95,
      color: "text-orange-400 border-orange-500",
    },
    {
      label: "Database Technologies",
      value: 92,
      color: "text-blue-400 border-blue-500",
    },
    {
      label: "Integration",
      value: 75,
      color: "text-yellow-400 border-purple-500",
    },
    {
      label: "Design Architecture",
      value: 90,
      color: "text-yellow-400 border-pink-600",
    },
    {
      label: "Front-End Technologies",
      value: 50,
      color: "text-blue-400 border-blue-500",
    },
    {
      label: "Web Development",
      value: 96,
      color: "text-orange-400 border-orange-500",
    },
  ];

  // Number counting animation hook
  const useCountUp = (target, trigger) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!trigger) return;

      let start = 0;
      const duration = 1000; // ms
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
  const experienceCount = useCountUp(26, experienceInView);

  return (
    <div className="bg-[#1c1c1c] bg-gradient-to-br from-[#292717] to-[#1c1c1c] text-white py-12 md:py-20 sm:px-6 xl:px-20 lg:px-10 md:px-6 pl-8 pr-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Experience Box */}
        <motion.div
          ref={experienceRef}
          initial={{ opacity: 0, y: 50 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
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
              {experienceCount}+
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
          initial={{ opacity: 0, y: 50 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full xl:w-[45%] lg:w-[50%] md:w-[60%]"
        >
          <h2 className="text-3xl xs:text-4xl md:text-6xl font-bold mb-6 md:mb-8 md:text-left text-center">
            What I Bring to the Table
          </h2>
          <p className="text-gray-300 mb-6 md:mb-8 w-full md:w-[90%] text-base md:text-[1.1rem] md:text-left text-center leading-relaxed">
            With extensive experience in IT solutions, data architecture,
            process mapping, and ERP implementation, I specialize in aligning
            technology with strategic business goals. I deliver practical,
            results-driven solutions backed by deep expertise across a range of
            technologies. I’ve led digital transformations that boost
            efficiency, scalability, and long-term growth.
          </p>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill, index) => {
              const count = useCountUp(skill.value, contentInView);
              return (
                <motion.div
                  key={index}
                  variants={skillVariants}
                  initial="hidden"
                  animate={contentInView ? "visible" : "hidden"}
                  custom={index}
                  className={`border ${skill.color} rounded-xl px-0 py-6 md:px-0 md:py-10 text-center`}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {count}%
                  </h3>
                  <p
                    className={`text-lg md:text-sm font-medium mt-2 ${
                      skill.color.split(" ")[0]
                    }`}
                  >
                    {skill.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvantageSection;
