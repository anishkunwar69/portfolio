"use client";
import { useState } from "react";

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of web development services do you offer?",
      answer:
        "I provide end-to-end web development services ranging from simple landing pages to complex web applications. My expertise includes frontend development with React, Next.js, and Vue.js, backend development with Node.js, Express, and MongoDB, as well as full-stack solutions. Whether you need a frontend-heavy website with stunning animations or a backend-heavy application with complex logic, I can tailor my services to your specific business needs.",
    },
    {
      question: "How does your design and development process work?",
      answer:
        "My process begins with understanding your business goals, target audience, and specific requirements. I then create wireframes and design mockups for your approval. Once the design is finalized, I move to development, building your website with clean, efficient code. Throughout the process, you will receive regular updates and opportunities for feedback. After thorough testing, we launch your website and I provide training on how to manage it. The entire process typically takes 4-8 weeks depending on project complexity.",
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
      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Common Questions
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Frequently <span className="text-blue-600">Asked</span>
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Get the information you need to make informed decisions about your web
          development project.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              {/* Question button */}
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left px-6 py-5 flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-gray-50"
                    : "bg-white hover:bg-gray-50"
                }`}
                aria-expanded={activeIndex === index}
              >
                <div className="flex items-center gap-4">
                  <span className="text-blue-600 opacity-60 text-sm">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <h3 className="sm:text-lg text-sm font-medium text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
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
                </div>
              </button>

              <div
                className={`overflow-hidden transition-transform duration-300 ease-out ${
                  activeIndex === index 
                    ? "opacity-100 transform-none" 
                    : "opacity-0 transform translate-y-[-8px]"
                }`}
                style={{
                  height: activeIndex === index ? 'auto' : 0,
                  transitionProperty: 'opacity, transform, height',
                  transitionDuration: '300ms, 300ms, 300ms'
                }}
              >
                <div className="px-6 py-4 border-l-2 border-blue-100 ml-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

              <div
                className={`h-[1px] w-full transition-opacity duration-300 ${
                  index === faqs.length - 1 || activeIndex === index
                    ? "opacity-0"
                    : "bg-gray-100"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-w-3xl mx-auto bg-gray-50 p-8 relative">
        <div className="absolute -left-2 top-0 bottom-0 w-1 bg-blue-500 opacity-30"></div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 text-sm">
              Get in touch and I&apos;ll be happy to help you with any queries.
            </p>
          </div>
          <a
            href="https://www.instagram.com/anishkunwarr/"
            target="_blank"
            className="group relative px-6 py-3 overflow-hidden hover:scale-105 transition-transform"
          >
            <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
            <span className="relative text-white">Contact Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FaqContent;
