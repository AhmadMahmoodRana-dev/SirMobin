import React from "react";
import { useParams } from "react-router-dom";
import projects from "../Project";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="text-white">Project not found.</div>;

  return (
    <div className="bg-[#1c1c1c] min-h-screen p-6 text-white">
      <div className="flex flex-col items-center gap-6 justify-center mt-22">
        {project.images.map((img, i) => (
          <img key={i} src={img} alt={`Slide ${i + 1}`} className="w-[90%] h-[100%] object-cover rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
