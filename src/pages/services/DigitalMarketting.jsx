import { Link } from "react-router-dom";

export default function DigitalMarketting() {
  const releatedServices = [
    {
      id: 1,
      title: "Search Engine Optimization",
      link: "seo",
    },
    {
      id: 2,
      title: "Pay-Per-Click (PPC) Advertising",
      link: "ppc",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      link: "smm",
    },
    {
      id: 4,
      title: "Content Marketing",
      link: "cm",
    },
    {
      id: 5,
      title: "Email Marketing",
      link: "em",
    },
    {
      id: 6,
      title: "Conversion Rate Optimization ",
      link: "cro",
    },
    {
      id: 7,
      title: "Online Reputation Management",
      link: "orm",
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
              Digital Marketing Services
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
              Digital Marketing Services
            </h1>
            <p className="text-lg md:text-2xl font-semibold text-white max-w-4xl mx-auto">
              Driving Growth in the Digital Era
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              My Digital Marketing services are crafted to help businesses
              expand their online presence, engage with target audiences
              effectively, and drive measurable results. With a deep
              understanding of the digital landscape, my expert team provides
              customized solutions that integrate various strategies, channels,
              and tools to ensure that Your brand stands out in the crowded
              online marketplace.
            </p>
            <p className="text-base mt-3 md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Whether you are looking to increase brand awareness, generate
              high-quality leads, or improve customer engagement, My Digital
              Marketing services are designed to deliver tangible, long-term
              business growth.
            </p>
          </div>
        </div>
        {/* ########### FIRST ############### */}
        {/* Title & Content */}
        <section id="seo" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Search Engine Optimization
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            SEO is the foundation of a successful online presence. I employ
            proven SEO techniques that help Your website rank higher on search
            engines like Google, driving organic traffic to Your site
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  On-Page Optimization :
                </span>{" "}
                Optimizing content, meta tags, and images for better rankings.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Off-Page SEO :
                </span>{" "}
                Building quality backlinks to improve domain authority.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Local SEO :
                </span>{" "}
                Optimizing Your site for local search visibility.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Technical SEO :
                </span>{" "}
                Enhancing website architecture and mobile optimization to ensure
                seamless user experiences.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Result : </h3>
            <p className="text-gray-300 text-lg leading-relaxed ml-2">
              Boost Your search engine visibility, attract targeted traffic, and
              increase conversions.
            </p>
          </div>
        </section>
        {/* ###########  SECOND ############### */}
        <section id="ppc" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Pay-Per-Click (PPC) Advertising{" "}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Leverage paid advertising to get immediate traffic and highly
            targeted leads. My PPC campaigns are designed to maximize ROI by
            carefully selecting keywords, crafting compelling ad copies, and
            optimizing bids to ensure Your business ranks on the top of search
            results
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Google Ads Campaigns :
                </span>{" "}
                Maximizing visibility through paid search ads.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Social Media Ads :
                </span>{" "}
                Targeting specific demographics on platforms like Facebook,
                Instagram, LinkedIn, and Twitter.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Retargeting Campaigns :
                </span>{" "}
                Engaging past visitors with tailored ads to encourage
                conversions.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Result : </h3>
            <p className="text-gray-300 text-lg leading-relaxed ml-2">
              Achieve quick visibility, drive targeted traffic, and generate
              high-quality leads at optimized cost-per-click rates
            </p>
          </div>
        </section>
        {/* ###########  THIRD ############### */}
        <section id="smm" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Social Media Marketing
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Engage with Your audience where they spend most of their time – on
            social media platforms. My social media strategies are tailored to
            build meaningful connections with Your audience, improve engagement,
            and increase brand loyalty.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Content Creation & Curation :
                </span>{" "}
                Developing compelling content that resonates with Your audience.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Community Building :
                </span>{" "}
                Building and nurturing a community around Your brand.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Influencer Marketing :
                </span>{" "}
                Collaborating with influencers to expand Your reach and
                credibility.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Social Media Analytics :
                </span>{" "}
                Monitoring engagement, understanding audience behavior, and
                refining strategies.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Result : </h3>
            <p className="text-gray-300 text-lg leading-relaxed ml-2">
              Strengthen brand presence, boost customer engagement, and drive
              conversions through strategic social media efforts.
            </p>
          </div>
        </section>
        {/* ###########  FOURTH ############### */}
        <section id="cm" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Content Marketing
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            EContent is king in the digital world.I create tailored content
            marketing strategies that resonate with Your target audience,
            educate them, and ultimately convert them into loyal customers.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Blogging & Article Writing :
                </span>{" "}
                Publishing informative and valuable content to engage Your
                audience.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  E-books & Whitepapers :
                </span>{" "}
                Offering in-depth resources to capture leads and drive
                conversions.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Video Marketing :
                </span>{" "}
                Creating video content to explain Your products or services in
                an engaging format.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Infographics & Visual Content :
                </span>{" "}
                Developing shareable visual content to drive engagement.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Result : </h3>
            <p className="text-gray-300 text-lg leading-relaxed ml-2">
              Increase brand awareness, educate customers, and drive traffic
              through strategic content creation.
            </p>
          </div>
        </section>
        {/* ###########  FIFTH ############### */}
        <section id="em" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Email Marketing
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Build stronger customer relationships with personalized email
            marketing campaigns. I can help you engage Your audience through
            carefully crafted emails designed to nurture leads and drive
            conversions.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Lead Nurturing Campaigns :
                </span>{" "}
                Using automated email sequences to move prospects through the
                sales funnel.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Personalized Messaging :
                </span>{" "}
                Tailoring email content based on user behavior and interests.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Campaign Analytics :
                </span>{" "}
                Tracking open rates, click rates, and conversions to refine
                email strategies.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Result : </h3>
            <p className="text-gray-300 text-lg leading-relaxed ml-2">
              Engage leads with personalized communication and increase
              conversion rates through targeted email campaigns.
            </p>
          </div>
        </section>
        {/* ###########  SIXTH ############### */}
        <section id="cro" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Conversion Rate Optimization (CRO)
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The goal of CRO is to increase the percentage of website visitors
            who take the desired action, such as filling out a form, making a
            purchase, or signing up for a newsletter. I's CRO strategies focus
            on making the most out of Your existing traffic.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Content Creation & Curation :
                </span>{" "}
                Developing compelling content that resonates with Your audience.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  A/B Testing :
                </span>{" "}
                Testing variations of Your web pages to find the most effective
                version.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Heatmap Analysis :
                </span>{" "}
                Understanding user behavior on Your website to improve UX/UI.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Funnel Optimization :
                </span>{" "}
                Streamlining the conversion funnel to reduce drop-offs and
                increase sales.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Result : </h3>
            <p className="text-gray-300 text-lg leading-relaxed ml-2">
              Maximize the value of Your existing traffic and increase overall
              conversion rates.
            </p>
          </div>
        </section>
        {/* ###########  SEVENTH ############### */}
        <section id="orm" className="space-y-6">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
            Online Reputation Management
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            In today’s connected world, your online reputation can significantly
            influence customer trust. My reputation management services ensure
            that Your brand maintains a positive image across all digital
            platforms.
          </p>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Review Monitoring & Management :
                </span>{" "}
                Proactively managing online reviews and responding to customer
                feedback.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Public Relations Strategy :
                </span>{" "}
                Implementing strategies to improve brand perception and maintain
                positive media coverage.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Crisis Management :
                </span>{" "}
                Handling negative press or social media attention swiftly and
                effectively.
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-white">Result : </h3>
            <p className="text-gray-300 text-lg leading-relaxed ml-2">
              Protect and improve Your brand’s reputation in the digital space,
              fostering trust and credibility.
            </p>
          </div>
        </section>
        {/* ###########  EIGHT ############### */}
        <section id="prof-mdma" className="space-y-6">
          <h2 className="text-3xl font-bold text-white">
            How My Digital Marketing Service Will Be Represented on the Website{" "}
          </h2>

          {/* Custom CRM & ERP Development*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <p className="text-gray-300 text-lg leading-relaxed">
              On my website, the Digital Marketing section will be structured to
              provide clear insights into the value of each service, detailing
              its core capabilities and expected results. Each of the above
              services will have dedicated sub-sections with the following :
            </p>
            <ul className="space-y-2 list-disc list-inside mt-4 text-gray-400">
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Service Overview :
                </span>{" "}
                A concise explanation of each service’s purpose and how it fits
                within Your overall digital strategy.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Core Capabilities :
                </span>{" "}
                Detailed points outlining the service’s offerings, including
                techniques, tools, and platforms used.
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Result-Oriented Approach :
                </span>{" "}
                A focus on measurable results and how the service translates to
                tangible benefits (e.g., higher traffic, better engagement,
                increased conversions).
              </li>
              <li>
                <span className="font-semibold tracking-wider text-white">
                  Industry Examples :
                </span>{" "}
                Brief case studies or examples showcasing how this service has
                helped similar businesses or industries.{" "}
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed ml-2">
            Each service will also include client testimonials, clear calls to
            action, and easy navigation to relevant case studies or blog
            articles to further educate visitors about My expertise.
          </p>
        </section>
        {/* ###########  EIGHT ############### */}
        {/* Title & Content */}
        <section id="hybrid-app" className="space-y-6">
          {/* WHY CHOOSE ME*/}
          <div className="bg-[#1e2939] rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Choose Me for Digital Marketing?
            </h2>
            <ul className="space-y-2 list-disc list-inside text-gray-400">
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Tailored Strategies :{" "}
                </span>{" "}
                I understand that every business is unique, and my solutions are
                designed to meet Your specific goals.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Comprehensive Approach :{" "}
                </span>
                From SEO to social media, I integrate different digital
                marketing channels to provide cohesive strategies that deliver
                measurable results.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Experienced Team :{" "}
                </span>{" "}
                My digital marketing experts bring years of experience and are
                up to date with the latest trends, tools, and technologies.
              </li>
              <li>
                <span className="font-semibold text-white tracking-wider">
                  Data-Driven Decisions :{" "}
                </span>
                I use analytics and performance data to continuously optimize
                Your campaigns, ensuring the best possible return on investment.
              </li>
            </ul>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            My Digital Marketing services are dedicated to helping you navigate
            the ever-evolving digital landscape, maximizing Your online
            potential, and driving business success in the digital age. Let me
            help you connect with Your target audience and grow Your brand
            across all digital touchpoints.
          </p>
        </section>
      </main>
    </div>
  );
}
