import { Link } from "react-router-dom";

export default function UxUi() {
  const releatedServices = [
    {
      id: 1,
      title: "User Experience (UX) Design",
      link: "UX",
    },
    {
      id: 2,
      title: "User Interface (UI) Design",
      link: "UI",
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
              UX/UI Design
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
              UX/UI Design
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Crafting Engaging and Intuitive Digital Experiences{" "}
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              I believe exceptional design is the foundation of successful
              digital products. My UI/UX design services focus on creating
              user-centered designs that are not only visually appealing but
              also functional and intuitive. By seamlessly blending creativity
              with usability, I ensure Your digital platforms deliver
              outstanding experiences that engage users and drive business
              success.
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="UX" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            User Experience (UX) Design
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My UX design process is centered on understanding the end-user's
            needs and creating experiences that are simple, enjoyable, and
            efficient.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  User Research & Persona Development :
                </span>{" "}
                I conduct in-depth research to understand Your target audience,
                their behaviors, and pain points. This helps me craft designs
                tailored to their needs.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Information Architecture :
                </span>{" "}
                I organize content and functionality logically, ensuring users
                can navigate Your platform effortlessly.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Wireframing & Prototyping :
                </span>{" "}
                My team develops wireframes and prototypes to visualize the
                structure and flow of Your application or website before
                development begins
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Usability Testing :
                </span>{" "}
                I⦁ Through rigorous testing, I gather feedback to refine
                designs, ensuring they meet user expectations and enhance
                satisfaction.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Journey Mapping :
                </span>{" "}
                I map out user journeys to identify friction points and
                opportunities for optimization, ensuring seamless interaction at
                every step.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SECOND ############### */}
        {/* Title & Content */}
        <section id="UI" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            User Interface (UI) Design
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My UI design services focus on the visual and interactive aspects of
            Your digital product, ensuring it captures Your brand’s essence
            while being user-friendly.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom Visual Design :
                </span>{" "}
                I create unique and cohesive visual designs that align with Your
                brand identity and resonate with Your audience.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Typography & Color Theory :
                </span>{" "}
                My designs use typography, color schemes, and spacing
                strategically to enhance readability and evoke the right
                emotions
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Interactive Design Elements :
                </span>{" "}
                I incorporate animations, transitions, and micro-interactions to
                make Your platform more engaging and intuitive.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Cross-Device Compatibility :
                </span>{" "}
                My UI designs are optimized for a consistent look and feel
                across desktops, tablets, and mobile devices.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Design Systems & Style Guides :
                </span>{" "}
                I develop comprehensive design systems and style guides to
                maintain consistency across all digital touchpoints.
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
              Why Choose Me for UX/UI Design?
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold text-white tracking-wider">
                  User-Centric Approach :{" "}
                </span>{" "}
                Every design decision is guided by user research and insights.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Collaborative Process :{" "}
                </span>{" "}
                I work closely with you to align designs with Your vision and
                business objectives.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Attention to Detail :{" "}
                </span>{" "}
                From micro-interactions to overall aesthetics, I focus on
                creating a cohesive and delightful experience
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Scalable Design Solutions :{" "}
                </span>
                My designs are built to adapt as Your platform evolves and
                grows.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Transform Your digital presence with My expert UX/UI design
            services, where functionality meets creativity to deliver
            exceptional user experiences.
          </p>
        </section>
      </main>
    </div>
  );
}
