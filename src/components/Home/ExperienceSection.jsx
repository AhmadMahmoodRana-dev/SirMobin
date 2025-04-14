import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2015 - 2016",
    title: "Junior Visual Designer",
    company: "Trapeza Group, USA",
    link: "#",
    icon: "🌀",
  },
  {
    year: "2017 - 2018",
    title: "UI/UX Designer",
    company: "Gallerie Ontario, Canada (Remote)",
    link: "#",
    icon: "💎",
  },
  {
    year: "2019 - 2020",
    title: "Senior UI/UX Designer",
    company: "Morson Hybrid, Canada",
    link: "#",
    icon: "🔷",
  },
  {
    year: "2021 - 2022",
    title: "Product Designer",
    company: "Myant Inc. Etobicoke, ON (Remote)",
    link: "#",
    icon: "🔘",
  },
];

const ExperienceSection = () => {
  return (
    <div className="bg-[#191919] min-h-screen h-auto text-white 2xl:px-20 xl:px-6 lg:px-4 md:px-4 px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold  my-6"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Work Experience
        </motion.h2>

        <motion.p
          className="text-[#ededed] md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Must explain to you how all this mistaken idea of denouncing pleasure
          born and give you a complete account the system
        </motion.p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1e1e] md:flex items-center justify-between p-4 md:p-6 rounded-lg shadow-md space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="md:w-1/4 w-full text-lg md:text-xl lg:text-2xl font-semibold">
              {exp.year}
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 md:w-2/4 w-full">
              <div className="text-2xl md:text-3xl">{exp.icon}</div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-xl font-bold">
                  {exp.title}
                </h3>
                <p className="text-red-400 text-sm md:text-base">
                  {exp.company}
                </p>
              </div>
            </div>

            <a
              href={exp.link}
              className="text-white hover:text-red-400 transition flex items-center gap-2 md:mt-0 mt-2 md:text-base text-sm"
            >
              <span>Go to website</span>
              <span>→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
