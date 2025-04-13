"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function ServicesContent() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeService, setActiveService] = useState<number | null>(null);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      id: 1,
      title: "Strategic Web Design",
      description:
        "Captivating websites that tell your brand story, engage visitors, and drive conversions through data-driven design.",
      icon: "design",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Tailor-made digital solutions that transform your ideas into powerful, engaging experiences with clean, efficient code.",
      icon: "code",
    },
    {
      id: 3,
      title: "E-commerce Solutions",
      description:
        "Convert browsers to buyers with intuitive shopping experiences designed to maximize sales and customer satisfaction.",
      icon: "shopping",
    },
    {
      id: 4,
      title: "MVP Development",
      description:
        "Rapidly bring your startup idea to life with lean, scalable MVPs that help you validate concepts and secure funding.",
      icon: "rocket",
    },
    {
      id: 5,
      title: "CMS Integration",
      description:
        "Empower your team to effortlessly manage and update website content using intuitive, user-friendly content management systems.",
      icon: "cms",
    },
    {
      id: 6,
      title: "Post Assistance",
      description:
        "Keep your digital presence running smoothly with dedicated maintenance, updates, and ongoing optimization.",
      icon: "support",
    },
  ];

  return (
    <div className="py-20">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 relative"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={headerInView ? { height: "6rem" } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute -left-4 top-0 w-1 h-24 bg-blue-500"
        ></motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-sm uppercase tracking-wider text-gray-500 mb-2"
        >
          Services
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          What I <span className="text-blue-600">Offer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 max-w-2xl"
        >
          I create custom web solutions that elevate your brand, convert
          visitors into customers, and give you a competitive edge in the
          digital landscape.
        </motion.p>
      </motion.div>

      <motion.div
        ref={servicesRef}
        initial={{ opacity: 0 }}
        animate={servicesInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.1 * index,
              ease: "easeOut",
            }}
            className="bg-gray-50 rounded-lg p-8 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
            onMouseEnter={() => setActiveService(service.id)}
            onMouseLeave={() => setActiveService(null)}
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-blue-500 transition-all duration-300 group-hover:h-full"></div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={servicesInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + 0.1 * index,
                ease: "easeOut",
              }}
              className="mb-6 flex items-center"
            >
              <span className="text-blue-600 text-2xl font-light mr-4">
                {service.id.toString().padStart(2, "0")}
              </span>
              <h3 className="text-xl font-medium text-gray-800">
                {service.title}
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={servicesInView ? { opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.3 + 0.1 * index,
                ease: "easeOut",
              }}
              className="text-gray-600 mb-6"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + 0.1 * index,
                ease: "easeOut",
              }}
            >
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-20 border-gray-100"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-serif mb-6"
          >
            Ready to bring your{" "}
            <span className="text-blue-600">vision to life</span>?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-gray-700 mb-10"
          >
            Let&apos;s collaborate to create a digital experience that elevates your
            brand, engages your audience, and drives business results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6"
          >
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
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ServicesContent;
