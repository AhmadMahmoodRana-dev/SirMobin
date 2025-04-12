// components/ProjectSlider.jsx
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { SiExpertsexchange } from "react-icons/si";


const projects = [
  {
    title: "Vidungo - Video Conference Landing Page",
    category: "Conference / Event",
    image:
      "https://img.freepik.com/premium-photo/presentation-about-automation-improve-reliability-productivity_1313853-175852.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740",
  },
  {
    title: "Zelda - Real Estate Mobile Application",
    category: "Mobile Application",
    image:
      "https://img.freepik.com/premium-psd/skyhigh-construction-presentation-design-template_505928-574.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740",
  },
  {
    title: "Huxly - Male Model Portfolio Template",
    category: "Website / e-Commerce",
    image:
      "https://img.freepik.com/premium-psd/minimal-project-overview-business-presentation-dark-slides_150101-92.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740",
  },
  {
    title: "Vidungo - Video Conference Landing Page1",
    category: "Conference / Event",
    image:
      "https://img.freepik.com/premium-photo/presentation-about-automation-improve-reliability-productivity_1313853-175852.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740",
  },
  {
    title: "Zelda - Real Estate Mobile Application2",
    category: "Mobile Application",
    image:
      "https://img.freepik.com/premium-psd/skyhigh-construction-presentation-design-template_505928-574.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740",
  },
  {
    title: "Huxly - Male Model Portfolio Template3",
    category: "Website / e-Commerce",
    image:
      "https://img.freepik.com/premium-psd/minimal-project-overview-business-presentation-dark-slides_150101-92.jpg?ga=GA1.1.1076821047.1737958060&semt=ais_hybrid&w=740",
  },
];

const ProjectSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  return (
    <div className="bg-[#1c1c1c] 2xl:px-20 xl:px-6 lg:px-4 md:px-4 px-4 py-12 md:py-20 relative">
    <section className="w-full bg-[#1c1c1c] pb-16  flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
      {/* Text Content */}
      <div className="max-w-xl md:text-left text-center">
        <h2 className="text-5xl font-bold text-white mb-4">
          My Work Experience
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Must explain to you how all this mistaken idea pleasure born and give
          you a complete account.
        </p>
      </div>

      {/* Icon/Image */}
      <div className="mt-10 md:mt-0 md:ml-10">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#2b2b2b] flex items-center justify-center">
          <SiExpertsexchange
            className="w-16 h-16 md:w-20 md:h-20 object-contain text-amber-400"
          />
        </div>
      </div>
    </section>
      <div className="w-full mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={80}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          onSwiper={() => setSwiperReady(true)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden transition duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[50vh] object-cover"
                />
                <div className="md:p-6 p-3 md:text-left text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-400 mb-4">{project.category}</p>
                  <a
                    href="#"
                    className="text-white font-semibold flex items-center md:justify-start justify-center gap-1 hover:underline"
                  >
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Bottom-Centered Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            ref={prevRef}
            className="w-10 h-10 border-green-500 border-2 text-green-500 rounded-full flex items-center justify-center hover:bg-green-500 ease-in-out cursor-pointer hover:text-white transition-all duration-1000"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 border-green-500 border-2 text-green-500 rounded-full flex items-center justify-center hover:bg-green-500 ease-in-out cursor-pointer hover:text-white transition-all duration-1000"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
