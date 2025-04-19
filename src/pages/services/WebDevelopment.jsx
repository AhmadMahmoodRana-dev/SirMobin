import { Link } from "react-router-dom";

export default function WebDevelopment() {
  const releatedServices = [
    {
      id: 1,
      title: "Client-Side Development",
      link: "client-dev",
    },
    {
      id: 2,
      title: "Core Infrastructure Development",
      link: "infra-dev",
    }
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
              Web Development
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
              Web Development
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Creating Dynamic and Scalable Digital Solutions
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              I specialize in delivering end-to-end web development services
              tailored to meet the unique requirements of Your business. From
              visually captivating front-end designs to robust and secure
              back-end systems, I ensure Your website provides a seamless user
              experience while achieving Your business objectives.
            </p>
            <p className=" mt-3 text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              My web development process emphasizes performance, scalability,
              and adaptability, ensuring Your online presence remains impactful
              and relevant in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="client-dev" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Client-Side Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Client-side development focuses on creating the visual and
            interactive elements of Your website. My front-end development
            services ensure that users have an engaging, responsive, and
            intuitive experience on Your platform.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Responsive Web Design :
                </span>{" "}
                I design websites that adapt to different devices and screen
                sizes, ensuring optimal user experience on desktops, tablets,
                and smartphones.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Interactive User Interfaces :
                </span>{" "}
                Using cutting-edge frameworks like React, Angular, and Vue.js, I
                build interactive interfaces that captivate and engage users.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Cross-Browser Compatibility :
                </span>{" "}
                My development process ensures that Your website functions
                flawlessly across all major web browsers.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Accessibility Compliance :
                </span>{" "}
                I adhere to accessibility standards (WCAG) to make Your website
                usable for people with disabilities, ensuring inclusivity.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Performance Optimization :
                </span>{" "}
                Fast-loading pages are crucial for user retention. I optimize
                front-end performance for reduced load times and smooth
                navigation.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SECOND ############### */}
        {/* Title & Content */}
        <section id="infra-dev" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Core Infrastructure Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Core infrastructure development forms the backbone of Your website,
            handling data processing, security, and server-side functionality.
            My back-end development services ensure Your website is robust,
            secure, and scalable.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom Back-End Development :
                </span>{" "}
                I build tailored server-side solutions using technologies like
                Node.js, Python, Ruby on Rails, and PHP to support Your unique
                business processes.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Database Design & Management :
                </span>{" "}
                From relational databases like MySQL to NoSQL options like
                MongoDB, I design and manage scalable data storage solutions to
                handle complex data efficiently.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  API Development & Integration :
                </span>{" "}
                I create secure APIs and integrate third-party services to
                enhance Your website’s functionality and streamline operations.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  ISecure Infrastructure :
                </span>{" "}
                Security is my top priority. I implement advanced security
                measures, including encryption, firewalls, and regular
                vulnerability assessments, to protect Your website and data.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Scalability & Cloud Integration :
                </span>{" "}
                I design scalable architectures and leverage cloud solutions
                like AWS, Azure, and Google Cloud to handle traffic growth
                seamlessly.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  THIRD ############### */}
        {/* Title & Content */}
        <section id="hybrid-app" className="space-y-6">
          {/* WHY CHOOSE ME*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Choose Me for Web Development?
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
             <span className="font-semibold text-white tracking-wider">Focus on Quality : </span> My team is dedicated to delivering web
                Custom Solutions : I tailor every aspect of Your website to align
                with Your brand and goals.
              </li>
              <li>
             <span className="font-semibold text-white tracking-wider">Focus on Quality : </span> My team is dedicated to delivering web
                End-to-End Expertise : From design and development to deployment
                and maintenance, I handle it all.
              </li>
              <li>
             <span className="font-semibold text-white tracking-wider">Focus on Quality : </span> My team is dedicated to delivering web
                solutions that combine aesthetics, functionality, and
                performance.
              </li>
              <li>
               <span className="font-semibold text-white tracking-wider">Future-Ready : </span>I build websites designed to adapt and scale as
                Your business grows.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Partner with me to create a powerful online presence that not only
            showcases Your brand but also delivers measurable results.
          </p>
        </section>
      </main>
    </div>
  );
}
