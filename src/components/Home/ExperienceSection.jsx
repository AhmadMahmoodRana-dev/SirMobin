import React from "react";
import { motion } from "framer-motion";
import azgard from "../../assets/azgard.png";
import singer from "../../assets/singer.png";
import maple from "../../assets/maple.png";
import waves from "../../assets/waves.png";

const experiences = [
  {
    year: "Dec. 2024 – Jan. 2025",
    title: "Azgard9",
    company: ["Employee Self Service Mobile App"],
    icon: azgard,
  },
  {
    year: "Oct. 2024 – Apr. 2025",
    title: "Azgard9",
    company: ["HRMS & Payroll System"],
    icon: azgard,
  },
  {
    year: "July. 2019 – Jan. 2020",
    title: "Singer Pakistan Limited",
    company: ["Fixed Asset System"],
    icon: singer,
  },
  {
    year: "Nov. 2018 – Jun. 2019",
    title: "WavesPlus",
    company: [
      "1. Shifting of EMC-Dealer to Waves Marketing Co on Oracle Customized application",
      "2. Development of In-house portal",
      "3. Development & Implementation of Call Center Application",
      "4. IT Help Desk",
    ],
    icon: waves,
  },
  {
    year: "Nov. 2017 – Nov. 2018",
    title: "WavesPlus",
    company: ["Hirepurchase / EMI System"],
    icon: waves,
  },
  {
    year: "May. 2017 – Jun. 2017",
    title: "Singer Pakistan Limited",
    company: ["Inventory Barcoding of Finished Goods"],
    icon: singer,
  },
  {
    year: "Jun. 2016 – Feb. 2017",
    title: "Singer Pakistan Limited",
    company: ["Customized Oracle based fully integrated ERP System"],
    icon: singer,
  },
  {
    year: "Jul. 2015 – Jun. 2016",
    title: "Maple Leaf Cement",
    company: ["Implementation of EBS R12 Financial Module"],
    icon: maple,
  },
  {
    year: "Jan. 2015 – Jun. 2015",
    title: "Maple Leaf Cement",
    company: ["Housekeeping Tracking System (Click), A Real Estate Management System"],
    icon: maple,
  },
];

const ExperienceSection = () => {
  return (
    <div className="bg-[#191919] min-h-screen text-white px-4 md:px-6 lg:px-12 xl:px-20 py-12 md:py-20">
      <div className="text-center mb-16">
        <motion.h2
          className="text-white text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience That Delivers
        </motion.h2>

        <motion.p
          className="text-[#d3d3d3] md:text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My journey spans hands-on experience with Oracle Forms, Reports, APEX, .NET and more. I specialize in building scalable, real-world solutions for growing businesses.
        </motion.p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1e1e] rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-lg"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="w-full md:w-1/4 text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
              {exp.year}
            </div>

            <div className="flex items-start gap-4 md:w-/4">
              <img src={exp.icon} className="w-16 h-16 object-contain" alt={exp.title} />
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                {exp.company.map((item, i) => (
                  <p key={i} className="text-red-400 text-sm md:text-base leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
