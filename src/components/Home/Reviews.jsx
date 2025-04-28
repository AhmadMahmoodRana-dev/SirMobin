import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import mark from "../../assets/mark.JPG";
import dev from "../../assets/dev.jpg";

const testimonials = [
  {
    id: 1,
    name: "Aliza Anne",
    role: "ERP User",
    quote:
      "The ERP system has withstood evolving business needs, offering stability, flexibility and efficiency,It's a dependable backbone for both daily operations and long-term growth.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Wasim Butt",
    role: "Web Developer",
    quote:
      "As a developer, I am impressed with the clean code and intuitive design. This platform has transformed my work and boosted productivity significantly.",
    image:dev,
  },
  {
    id: 3,
    name: "Mohiuddin Khan ",
    role: "Marketing Director",
    quote:
      "The attention to detail and creativity has helped our brand stand out in a crowded market. I highly recommend their services to anyone looking to make an impact.",
    image: mark,
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrent((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setCurrent((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="py-20 bg-[#2c2c2c] relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/main-bg.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="text-center mb-16">
            <FaQuoteLeft className="text-yellow-400 text-5xl mx-auto mb-6" />
          </div>

          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-8">
                  <p className="text-white text-xl md:text-2xl italic mb-8">
                    {testimonials[current].quote}
                  </p>
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-500">
                      <img
                        src={testimonials[current].image}
                        alt={testimonials[current].name}
                        className="w-full h-full object-cover object-center" // Ensures the image is centered and covers the area
                      />
                    </div>
                  </div>
                  <h4 className="text-white text-xl font-bold">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-gray-400">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-300"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-white" />
            </button>
            <button
              onClick={next}
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition duration-300"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
