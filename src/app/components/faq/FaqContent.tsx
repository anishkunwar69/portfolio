"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [faqsRef, faqsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const faqs = [
    {
      question: "What types of web development services do you offer?",
      answer:
        "I provide end-to-end web development services ranging from simple landing pages to complex web applications. My expertise includes frontend development with React, Next.js, and Vue.js, backend development with Node.js, Express, and MongoDB, as well as full-stack solutions. Whether you need a frontend-heavy website with stunning animations or a backend-heavy application with complex logic, I can tailor my services to your specific business needs.",
    },
    {
      question: "How does your design and development process work?",
      answer:
        "My process begins with understanding your business goals, target audience, and specific requirements. I then create wireframes and design mockups for your approval. Once the design is finalized, I move to development, building your website with clean, efficient code. Throughout the process, you&apos;ll receive regular updates and opportunities for feedback. After thorough testing, we launch your website and I provide training on how to manage it. The entire process typically takes 4-8 weeks depending on project complexity.",
    },
    {
      question: "What makes your websites different from others?",
      answer:
        "My websites stand out because they are strategically designed to convert visitors into customers. I focus on creating intuitive user experiences with compelling visuals that reflect your brand identity. Each website I build is optimized for performance, SEO, and mobile responsiveness. Unlike template-based websites, my custom solutions are tailored specifically to your business objectives and include unique interactive elements that engage your visitors and set you apart from competitors.",
    },
    {
      question: "How quickly can you deliver an MVP for startups?",
      answer:
        "For startups needing an MVP (Minimum Viable Product), I can deliver within 2-4 weeks depending on scope. I prioritize core features that demonstrate your concept to investors or early users, allowing for quick iterations based on feedback. My streamlined development approach for MVPs focuses on essential functionality while maintaining clean code that can be expanded later. This helps startups validate their ideas quickly without sacrificing quality or scalability.",
    },
    {
      question: "Do you provide ongoing support after website launch?",
      answer:
        "Absolutely! I offer flexible maintenance packages that include regular updates, security monitoring, performance optimization, and content updates. For e-commerce and dynamic websites, I provide more comprehensive support options. I can also train your team to handle basic content updates independently. My goal is to build a long-term partnership, ensuring your website continues to evolve with your business and remains secure, fast, and effective at converting visitors.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
          Common Questions
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          Frequently <span className="text-blue-600">Asked</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 max-w-2xl"
        >
          Get the information you need to make informed decisions about your web
          development project.
        </motion.p>
      </motion.div>

      <motion.div
        ref={faqsRef}
        initial={{ opacity: 0, y: 30 }}
        animate={faqsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={faqsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 * index + 0.3,
                ease: "easeOut",
              }}
              className="group"
            >
              {/* Question button */}
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => toggleFaq(index)}
                className={`w-full text-left px-6 py-5 flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gray-50"
                    : "bg-white hover:bg-gray-50"
                }`}
                aria-expanded={activeIndex === index}
              >
                <div className="flex items-center gap-4">
                  <motion.span
                    animate={{
                      opacity: [0.6, 1, 0.6],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                    className="text-blue-600 opacity-60 text-sm"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </motion.span>
                  <h3 className="sm:text-lg text-sm font-medium text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="transition-transform duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              <motion.div
                animate={{
                  maxHeight: activeIndex === index ? "500px" : "0px",
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.04, 0.62, 0.23, 0.98],
                }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-l-2 border-blue-100 ml-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>

              <div
                className={`h-[1px] w-full transition-opacity duration-300 ${
                  index === faqs.length - 1 || activeIndex === index
                    ? "opacity-0"
                    : "bg-gray-100"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-20 max-w-3xl mx-auto bg-gray-50 p-8 relative"
      >
        <motion.div
          initial={{ height: 0 }}
          animate={contactInView ? { height: "100%" } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute -left-2 top-0 bottom-0 w-1 bg-blue-500 opacity-30"
        ></motion.div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-sm">
              Get in touch and I&apos;ll be happy to help you with any queries.
            </p>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            href="https://www.instagram.com/anishkunwarr/"
            target="_blank"
            className="group relative px-6 py-3 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
            <span className="relative text-white">Contact Me</span>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}

export default FaqContent;
