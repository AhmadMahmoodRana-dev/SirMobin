import React from "react";

const AdvantageSection = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-12 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Experience Box */}
        <div className="w-full md:w-[50%] h-[70vh] text-center relative flex flex-col justify-center items-center">
          <div className="bg-[#2a2a1f] p-10 w-[50%] h-[70%]">
            <h1 className="text-9xl font-bold text-yellow-400">08</h1>
            <p className="text-xl mt-2">Years of Experience</p>
            
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-4xl font-bold mb-4">My Advantage</h2>
          <p className="text-gray-300 mb-8">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account the system and expound the actual.
          </p>

          {/* Skill Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                label: "Figma",
                value: "98%",
                color: "text-yellow-400 border-pink-600",
              },
              {
                label: "Sketch",
                value: "92%",
                color: "text-green-400 border-green-600",
              },
              {
                label: "Photoshop",
                value: "88%",
                color: "text-red-400 border-red-600",
              },
              {
                label: "Illustrator",
                value: "77%",
                color: "text-orange-400 border-orange-500",
              },
              {
                label: "WordPress",
                value: "43%",
                color: "text-blue-400 border-blue-500",
              },
              {
                label: "ReactJS",
                value: "37%",
                color: "text-yellow-400 border-purple-500",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className={`border ${skill.color} rounded-xl p-6 text-center`}
              >
                <h3 className="text-3xl font-bold text-white">{skill.value}</h3>
                <p
                  className={`text-lg font-medium ${skill.color.split(" ")[0]}`}
                >
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;
