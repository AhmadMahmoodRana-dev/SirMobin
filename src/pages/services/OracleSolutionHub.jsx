import { Link } from "react-router-dom";

export default function OracleSolutionHub() {
  const releatedServices = [
    {
      id: 1,
      title: "Custom Oracle APEX Development",
      link: "custome-oracle",
    },
    {
      id: 2,
      title: "Advanced Oracle Forms Development",
      link: "advance-oracle",
    },
    {
      id: 3,
      title: "Analytical Report Design & Development",
      link: "report-design",
    },
    {
      id: 4,
      title: "Progressive Web Apps with Oracle Fusion Integration ",
      link: "progressive-web-app",
    },
    {
      id: 5,
      title: "Oracle Fusion RESTful API/Web Integration Services",
      link: "restfull-api",
    },
    {
      id: 6,
      title: "Oracle Fusion OTBI Reports, Dashboards, Integration & Functional Support",
      link: "otbi-report",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row pt-32 bg-gray-900 text-white min-h-screen px-4 py-8 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Sidebar */}
      <aside className="lg:w-1/4 space-y-6">
        <div className="sticky top-32 space-y-6">
          {/* Search Box */}
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

          {/* Related Services */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Oracle Solution Hub
            </h3>
            <ul className="space-y-2">
              {releatedServices.map((service, i) => (
                <Link
                  to={`#${service.link}`}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                  key={i}
                  className="group flex items-center px-4 p-2 rounded-lg hover:bg-gray-700 transition-all cursor-pointer"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all"></span>
                  {service.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:w-3/4 space-y-8">
        {/* Hero Image */}
        <div className="w-full h-auto bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl shadow-2xl p-10 md:p-16 text-white font-sans">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Oracle Solution Hub
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Tailored Oracle Services for Your Business
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              My Oracle Solution Hub provides comprehensive services to help
              businesses maximize the potential of Oracle technologies. Whether
              you're looking to build custom applications, enhance
              functionality, or improve reporting and analytics, my expertise
              ensures seamless integration, robust performance, and tailored
              solutions that meet Your business requirements.
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="custome-oracle" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            1. Custom Oracle APEX Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in creating customized applications using Oracle
            Application Express (APEX), a rapid development platform for modern
            web apps.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Tailored Business Applications :
                </span>{" "}
                Custom-built apps designed to address Your unique operational
                needs.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Streamlined Workflows :
                </span>{" "}
                Simplified processes with intuitive interfaces and robust
                functionality.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Secure Development Practices :
                </span>{" "}
                Ensuring data integrity and compliance with industry standards.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Scalable Architecture :
                </span>{" "}
                Applications designed to grow alongside Your business.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SECOND ############### */}
        {/* Title & Content */}
        <section id="advance-oracle" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            2. Advanced Oracle Forms Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Modernize and optimize Your legacy Oracle Forms applications with my
            advanced development services.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Form Upgrades & Enhancements :
                </span>{" "}
                Revitalize existing Oracle Forms to meet current standards and
                business needs.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Integration Capabilities :
                </span>{" "}
                Connect Oracle Forms with other platforms for seamless data
                sharing.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  User-Centric Enhancements :
                </span>{" "}
                Improve usability and performance with updated designs and
                functionalities.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Legacy Modernization :
                </span>{" "}
                Transition from older Oracle Forms versions to more advanced
                iterations.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  THIRD ############### */}
        {/* Title & Content */}
        <section id="report-design" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            3. Analytical Report Design & Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Transform raw data into actionable insights with my analytical
            reporting solutions.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom Report Creation :
                </span>{" "}
                Tailored reports designed to highlight critical business
                metrics.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Interactive Dashboards :
                </span>{" "}
                Intuitive dashboards for real-time data visualization and
                analysis.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Data Integration :
                </span>{" "}
                Pull data from various Oracle and non-Oracle sources for
                comprehensive reporting.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Automated Reporting :
                </span>{" "}
                Save time with scheduled, automated report generation and
                distribution.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  FOURTH ############### */}
        {/* Title & Content */}
        <section id="progressive-web-app" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            4. Progressive Web Apps with Oracle Fusion Integration
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Leverage Oracle Fusion to create advanced Progressive Web Apps
            (PWAs) that work across all devices.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Cross-Platform Compatibility :
                </span>{" "}
                PWAs designed to perform seamlessly on Android and iOS devices.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Integration with Oracle Fusion :
                </span>{" "}
                Enhanced functionality through smooth integration with Oracle
                Fusion applications.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Offline Capabilities :
                </span>{" "}
                Access critical app functionalities without an internet
                connection.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Responsive and Engaging Design :
                </span>{" "}
                Apps optimized for superior user experiences across devices.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  FIFTH ############### */}
        {/* Title & Content */}
        <section id="restfull-api" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            5. Oracle Fusion RESTful API/Web Integration Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Streamline Your business processes with Oracle Fusion RESTful APIs
            and web integration.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom API Development :
                </span>{" "}
                Build APIs tailored to Your integration needs
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Third-Party System Integration :
                </span>{" "}
                Seamlessly connect Oracle Fusion with third-party applications
                and services.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Real-Time Data Exchange :
                </span>{" "}
                Enable instant and secure data sharing between systems.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Scalable Architecture :
                </span>{" "}
                API solutions designed for high performance and future growth.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SIXTH ############### */}
        {/* Title & Content */}
        <section id="otbi-reportO" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            6. Oracle Fusion OTBI Reports, Dashboards, Integration & Functional
            Support
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Empower Your business with Oracle Transactional Business
            Intelligence (OTBI) tools for reporting and analysis.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom OTBI Reports :
                </span>{" "}
                Develop reports to provide actionable insights tailored to Your
                business.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Interactive Dashboards :
                </span>{" "}
                Create user-friendly dashboards for real-time data
                visualization.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Seamless Integration :
                </span>{" "}
                Integrate OTBI with Oracle Fusion applications for comprehensive
                analytics.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Ongoing Functional Support :
                </span>{" "}
                Ensure smooth operation with continuous support and
                optimization.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SEVENTH ############### */}
        {/* Title & Content */}
        <section id="hybrid-app" className="space-y-6">
          {/* WHY CHOOSE ME*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Choose Me for Oracle Solutions?
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Deep Oracle Expertise :{" "}
                </span>{" "}
                Extensive experience in Oracle APEX, Fusion, and advanced
                development tools.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Custom-Tailored Solutions :{" "}
                </span>{" "}
                Services designed to align with Your specific business needs.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Seamless Integration :{" "}
                </span>{" "}
                Smooth connection of Oracle technologies with Your existing
                systems.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Future-Ready Designs :{" "}
                </span>
                Scalable solutions built to adapt to Your evolving business
                landscape.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Unlock the power of Oracle technologies with My Oracle Solution Hub,
            where I deliver innovative solutions to meet Your business’s dynamic
            needs.
          </p>
        </section>
      </main>
    </div>
  );
}
