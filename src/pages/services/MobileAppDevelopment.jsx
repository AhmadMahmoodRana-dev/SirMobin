import { Link } from "react-router-dom";

export default function MobileAppDevelopment() {
  const releatedServices = [
    {
      id: 1,
      title: "iOS Application Development",
      link: "ios-app",
    },
    {
      id: 2,
      title: "Android Application Development",
      link: "android-app",
    },
    {
      id: 3,
      title: "Hybrid Application Development",
      link: "hybrid-app",
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
              Mobile Application Development
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
              Mobile Application Development
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Custom Solutions for a Connected World
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              I offer end-to-end mobile application development services
              tailored to Your business needs. From concept to deployment, my
              team specializes in creating responsive, high-performance mobile
              applications designed to deliver seamless user experiences.
              Whether you're targeting iOS, Android, or looking for a hybrid
              solution, I ensure Your app meets the highest standards of
              quality, functionality, and scalability.
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="ios-app" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            IOS Application Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            My iOS app development services focus on creating feature-rich,
            visually stunning, and high-performance applications for Apple
            devices, ensuring they align with the unique standards of the iOS
            ecosystem.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Native Development for iOS Devices :
                </span>{" "}
                I use Swift and Objective-C to build native apps optimized for
                iPhones, iPads, and other Apple devices, ensuring exceptional
                performance and seamless user experience
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Adherence to Apple Guidelines :
                </span>{" "}
                My apps comply with Apple’s App Store requirements, ensuring
                hassle-free approval and distribution.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Integration with Apple Ecosystem :
                </span>{" "}
                I enable integration with Apple-exclusive features like Siri,
                Face ID, ARKit, and HealthKit, leveraging the full potential of
                iOS capabilities.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Enhanced Security Features :
                </span>{" "}
                Security is paramount. My iOS apps are built with advanced
                encryption, secure data storage, and robust authentication
                mechanisms.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  SECOND ############### */}
        {/* Title & Content */}
        <section id="android-app" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Android Application Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Android app development, I focused on creating dynamic, scalable,
            and user-friendly applications that cater to the diverse Android
            ecosystem
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Custom Android Development :
                </span>{" "}
                Using Java and Kotlin, I build native Android apps tailored to
                Your business needs, ensuring compatibility with a wide range of
                devices and screen sizes.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Optimized for Android Devices :
                </span>{" "}
                I ensure apps are optimized for Android’s diverse device
                landscape, including smartphones, tablets, and wearable devices.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Google Play Store Compliance :
                </span>{" "}
                My apps meet Google Play Store guidelines, ensuring smooth
                submission and availability for Your target audience.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Integration with Android Features :
                </span>{" "}
                From Google Maps and Firebase integration to push notifications
                and advanced analytics, I incorporate Android-specific tools for
                enhanced functionality.
              </li>
            </ul>
          </div>
        </section>
        {/* ###########  THIRD ############### */}
        {/* Title & Content */}
        <section id="hybrid-app" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Hybrid Application Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            For businesses looking for cost-effective, cross-platform solutions,
            my hybrid app development services deliver apps that run seamlessly
            on both iOS and Android platforms.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Single Codebase, Multiple Platforms :
                </span>{" "}
                I use frameworks like Flutter, React Native, and Xamarin to
                develop apps with a single codebase, ensuring consistent
                performance and appearance across platforms.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Faster Development Cycles :
                </span>{" "}
                Hybrid development reduces time-to-market without compromising
                quality, making it ideal for startups and businesses with tight
                deadlines.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Cost-Effective Solutions :
                </span>{" "}
                With one app serving both iOS and Android, hybrid development
                significantly reduces development and maintenance costs.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Seamless Integration :
                </span>{" "}
                Hybrid apps integrate easily with device hardware and
                third-party APIs, offering a near-native experience to users.
              </li>
            </ul>
          </div>
          {/* WHY CHOOSE ME*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Choose Me for Mobile Application Development?
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                Tailored development that aligns with Your business goals.
              </li>
              <li>
                Experienced team proficient in native and cross-platform
                technologies.
              </li>
              <li>
                A proven track record of delivering scalable, high-quality apps.
              </li>
              <li>
                End-to-end support, from ideation to deployment and beyond.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Partner with me to create mobile applications that combine
            innovation, functionality, and performance, helping Your business
            thrive in a mobile-first world.
          </p>
        </section>
      </main>
    </div>
  );
}
