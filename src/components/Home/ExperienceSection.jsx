import React from "react";
import { motion } from "framer-motion";
import azgard from "../../assets/azgard9.jpg";
import singer from "../../assets/singerPakistan.jpg";
import maple from "../../assets/mapleleaf.png";
import waves from "../../assets/waves.jpg";

const experiences = [
  {
    year: "Dec. 2024 – to Jan.2025",
    title: "Azgard9",
    company: ["Employee Self Service Mobile App"],
    link: "#",
    icon: azgard,
  },
  {
    year: "Oct. 2024 – to Apr.2025",
    title: "Azgard9",
    company: ["HRMS & Payroll System"],
    link: "https://erp.visionplusapps.com:8081/ords/r/api/azgard128111/login?session=9576267188136",
    icon: azgard,
  },
  {
    year: "July. 2019 – to Jan.2020",
    title: "Singer Pakistan Limited",
    company: ["Fixed Asset System"],
    link: "#",
    icon: singer,
  },
  {
    year: "Nov. 2018 – to Jun.2019",
    title: "WavesPlus",
    company: ["1. Shifting of EMC-Dealer to Waves Marketing Co on Oracle Customized application","2. Development of In-house portal","3. Development & Implementation of Call Center Application","4. IT Help Desk"],
    link: "#",
    icon: waves,
  },
  {
    year: "Nov. 2017 – Nov.-2018",
    title: "WavesPlus",
    company: ["Hirepurchase / EMI System"],
    link: "http://central.emc-appliances.com/",
    icon: waves,
  },
  {
    year: "May. 2017 – Jun.2017",
    title: "Singer Pakistan Limited",
    company: [
      "First time in the history Singer Pakistan Inventory Barcoding of Finish Goods",
    ],
    link: "#",
    icon: singer,
  },
  {
    year: "Jun. 2016 – Feb.2017",
    title: "Singer Pakistan Limited",
    company: ["Customized Oracle based fully integrated ERP System"],
    link: "#",
    icon: singer,
  },
  {
    year: "Jul. 2015 – Jun. 2016",
    title: "Maple Leaf Cement",
    company: ["Implementation of EBS R12 Financial Module"],
    link: "#",
    icon: maple,
  },
  {
    year: "Jan. 2015 – Jun. 2015",
    title: "Maple Leaf Cement",
    company: [
      "Housekeeping Tracking System (Click), A Realstate Management System",
    ],
    link: "#",
    icon: maple,
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
          Experience That Delivers
        </motion.h2>

        <motion.p
          className="text-[#ededed] md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My journey spans hands-on experience with
          Oracle-Forms,Reports,APEX,.NET and more.I specialize in building
          scalable,real-world solutions for growing businesses.
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
              <img src={exp.icon} className="w-[80px] h-[80px]" alt="" />
              <div>
                <h3 className="text-lg md:text-xl lg:text-xl font-bold">
                  {exp.title}
                </h3>
                {exp.company.map((data) => {
                  return (
                    <p className="text-red-400 text-sm md:text-base">{data}</p>
                  );
                })}
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
