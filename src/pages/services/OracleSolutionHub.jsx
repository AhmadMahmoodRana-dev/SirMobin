export default function OracleSolutionHub() {
  const releatedServices = [
    {
      "id": 1,
      title:"Oracle OTBI Reporting",
      link:"oracle-reporting"
    },
    {
      "id": 2,
      title:"Apex Build Support",
      link:"apex-build-support"
    }
  ]
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
          <h3 className="text-xl font-bold mb-4 text-green-400">Related Services</h3>
          <ul className="space-y-3">
            {releatedServices.map((service, i) => (
              <a
              href={service.link}
              
                key={i}
                className="group flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all cursor-pointer"
              >
                <a  className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></a>
                {service.title}
              </a>
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
            Oracle Solution Hub
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We offer specialized Oracle solutions including custom application
            development, analytics, and integration. From APEX dashboards to
            Fusion REST APIs, our expertise ensures optimal performance. Tailor
            your Oracle stack to your needs.
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
            <li>Oracle APEX and Fusion integration</li>
            <li>Reporting and analytics</li>
            <li>PWA and RESTful API development</li>
          </ul>
        </div>

        {/* Key Benefits*/}

        <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Key Benefits:
          </h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            <li>Secure and scalable solutions</li>
            <li>Rapid deployment</li>
            <li>Enhanced data insights</li>
          </ul>
        </div>
        {/*Work Process*/}

        <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Work Process:
          </h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            <li>Requirement Mapping</li>
            <li>Oracle Architecture Design</li>
            <li>Development & Customization</li>
            <li>Testing & Support</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
