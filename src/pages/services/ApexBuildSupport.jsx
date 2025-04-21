import { Link } from "react-router-dom";

export default function ApexBuildSupport() {
  const releatedServices = [
    {
      id: 1,
      title: "Custom APEX Application Development",
      link: "apex-app",
    },
    {
      id: 2,
      title: "APEX Application Modernization",
      link: "apex-app-modernization",
    },
    {
      id: 3,
      title: "APEX Mobile Application Development",
      link: "apex-app-development",
    },
    {
      id: 4,
      title: "APEX Integration Services",
      link: "apex-integrate-services",
    },
    {
      id: 5,
      title: "APEX Analytics and Reporting",
      link: "apex-analytic",
    },
    {
      id: 6,
      title:"Ongoing Maintenance & Support",
      link: "maintenance-support",
    },
    {
      id: 7,
      title:"Security & Compliance Services",
      link: "security",
    },
    {
      id: 8,
      title:"APEX Training & Consultation",
      link: "apex-training",
    },
    {
      id: 9,
      title:"Migration Services to APEX",
      link: "migration-service",
    },
    {
      id: 10,
      title:"Scalable Application Development",
      link: "scalable-app",
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
              APEX Build & Support
            </h3>
            <ul className="space-y-2">
              {releatedServices.map((service, i) => (
                <Link
                  to={`#${service.link}`}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                  key={i}
                  className="group flex items-center px-2 p-2 rounded-lg hover:bg-gray-700 transition-all cursor-pointer"
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
              APEX Build & Support
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Extensive Oracle APEX Development and Maintenance Services
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              My APEX Build & Support services empower businesses to leverage
              Oracle Application Express (APEX) to create and maintain robust,
              scalable, and secure web applications. Oracle APEX is a low-code
              platform ideal for building modern, data-driven applications, and
              I ensure Your projects are optimized for performance, user
              experience, and business needs.
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="apex-app" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            1. Custom APEX Application Development
          </h2>
          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Business Process Automation :
                </span>{" "}
                Develop apps that automate repetitive tasks, improving
                efficiency.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom Workflow Solutions :
                </span>{" "}
                Build applications tailored to unique organizational workflows.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Data-Driven Applications :
                </span>{" "}
                Create systems for real-time data management and visualization.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom Dashboards :
                </span>{" "}
                Design interactive dashboards to monitor KPIs and generate
                actionable insights.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SECOND ############### */}
        {/* Title & Content */}
        <section id="apex-app-modernization" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            2. APEX Application Modernization
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Legacy App Migration :
                </span>{" "}
                Upgrade older applications to APEX for improved functionality
                and performance.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  UI/UX Revamp :
                </span>{" "}
                Enhance user interfaces and experiences to align with modern
                standards.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Performance Optimization :
                </span>{" "}
                Identify and resolve bottlenecks to improve app speed and
                reliability.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Cloud Migration :
                </span>{" "}
                Transition of on-premise APEX applications to Oracle Cloud
                Infrastructure.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  THIRD ############### */}
        {/* Title & Content */}
        <section id="apex-app-development" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            3. APEX Mobile Application Development
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Responsive Web Apps :
                </span>{" "}
                Build mobile-friendly APEX applications for seamless use across
                devices.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Offline Support :
                </span>{" "}
                Create mobile apps with offline capabilities for uninterrupted
                access.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Integration with Device Features :
                </span>{" "}
                Enable mobile app functionalities like GPS, notifications, and
                camera access.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  FOURTH ############### */}
        {/* Title & Content */}
        <section id="apex-integrate-services" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            4. APEX Integration Services
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Third-Party Integration :
                </span>{" "}
                Connect APEX apps with external tools like CRMs, ERPs, and
                payment gateways.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  API Development :
                </span>{" "}
                Build RESTful APIs to enable seamless data exchange with other
                systems.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Oracle Cloud Integration :
                </span>{" "}
                Integrate APEX with Oracle Fusion and Oracle Cloud services.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  FIFTH ############### */}
        {/* Title & Content */}
        <section id="apex-analytic" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            5. APEX Analytics and Reporting
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom Reports :
                </span>{" "}
                Develop tailored reports for operational and strategic insights.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Interactive Charts & Graphs :
                </span>{" "}
                Enable advanced data visualization for complex datasets.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Scheduled Reports :
                </span>{" "}
                Automate report generation and email distribution.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SIXTH ############### */}
        {/* Title & Content */}
        <section id="maintenance-support" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            6. Ongoing Maintenance & Support
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Bug Fixes & Troubleshooting :
                </span>{" "}
                Rapid identification and resolution of issues to minimize
                downtime.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Regular Updates :
                </span>{" "}
                Apply patches and updates to ensure the application remains
                secure and up to date.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Performance Monitoring :
                </span>{" "}
                Continuously monitor application performance for optimal
                operation.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  User Support :
                </span>{" "}
                Provide training and support for end-users to maximize adoption.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SEVENTH ############### */}
        {/* Title & Content */}
        <section id="security" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            7. Security & Compliance Services
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Secure Development Practices :
                </span>{" "}
                Implement robust security measures like data encryption and
                secure authentication.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Compliance Assurance :
                </span>{" "}
                Ensure APEX applications adhere to industry regulations and
                standards
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Vulnerability Assessments :
                </span>{" "}
                Regularly audit applications to identify and mitigate potential
                security risks
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  EIGHT ############### */}
        {/* Title & Content */}
        <section id="apex-training" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            8. APEX Training & Consultation
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Developer Training :
                </span>{" "}
                Provide hands-on training for teams to build and maintain APEX
                applications.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Best Practices Guidance :
                </span>{" "}
                Share insights on efficient APEX development and deployment.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Architecture Consultation :
                </span>{" "}
                Help design scalable and efficient APEX application
                architectures.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  NINTH ############### */}
        {/* Title & Content */}
        <section id="migration-service" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            9. Migration Services to APEX
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Platform Transition :
                </span>{" "}
                Move applications from other platforms to Oracle APEX with
                minimal disruption.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Data Migration :
                </span>{" "}
                Ensure secure and accurate migration of data to the new APEX
                environment.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Functional Enhancements :
                </span>{" "}
                Add new features during the migration process for improved
                usability.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  TENTH ############### */}
        {/* Title & Content */}
        <section id="scalable-app" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            10. Scalable Application Development
          </h2>
          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Multi-Tenant Applications :
                </span>{" "}
                Develop apps that serve multiple clients or departments with a
                single codebase.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  High-Performance Architecture :
                </span>{" "}
                Build applications capable of handling large-scale operations.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Future-Proof Designs :
                </span>{" "}
                Ensure scalability to accommodate business growth.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  ELEVENTH ############### */}
        {/* Title & Content */}
        <section id="hybrid-app" className="space-y-6">
          {/* WHY CHOOSE ME*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Choose Me for APEX Build & Support?
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Expertise in Low-Code Development :{" "}
                </span>{" "}
                Extensive experience in building efficient and user-friendly
                APEX applications.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Tailored Solutions :{" "}
                </span>{" "}
                Customizable services designed to meet Your unique business
                needs.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  End-to-End Support :{" "}
                </span>{" "}
                From development to deployment and ongoing maintenance, I handle
                it all.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Focus on Security :{" "}
                </span>
                Robust security measures to protect Your applications and data.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Transform Your application development and maintenance with My APEX
            Build & Support services, where innovation meets reliability.
          </p>
        </section>
      </main>
    </div>
  );
}
