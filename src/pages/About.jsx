import Header from "../layout/Header";

const About = () => {
  return (
    <>
      <section className="bg-gray-900 py-12 px-4 md:px-8">
        <Header />
        <div className="max-w-4xl mx-auto">
          <div className="text-center my-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Transforming Vision into Digital Reality
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              26+ years architecting technology solutions that drive business
              growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Expertise Section */}
            <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                Core Expertise
              </h3>
              <div className="space-y-4">
                {[
                  "Legacy System Modernization",
                  "Enterprise Cloud Architecture",
                  "AI-Driven Automation",
                  "Cross-Platform Mobile Development",
                  "Scalable Web Solutions",
                  "Strategic IT Roadmapping",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-50 p-1.5 rounded-full mt-1">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-[#1c1c1c] p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="bg-green-500 w-2 h-2 rounded-full"></span>
                Key Achievements
              </h3>
              <div className="space-y-4">
                {[
                  "Modernized operations for 150+ retail locations",
                  "Deployed nation-scale AI surveillance systems",
                  "Achieved 99.99% uptime for enterprise systems",
                  "Reduced operational costs by 40% through automation",
                  "Led award-winning mobile app development",
                  "Implemented IoT-based inventory solutions",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-50 p-1.5 rounded-full mt-1">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-12">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              I specialize in creating technology ecosystems that grow with your
              business. By combining strategic thinking with cutting-edge
              solutions, I help organizations transition from traditional
              operations to data-driven digital enterprises.
            </p>
            <div className="inline-flex bg-green-50 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-green-700">
                🚀 100+ Successful Transformations | ⏱️ 26+ Years Experience |
                🛡️ Enterprise-Grade Security
              </span>
            </div>
          </div>

          {/* CTA */}
          {/* <div className="text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold 
              transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Start Your Digital Journey
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
