import React from "react";

const AdvantageSection = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-12 md:py-20  sm:px-6 xl:px-20 lg:px-10 md:px-6 pl-8 pr-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Experience Box */}
        <div className="w-full xl:w-[55%] lg:w-[50%] md:w-[40%] md:h-[70vh] h-auto xl:h-[70vh] lg:h-[75vh] text-center relative flex flex-col justify-center xl:items-center">
          <div className="bg-[#2a2a1f] p-6 md:p-10 w-full xl:w-[52%] lg:w-[70%] h-auto md:h-[75%] relative">
            <h1 className="text-7xl md:text-9xl font-bold text-yellow-400">08</h1>
            <p className="text-lg md:text-xl mt-2">Years of Experience</p>
            <div className="w-full md:w-[74%] bg-[#2a2a1f] border border-white rounded-md mt-6 md:mt-0 md:absolute flex items-center min-h-[80px] lg:min-h-[100px] lg:-right-24 md:-right-6 md:bottom-10">
              <h1 className="text-[#59c378] text-3xl lg:text-5xl font-semibold w-[60%]">
                100 %
              </h1>
              <h1 className="w-[40%] text-left text-sm lg:text-base font-semibold">
                Clients Satisfections
              </h1>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full xl:w-[45%] lg:w-[50%] md:w-[60%]">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 md:text-left text-center">My Advantage</h2>
          <p className="text-gray-300 mb-6 md:mb-8 w-full md:w-[90%] text-base md:text-[1.1rem] md:text-left text-center">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account the system and expound the actual.
          </p>

          {/* Skill Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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
                className={`border ${skill.color} rounded-xl px-4 py-6 md:px-6 md:py-10 text-center`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white">{skill.value}</h3>
                <p
                  className={`text-base md:text-lg font-medium mt-2 ${skill.color.split(" ")[0]}`}
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