import {
  FaPaintBrush,
  FaLaptopCode,
  FaArrowRight,
  FaBullhorn,
} from "react-icons/fa";
import { motion } from "framer-motion";


import { MdIntegrationInstructions } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { RiUserSettingsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const serviceData = [
  {
    icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
    title: "Customized Apps Development",
    description:
      "Tailored Solutions for Your Business Needs",
    link: "services/customise-app",
  },
  {
    icon: <MdIntegrationInstructions className="text-yellow-400 text-3xl" />,
    title: "Mobile Application Development",
    description:
      "Custom Solutions for a Connected World",
    link: "services/mobile-app",
  },
  {
    icon: <FaBullhorn className="text-yellow-400 text-3xl" />,
    title: "Web Development",
    description:
      "Creating Dynamic and Scalable Digital Solutions",
    link: "services/web-development",
  },
  {
    icon: <FaPaintBrush className="text-yellow-400 text-3xl" />,
    title: "Ux/Ui Design",
    description:
      "Crafting Engaging and Intuitive Digital Experiences",
    link: "services/ux-ui",
  },
  {
    icon: <BiSolidReport className="text-yellow-400 text-3xl" />,
    title: "Oracle Solution Hub",
    description:
      "Tailored Oracle Services for Your Business",
    link: "services/oracle-solution-hub",
  },
  {
    icon: <RiUserSettingsFill className="text-yellow-400 text-3xl" />,
    title: "APEX Build & Support",
    description:
      "Extensive Oracle APEX Development and Maintenance Services",
    link: "services/apex-build-support",
  },
  {
    icon: <RiUserSettingsFill className="text-yellow-400 text-3xl" />,
    title: "Advanced Infra Setup",
    description:
      "Exclusive Services for Provincial & National Organizations",
    link: "services/advanced-infra-setup",
  },
  {
    icon: <RiUserSettingsFill className="text-yellow-400 text-3xl" />,
    title: "Digital Marketing Services",
    description:
      "Driving Growth in the Digital Era",
    link: "services/customise-app",
  },
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      className="bg-[#282828]  border border-[#414141] h-[450px] p-8 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-2 justify-center items-center flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-5 bg-[#414141] p-8 rounded-full hover:bg-green-400 transition-all ease-in-out duration-1000">
        {service.icon}
      </div>
      <h3 className="text-white lg:text-[1.5vw] text-2xl font-bold mb-6 text-center">
        {service.title}
      </h3>
      <p className="text-[#ededed] mb-6 text-center lg:text-[1vw]">
        {service.description}
      </p>
      <Link
        to={service.link}
        className="text-white hover:text-green-400 inline-flex items-center font-medium gap-5"
      >
        <FaArrowRight /> Learn More
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="2xl:px-20 xl:px-6 lg:px-4 md:px-4 px-4 py-20 bg-[#1c1c1c] bg-gradient-to-br from-[#1c1c1c] to-[#423814]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-white text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Popular Services
          </motion.h2>

          <motion.p
            className="text-[#ededed] md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Must explain to you how all this mistaken idea of denouncing
            pleasure born and give you a complete account the system
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
