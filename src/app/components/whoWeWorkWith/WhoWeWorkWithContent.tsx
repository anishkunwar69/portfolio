"use client";
import Link from "next/link";

function WhoWeWorkWithContent() {
  const clientTypes = [
    {
      title: "Founders & Startups",
      description:
        "Tech entrepreneurs who need to launch MVPs quickly, validate ideas, and attract early users or investors.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Small Businesses",
      description:
        "Local and growing businesses ready to establish a professional online presence that drives real customer acquisition.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Coaches & Creators",
      description:
        "Experts and content creators looking to build their personal brand and monetize their knowledge through digital platforms.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
    {
      title: "E-commerce Brands",
      description:
        "Product-based businesses seeking to increase online sales through optimized shopping experiences and marketing integrations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20">
      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500 hidden sm:block"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Ideal Clients
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Who We <span className="text-blue-600">Work With</span>
        </h1>
        <p className="text-gray-700 max-w-2xl">
          We partner with ambitious founders, businesses, and creators who are
          ready to grow and scale their online presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {clientTypes.map((client, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="text-blue-600 mb-4">{client.icon}</div>
            <h3 className="text-xl font-medium text-gray-800 mb-3">
              {client.title}
            </h3>
            <p className="text-gray-600">{client.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-gray-100 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            Not sure if we're{" "}
            <span className="text-blue-600">the right fit</span>?
          </h3>
          <p className="text-gray-700 mb-10">
            Book a free discovery call to discuss your specific needs and goals.
            We'll help you determine if our solutions align with your vision.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              href="https://cal.com/anish-kunwar-7lyj6e/quick-consultation"
              target="_blank"
              className="group relative px-8 py-3 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
              <span className="relative text-white">Book A Free Call</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeWorkWithContent;
