// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import projects from "../Project";

// const ProjectDetails = () => {
//   const { slug } = useParams();
//   const project = projects.find((p) => p.slug === slug);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === project?.images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [project]);

//   if (!project) return <div className="text-white">Project not found.</div>;

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="bg-[#1c1c1c] min-h-screen p-6 text-white pt-24 flex flex-col items-center justify-center">
//       <div className="flex items-center justify-center gap-6 w-full">
//         {/* Prev Button (Outside) */}
//         <button
//           onClick={prevSlide}
//           className="bg-black bg-opacity-50 md:block hidden px-4 py-2 rounded-full text-white hover:bg-opacity-80"
//         >
//           ❮
//         </button>

//         {/* Image */}
//         <div className="w-full max-w-full h-[600px] overflow-hidden rounded-xl">
//           <img
//             src={project.images[currentIndex]}
//             alt={`Slide ${currentIndex + 1}`}
//             className="w-full h-auto object-cover transition-all duration-700 ease-in-out"
//           />
//         </div>

//         {/* Next Button (Outside) */}
//         <button
//           onClick={nextSlide}
//           className="bg-black md:block hidden bg-opacity-50 px-4 py-2 rounded-full text-white hover:bg-opacity-80"
//         >
//           ❯
//         </button>
//       </div>

//       {/* Dots Indicator */}
//       <div className="flex gap-3 mt-6">
//         {project.images.map((_, index) => (
//           <div
//             key={index}
//             className={`h-3 w-3 rounded-full cursor-pointer transition ${
//               index === currentIndex ? "bg-white scale-110" : "bg-gray-500"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;


import React from "react";
import { useParams } from "react-router-dom";
import projects from "../Project";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="text-white">Project not found.</div>;

  return (
    <div className="bg-[#1c1c1c] min-h-screen p-6 text-white">
      <div className="flex flex-col items-center gap-10 justify-center mt-22">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i + 1}`} className="w-[45%]  object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;