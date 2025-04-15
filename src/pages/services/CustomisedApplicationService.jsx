export default function CustomisedApplicationService() {
  const workProcess = [
    {
      id: 1,
      title: "Discovery & Requirement Analysis",
      description:
        "We gather your ideas, goals, and pain points to define the scope.",
    },
    {
      id: 2,
      title: "Design & Prototyping",
      description:
        "Our designers create interactive mockups and prototypes based on UX/UI best practices.",
    },
    {
      id: 3,
      title: "Development & Testing",
      description:
        "Agile development cycles with continuous testing to ensure functionality and performance.",
    },
    {
      id: 4,
      title: "Deployment & Integration",
      description:
        "Final launch along with integration into your ecosystem (e.g., CRM, ERP, APIs).",
    },
    {
      id: 5,
      title: "Post-Launch Support",
      description: "Maintenance, upgrades, and ongoing optimization.",
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
            Customized Apps Development{" "}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At ZoiSol, we understand that off-the-shelf software can’t always
            meet the unique demands of your business. That’s why we offer
            Customized Application Development services designed specifically
            for your workflows, goals, and industry. From idea to execution, we
            work closely with you to develop mobile, web, or enterprise
            applications that empower your business and deliver exceptional user
            experiences.
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
            <li>Tailor-made software built from the ground up</li>
            <li>End-to-end app development: UI/UX, backend, deployment</li>
            <li>Mobile apps, web platforms, and enterprise-level solutions</li>
            <li>Ongoing support and scalable architecture for future growth</li>
          </ul>
        </div>

        {/* Key Benefits*/}

        <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Key Benefits:
          </h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            <li>Streamlined operations and workflow automation</li>
            <li>Enhanced user experience and customer satisfaction</li>
            <li>Full control over features, design, and integrations</li>
            <li>Scalable solutions aligned with your growth strategy</li>
          </ul>
        </div>

        {/* Work Process */}
        <section className="space-y-6">
          <h3 className="text-3xl font-bold">Our Work Process</h3>
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
