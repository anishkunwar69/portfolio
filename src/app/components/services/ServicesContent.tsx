"use client";
import Link from "next/link";
import { useState } from "react";

function ServicesContent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Strategic Web Design",
      description:
        "Captivating websites that tell your brand story, engage visitors, and drive conversions through data-driven design.",
      icon: "design",
      badge: "UI/UX Focused"
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Tailor-made digital solutions that transform your ideas into powerful, engaging experiences with clean, efficient code.",
      icon: "code",
      badge: "Custom Built"
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description:
        "Convert browsers to buyers with intuitive shopping experiences designed to maximize sales and customer satisfaction.",
      icon: "shopping",
      badge: "Sales Driven"
    },
    {
      id: 4,
      title: "MVP Development",
      description:
        "Rapidly bring your startup idea to life with lean, scalable MVPs that help you validate concepts and secure funding.",
      icon: "rocket",
      badge: "Fast Launch"
    },
    {
      id: 5,
      title: "CMS Integration",
      description:
        "Empower your team to effortlessly manage and update website content using intuitive, user-friendly content management systems.",
      icon: "cms",
      badge: "Self-Managed"
    },
    {
      id: 6,
      title: "Post Assistance",
      description:
        "Keep your digital presence running smoothly with dedicated maintenance, updates, and ongoing optimization.",
      icon: "support",
      badge: "Ongoing Support"
    },
  ];

  return (
    <div className="py-20">
      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Services
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          What I <span className="text-blue-600">Offer</span>
        </h1>
        <p className="text-gray-700 max-w-2xl">
          I create custom web solutions that elevate your brand, convert
          visitors into customers, and give you a competitive edge in the
          digital landscape.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((service, _index) => (
          <div
            key={service.id}
            className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>

            <div className="mb-6 flex items-center">
              <span className="text-blue-600 text-2xl font-light mr-4">
                {service.id.toString().padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium text-gray-800">
                {service.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              {service.description}
            </p>

            <div>
              <div className="inline-flex items-center text-blue-600">
                <span className="text-xs uppercase tracking-wide font-medium py-1 px-2 bg-blue-50 rounded">{service.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border-gray-100 max-lg:-ml-[13px]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            Ready to bring your{" "}
            <span className="text-blue-600">vision to life</span>?
          </h3>
          <p className="text-gray-700 mb-10">
            Let&apos;s collaborate to create a digital experience that elevates your
            brand, engages your audience, and drives business results.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://www.instagram.com/anishkunwarr/"
              target="_blank"
              className="group relative px-8 py-3 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
              <span className="relative text-white">Start a Project</span>
            </Link>

            <Link
              href="#portfolio"
              className="group relative px-8 py-3 overflow-hidden border border-gray-200"
            >
              <span className="absolute inset-0 w-0 bg-gray-100 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative text-gray-800">View Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesContent;
