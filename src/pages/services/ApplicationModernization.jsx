export default function ApplicationModernization() {
  const workProcess = [
    {
      id: 1,
      title: "Legacy System Upgrades",
      description:
        "Upgrade outdated technologies to modern platforms without disrupting business operations.",
    },
    {
      id: 2,
      title: "Cloud Integration",
      description:
        "Migrate applications to secure, scalable cloud environments for better performance and flexibility.",
    },
    {
      id: 3,
      title: "Feature Enhancements",
      description:
        "Add new functionalities and integrations to meet current business requirements and user expectations.",
    },
    {
      id: 4,
      title: "UI/UX Modernization",
      description:
        "Refresh your user interface to provide a modern, intuitive, and accessible experience.",
    },
    {
      id: 5,
      title: "Architecture Optimization",
      description: "Re-architect monolithic applications into modular, scalable microservices.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row pt-32 bg-gray-900 text-white min-h-screen px-4 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Sidebar */}
      <aside className="lg:w-1/4 space-y-6">
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Post..."
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-400 transition-all"
            />
            <svg
              className="absolute right-3 top-3 h-6 w-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-green-400">Services</h3>
          <ul className="space-y-3">
            {[
              "Web Development",
              "App Development",
              "Software Development",
              "Social Media Marketing",
              "Graphic Design",
              "Brand Identity",
            ].map((service, i) => (
              <li
                key={i}
                className="group flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all cursor-pointer"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 space-y-8">
        {/* Hero Image */}
        <div className="w-full h-96 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">
                Transform Your Digital Presence
              </h1>
              <p className="text-xl text-gray-300">
                Expert software solutions for tomorrow's challenges
              </p>
            </div>
          </div>
        </div>

        {/* Title & Content */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Application Modernization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Legacy systems can slow down business growth, limit performance, and
            increase operational costs. At ZoiSol, we help businesses unlock the
            full potential of their existing applications through Application
            Modernization Services. Whether it's updating outdated architecture,
            migrating to the cloud, or enhancing features — we ensure your
            software evolves with your business.
          </p>
        </section>

        {/* Secondary Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-full w-full bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* What We Offer */}

        <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-white mb-4">
            What We Offer:
          </h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            <li>Legacy system analysis and tech stack upgrades</li>
            <li>Cloud migration & integration (AWS, Azure, GCP)</li>
            <li>Feature enhancement and UI/UX redesign</li>
            <li>Performance tuning and scalability improvements</li>
            <li>Modern security implementation and compliance</li>
          </ul>
        </div>

        {/* Key Benefits*/}

        <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Key Benefits:
          </h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            <li>Reduce long-term maintenance and infrastructure costs</li>
            <li>Improve application performance, speed, and usability</li>
            <li>Boost security and compliance with modern standards</li>
            <li>Increase user adoption with a modern UI/UX</li>
            <li>Prepare your systems for future scalability and integrations</li>
          </ul>
        </div>

        {/* Work Process */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold">Modernization Sevices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workProcess.map((val, index) => {
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-800 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-400">
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-xl font-semibold">{val.title}</h4>
                  <p className="text-gray-400 mt-2 text-sm">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Services */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl hover:-translate-y-2 transition-transform shadow-md hover:shadow-xl"
              >
                <div className="h-48 w-full bg-gray-700 rounded-lg mb-4"></div>
                <h4 className="text-xl font-semibold mb-2">Graphic Design</h4>
                <p className="text-gray-400">
                  Professional visual solutions that elevate your brand
                  identity.
                </p>
                <button className="mt-4 text-green-400 hover:text-green-300 font-semibold transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
