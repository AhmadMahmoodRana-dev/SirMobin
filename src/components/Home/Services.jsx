import { Link } from "react-router-dom";
import {
  FaDesktop,
  FaPaintBrush,
  FaMobileAlt,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const serviceData = [
  {
    icon: <FaPaintBrush className="text-yellow-400 text-3xl" />,
    title: "Graphic Design",
    description:
      "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete.",
    link: "/services/graphic-design",
  },
  {
    icon: <FaDesktop className="text-yellow-400 text-3xl" />,
    title: "Brand Identity",
    description:
      "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete.",
    link: "/services/brand-identity",
  },
  {
    icon: <FaMobileAlt className="text-yellow-400 text-3xl" />,
    title: "UI/UX Design",
    description:
      "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete.",
    link: "/services/ui-ux-design",
  },
  {
    icon: <FaCode className="text-yellow-400 text-3xl" />,
    title: "Web Development",
    description:
      "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete.",
    link: "/services/web-development",
  },
  {
    icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
    title: "App Development",
    description:
      "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete.",
    link: "/services/app-development",
  },
  {
    icon: <FaServer className="text-yellow-400 text-3xl" />,
    title: "Software Development",
    description:
      "Explain to you how all this mistaken idea of denouncing pleasure born and give you complete.",
    link: "/services/software-development",
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
      <h3 className="text-white text-3xl font-bold mb-6 text-center">
        {service.title}
      </h3>
      <p className="text-[#ededed] mb-6 text-center text-[1.05rem]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
