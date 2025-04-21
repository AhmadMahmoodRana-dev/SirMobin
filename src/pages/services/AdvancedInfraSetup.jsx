import { Link } from "react-router-dom";

export default function AdvancedInfraSetup() {
  const releatedServices = [
    {
      id: 1,
      title: "Professional MDMA Services",
      link: "prof-mdma",
    },
    {
      id: 2,
      title: "CLOUD++ Services",
      link: "cloud-service",
    },
    {
      id: 3,
      title: "CLDHYP Services",
      link: "cldhyp-service",
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
              Advanced Infra Setup
            </h3>
            <ul className="space-y-3">
              {releatedServices.map((service, i) => (
                <Link
                  to={`#${service.link}`}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                  key={i}
                  className="group flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all cursor-pointer"
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
              Advanced Infra Setup
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Exclusive Services for Provincial & National Organizations
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              My Advanced Infra Setup services are tailored to meet the unique
              demands of provincial and national-level private companies and
              government organizations. These specialized services focus on
              providing secure, scalable, and efficient IT infrastructure
              solutions that address the complexities of managing large-scale
              operations
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="prof-mdma" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Professional MDMA Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My MDMA Services are designed to streamline the management of
            multiple devices across expansive networks commonly found in
            government agencies and large corporations. My solutions ensure
            centralized control, enhanced security, and automated processes,
            reducing manual interventions and operational risks.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl mb-6 font-bold text-white">
              Core Capabilities
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Centralized Control :
                </span>{" "}
                Efficiently monitor and manage devices across departments and
                regions.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Automated Updates and Patches :
                </span>{" "}
                Minimize vulnerabilities by ensuring all devices are up to date.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Security Policy Enforcement :
                </span>{" "}
                Implement stringent security measures to meet regulatory
                requirements.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Real-Time Alerts and Analytics :
                </span>{" "}
                Proactive monitoring to identify and address issues before they
                escalate.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  ITSM Tool Integration :
                </span>{" "}
                Seamlessly integrate with IT service management tools for
                streamlined workflows.
              </li>
            </ul>
          </div>
          <h3 className="text-2xl mb-6 font-bold text-white">
            Deployment Scenario
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            This service is ideal for national and provincial organizations
            managing diverse device ecosystems, ensuring robust security and
            compliance with regulatory standards
          </p>
        </section>
        {/* ###########  SECOND ############### */}
        <section id="cloud-service" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            CLOUD++ Services (Advanced Cloud Solutions){" "}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My CLOUD++ Services are designed to meet the high standards of
            government agencies and large-scale enterprises that require secure,
            flexible, and resilient cloud infrastructures.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl mb-6 font-bold text-white">
              Core Capabilities
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  AI-Powered Automation :
                </span>{" "}
                Optimize cloud resources with intelligent allocation and cost
                management.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Hybrid and Multi-Cloud Strategies :
                </span>{" "}
                Enable seamless operations across public and private cloud
                environments.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Enhanced Data Security :
                </span>{" "}
                Comply with strict security protocols and safeguard sensitive
                information.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Scalable Infrastructure :
                </span>{" "}
                Accommodate the growth and complexity of national-level
                operations.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Performance Optimization :
                </span>{" "}
                Ensure critical applications run smoothly, even under heavy
                workloads.
              </li>
            </ul>
          </div>
          <h3 className="text-2xl mb-6 font-bold text-white">
            Deployment Scenario
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Provincial and national organizations with extensive data and
            operational requirements can rely on CLOUD++ for unparalleled
            flexibility, efficiency, and security in their cloud operations.
          </p>
        </section>
        {/* ###########  THIRD ############### */}
        <section id="cldhyp-service" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            CLDHYP Services (Cloud Hypervisor Services)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My CLDHYP Services cater to organizations that require advanced
            virtualization solutions to optimize their IT infrastructure. By
            managing hypervisors and virtual machines (VMs), I ensure efficient
            use of resources and consistent performance.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h3 className="text-2xl mb-6 font-bold text-white">
              Core Capabilities
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Comprehensive VM Management :
                </span>{" "}
                Oversee the lifecycle of VMs within large, complex
                infrastructures.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Resource Optimization :
                </span>{" "}
                Maximize resource utilization to reduce operational costs.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Support for Containerized Workloads :
                </span>{" "}
                Deploy and manage modern, containerized applications
                efficiently.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Disaster Recovery and High Availability :
                </span>{" "}
                Ensure continuity of operations with reliable recovery
                solutions.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  DevOps Integration :
                </span>{" "}
                Enhance automation and collaboration with DevOps practices.
              </li>
            </ul>
          </div>
          <h3 className="text-2xl mb-6 font-bold text-white">
            Deployment Scenario
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            This service is designed for government organizations and
            enterprises operating multi-cloud or hybrid infrastructures,
            ensuring seamless management and optimal performance of their
            virtualized environments.
          </p>
        </section>
        {/* ###########  FOURTH ############### */}
        {/* Title & Content */}
        <section id="hybrid-app" className="space-y-6">
          {/* WHY CHOOSE ME*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Provincial & National Organizations Choose Me ?
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Specialized Expertise :{" "}
                </span>{" "}
                Decades of experience in delivering IT solutions to large-scale
                organizations.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Regulatory Compliance :{" "}
                </span>
                Adherence to national and provincial regulations, ensuring data
                security and privacy.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Scalable Solutions :{" "}
                </span>{" "}
                Infrastructure that grows with the demands of expansive and
                complex operations.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Enhanced Security :{" "}
                </span>
                Robust frameworks to safeguard sensitive government and
                corporate data.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  End-to-End Support :{" "}
                </span>
                From design to deployment and ongoing maintenance, I cover it
                all.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            My Advanced Infra Setup services provide the perfect blend of
            innovation, security, and efficiency to empower provincial and
            national organizations. With a focus on tailored solutions, I ensure
            Your IT infrastructure is ready to meet the challenges of today and
            tomorrow.
          </p>
        </section>
      </main>
    </div>
  );
}
