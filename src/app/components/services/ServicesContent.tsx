"use client";
import Link from "next/link";
import { useState } from "react";

function ServicesContent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Sales-Focused Website",
      description:
        "Custom-designed website that converts visitors into buyers with strategic messaging, optimized user flows, and built-in lead generation systems.",
      icon: "design",
      badge: "High Conversion",
      price: "Starting at $1,499",
      deliveryTime: "14 days",
    },
    {
      id: 2,
      title: "Startup MVP Package",
      description:
        "Launch your startup idea in 2 weeks or less with a fully functional MVP that helps validate concepts, attract early users, and secure investor interest.",
      icon: "code",
      badge: "Investor-Ready",
      price: "Starting at $2,499",
      deliveryTime: "14 days",
      popular: true,
    },
    {
      id: 3,
      title: "E-commerce Growth System",
      description:
        "Complete online store with product management, payment processing, and marketing tools designed to maximize sales and streamline operations.",
      icon: "shopping",
      badge: "Revenue-Focused",
      price: "Starting at $1,999",
      deliveryTime: "21 days",
    },
    {
      id: 4,
      title: "7-Day Launch Accelerator",
      description:
        "Ultra-fast website or landing page deployment for time-sensitive projects, perfect for product launches, events, or campaigns that need immediate market presence.",
      icon: "rocket",
      badge: "Ultra-Fast",
      price: "Starting at $999",
      deliveryTime: "7 days",
    },
    {
      id: 5,
      title: "Self-Managed Website",
      description:
        "Easily update your site without code or hiring developers. Includes custom CMS integration, training, and templates for ongoing content management.",
      icon: "cms",
      badge: "No-Code Updates",
      price: "Starting at $1,699",
      deliveryTime: "14 days",
    },
    {
      id: 6,
      title: "Growth Partnership",
      description:
        "Ongoing technical partnership with monthly website optimization, feature additions, and performance monitoring to continuously improve business results.",
      icon: "support",
      badge: "Monthly Support",
      price: "Starting at $499/mo",
      deliveryTime: "Ongoing",
    },
  ];

  return (
    <div className="py-20">
      <style jsx>{`
        @media (min-width: 922px) and (max-width: 1595px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1596px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500 hidden sm:block"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Solutions
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Our <span className="text-blue-600">Packages</span>
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Ready-to-launch solutions designed to help founders and businesses
          grow online with predictable timelines and transparent pricing.
        </p>
      </div>

      <div className="services-grid grid grid-cols-1 gap-8 mt-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-white border-[1px] border-slate-200 rounded-lg p-8 transition-all duration-300 hover:shadow-lg group relative overflow-hidden ${
              service.popular ? "ring-2 ring-blue-500" : ""
            }`}
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            {service.popular && (
              <div className="absolute sm:top-4 top-2 right-4">
                <span className="bg-amber-500 text-white text-xs uppercase font-bold py-1 px-2 rounded-full inline-block">
                  Most Popular
                </span>
              </div>
            )}
            <div className="absolute top-0 left-0 w-1 h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>

            <div className="mb-4 flex items-center justify-between">
              <h3 className="sm:text-xl text-lg font-medium text-gray-800">
                {service.title}
              </h3>
            </div>

            {/* <div className="mb-6 flex items-center justify-between">
              <span className="text-blue-600 sm:text-lg text-base font-medium">
                {service.price}
              </span>
              <span className="text-gray-500 sm:text-sm text-xs">
                Delivery: {service.deliveryTime}
              </span>
            </div> */}

            <p className="text-gray-600 mb-6 sm:text-base text-sm">
              {service.description}
            </p>

            <div className="flex justify-between items-center">
              <div className="inline-flex items-center text-blue-600">
                <span className="text-xs uppercase tracking-wide font-medium py-1 px-2 bg-blue-50 rounded">
                  {service.badge}
                </span>
              </div>

              <Link
                href="#contact"
                className="sm:text-sm text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 border-t border-gray-100 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            Ready to <span className="text-blue-600">grow your business</span>{" "}
            online?
          </h3>
          <p className="text-gray-700 mb-10">
            Book a free 30-minute discovery call to discuss your project needs
            and get a custom quote. Limited slots available each month.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://www.instagram.com/anishkunwarr/"
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

export default ServicesContent;
