import { Link } from "react-router-dom";

export default function CustomsiedAppDevelopment() {
  const releatedServices = [
    {
      id: 1,
      title: "Enterprise Software Development",
      link: "enterprise-software",
    },
    {
      id: 2,
      title: "Application Modernization",
      link: "application-modernization",
    },
    {
      id: 3,
      title: "Post-Development Support",
      link: "post-support",
    },
    {
      id: 4,
      title: "Industry-Specific Solutions",
      link: "industry-solutions",
    },
    {
      id: 5,
      title: "Integration Services",
      link: "integration-services",
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
              Customized Apps Development{" "}
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
              Customized Apps Development
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Tailored Solutions for Your Business Needs
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              I specialize in delivering fully tailored app development services
              designed to meet the unique demands of your business. My
              experienced developers work closely with you to create customized
              software solutions that enhance efficiency, streamline operations,
              and drive growth.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              From selecting the right technologies to crafting innovative
              designs and managing end-to-end development processes, I provide
              expert guidance at every step. Whether you need a mobile app, web
              application, or enterprise-grade software, my team ensures your
              project aligns with your business goals and exceeds your
              expectations.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              With a focus on quality, scalability, and user satisfaction, I
              turn your vision into a powerful digital reality.
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="enterprise-software" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Enterprise Software Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I offer comprehensive development services to create custom
            enterprise software tailored to Your specific requirements. From
            design to deployment, my team collaborates with you to build
            solutions that optimize processes, improve efficiency, and support
            Your business goals.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Custom CRM & ERP Development
            </h2>
            <p className="text-gray-400">
              I provide development services to create fully customized CRM
              (Customer Relationship Management) and ERP (Enterprise Resource
              Planning) systems. My solutions are built from the ground up to
              address Your business’s unique needs, whether it’s managing
              customer interactions, streamlining workflows, or enhancing
              resource planning. With my expertise, you get software that aligns
              perfectly with Your operations.
            </p>
          </div>
          {/* Workflow Automation Tool Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Workflow Automation Tool Development
            </h2>
            <p className="text-gray-400">
              I design and develop tailored workflow automation tools that
              eliminate repetitive tasks, reduce errors, and improve overall
              productivity. My solutions integrate seamlessly into Your existing
              processes and systems, ensuring a smooth transition to a more
              efficient and automated workflow.
            </p>
          </div>
          {/* Business Intelligence Application Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Business Intelligence Application Development
            </h2>
            <p className="text-gray-400">
              Transform Your data into meaningful insights with custom-developed
              Business Intelligence (BI) applications. My services focus on
              building solutions that analyze and visualize Your data, helping
              you identify trends, forecast outcomes, and make informed
              decisions. Each BI tool is uniquely crafted to address Your
              specific analytical and reporting needs.
            </p>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            You receive expert guidance and development services to build
            software that empowers Your business and adapts to its growth.
          </p>
        </section>
        {/* ###########  SECOND ############### */}
        {/* Title & Content */}
        <section id="application-modernization" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Application Modernization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in modernizing Your legacy applications to align with
            the latest technology standards and business demands. My application
            modernization services help you enhance performance, reduce
            operational costs, and future-proof Your software for sustained
            growth.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Legacy System Upgrades
            </h2>
            <p className="text-gray-400">
              I transform outdated systems into modern, efficient solutions.
              Whether it’s updating technology stacks, improving user
              interfaces, or boosting system capabilities, my team ensures Your
              legacy software meets current industry standards and remains
              competitive in today’s digital landscape.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              2. Cloud Integration
            </h2>
            <p className="text-gray-400">
              Seamlessly transition Your applications to the cloud with my
              expert integration services. I will help you leverage the power of
              cloud computing to improve scalability, enhance accessibility, and
              reduce infrastructure costs. My tailored approach ensures a smooth
              migration with minimal disruption to Your operations.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              3. Feature Enhancements
            </h2>
            <p className="text-gray-400">
              I enhance Your existing applications by adding new features and
              functionalities to meet evolving business needs. Whether it’s
              integrating third-party tools, implementing advanced analytics, or
              optimizing system performance, I ensure Your software grows with
              Your business and delivers maximum value.
            </p>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            With my application modernization services, your business can stay
            ahead of technological advancements and achieve long-term success.
          </p>
        </section>
        {/* ###########  THIRD ############### */}
        {/* Title & Content */}
        <section id="post-support" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Post-Development Support
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I believe the journey doesn’t end when Your application goes
            live—it’s just the beginning. My comprehensive post-development
            support services are designed to ensure Your software operates at
            peak performance while adapting to Your evolving business needs.
            From regular maintenance to proactive optimization, I am dedicated
            to keeping Your applications secure, efficient, and future-ready.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              My approach focuses on:
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Reliability :
                </span>{" "}
                Ensuring consistent functionality and minimizing disruptions
                through ongoing monitoring and quick resolution of any issues.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Security :
                </span>{" "}
                Implementing the latest security measures and updates to protect
                Your data and systems from evolving threats.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Optimization :
                </span>{" "}
                Regularly analyzing performance metrics and user feedback to
                make targeted enhancements for improved efficiency and user
                satisfaction.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            With Me as Your trusted partner, you can rest assured that Your
            software remains a powerful asset, supporting Your business goals
            and adapting seamlessly to future challenges. I am here to provide
            the expertise and commitment needed to ensure the longevity and
            success of Your application.
          </p>
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Maintenance & Updates
            </h2>
            <p className="text-gray-400">
              I provide ongoing maintenance to keep Your applications running
              smoothly. From fixing bugs to implementing updates, I ensure Your
              software is always optimized for performance and aligned with the
              latest technology standards.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              2. Bug Fixes
            </h2>
            <p className="text-gray-400">
              My team proactively identifies and resolves any issues that may
              arise, minimizing downtime and ensuring Your application delivers
              a seamless user experience. With my prompt response times, you can
              trust that Your software remains dependable.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              3. Technical Support
            </h2>
            <p className="text-gray-400">
              My dedicated support team is available to assist you with any
              technical challenges. Whether it’s troubleshooting, user training,
              or addressing system queries, I provide expert assistance to keep
              Your business operations running without interruptions.
            </p>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            With me, post-development support services, you gain a reliable
            partner to ensure Your software continues to meet Your business
            needs and adapts to future challenges.
          </p>
        </section>
        {/* ###########  FOURTH ############### */}
        {/* Title & Content */}
        <section id="industry-solutions" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Industry-Specific Solutions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I understand that every industry has its own set of challenges and
            opportunities. That’s why I offer industry-specific software
            development services designed to address the unique requirements of
            Your business. My team works closely with you to craft custom
            solutions that drive efficiency, enhance customer experiences, and
            give you a competitive edge in Your industry.
          </p>

          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Healthcare Applications
            </h2>
            <p className="text-gray-400">
              From patient management systems to telemedicine platforms, I
              develop robust software solutions tailored for the healthcare
              industry. My services prioritize compliance with regulatory
              standards, data security, and seamless user experiences to improve
              patient care and streamline operations.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              2. Finance & Banking Solutions
            </h2>
            <p className="text-gray-400">
              I create secure and scalable financial software, including payment
              gateways, risk management systems, and mobile banking apps. My
              solutions are designed to enhance customer engagement, ensure
              regulatory compliance, and streamline financial processes for
              maximum efficiency.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              3. Retail & E-commerce Platforms
            </h2>
            <p className="text-gray-400">
              Whether you need a dynamic e-commerce website, personalized
              shopping experience, or inventory management tools, I deliver
              solutions that empower retailers. My services focus on
              scalability, user-friendly interfaces, and advanced analytics to
              boost sales and improve customer retention.
            </p>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            My industry-specific expertise ensures that Your business receives
            software tailored to its exact needs, helping you achieve Your goals
            and stay ahead of the competition.
          </p>
        </section>
        {/* ###########  FIFTH ############### */}
        {/* Title & Content */}
        <section id="integration-services" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Integration Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in integration services that unify Your digital
            ecosystem, enabling Your systems, applications, and tools to work
            together effortlessly. By creating seamless connections across
            platforms, I help you improve efficiency, eliminate silos, and
            unlock the full potential of Your business processes.
          </p>

          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. API Development & Integration
            </h2>
            <p className="text-gray-400">
              I design and implement robust APIs to connect Your applications
              and systems, ensuring smooth data exchange and process automation.
              Whether you need custom APIs or integration with third-party
              services, I provide solutions tailored to Your specific business
              requirements.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              2. Third-Party Tool Integration
            </h2>
            <p className="text-gray-400">
              Streamline Your operations by integrating essential third-party
              tools and platforms, such as CRM, ERP, payment gateways, and
              marketing tools. My team ensures compatibility, smooth
              implementation, and minimal disruption during the integration
              process.
            </p>
            <h2 className="text-2xl mt-3 font-semibold text-white mb-4">
              3. Data Synchronization
            </h2>
            <p className="text-gray-400">
              I enable real-time data synchronization across systems, ensuring
              that Your business always operates with accurate and up-to-date
              information. From database integration to cross-platform
              synchronization, my solutions eliminate data silos and enhance
              decision-making.
            </p>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            With My integration services, you can create a cohesive and
            efficient digital environment that drives collaboration, reduces
            complexity, and accelerates business growth.
          </p>
        </section>
      </main>
    </div>
  );
}

{
  /* Secondary Images
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="h-64 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-full w-full bg-gray-700 rounded-xl animate-pulse"></div>
            </div>
          ))}
        </div> */
}
