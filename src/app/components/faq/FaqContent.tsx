"use client";
import Link from "next/link";
import { useState } from "react";

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: "mvp-timeline",
      question: "How long does it take to build an MVP?",
      answer:
        "Typically, we deliver a fully functional MVP within 2-4 weeks. The timeline depends on the complexity of features, but our streamlined process ensures rapid deployment without compromising quality.",
    },
    {
      id: "landing-page-included",
      question: "What is included in the Premium Landing Page?",
      answer:
        "Our Premium Landing Page package includes custom design, copywriting, responsive development, SEO optimization, and integration with your preferred analytics and marketing tools.",
    },
    {
      id: "post-launch-support",
      question: "Do you offer post-launch support?",
      answer:
        "Yes, we provide 30 days of complimentary support after launch to ensure everything runs smoothly. We also offer ongoing maintenance packages for long-term peace of mind.",
    },
    {
      id: "mvp-upgrade",
      question: "Can I upgrade from MVP to a full-scale application?",
      answer:
        "Absolutely. Our code is built with scalability in mind. We use modern frameworks and best practices, making it easy to extend and scale your application as your user base grows.",
    },
    {
      id: "technologies",
      question: "What technologies do you use?",
      answer:
        "We specialize in the modern stack: React, Next.js, TypeScript, and Tailwind CSS for the frontend, ensuring high performance and excellent developer experience.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20">
      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500 hidden sm:block"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Common Questions
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Frequently <span className="text-blue-600">Asked</span>
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Get answers about our process, pricing, and how we deliver measurable
          business results.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              {/* Question button */}
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left px-6 py-5 flex justify-between items-center transition-all duration-300 ${activeIndex === index
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
                  className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
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
                className={`overflow-hidden transition-transform duration-300 ease-out ${activeIndex === index
                  ? "opacity-100 transform-none"
                  : "opacity-0 transform translate-y-[-8px]"
                  }`}
                style={{
                  height: activeIndex === index ? "auto" : 0,
                  transitionProperty: "opacity, transform, height",
                  transitionDuration: "300ms, 300ms, 300ms",
                }}
              >
                <div className="px-6 py-4 border-l-2 border-blue-100 ml-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

              <div
                className={`h-[1px] w-full transition-opacity duration-300 ${index === faqs.length - 1 || activeIndex === index
                  ? "opacity-0"
                  : "bg-gray-100"
                  }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-gray-100 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            Ready to <span className="text-blue-600">grow your business</span>?
          </h3>
          <p className="text-gray-700 mb-10">
            Book a free 30-minute strategy call to discuss your specific needs
            and get a custom growth plan. Limited slots available each month.
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

export default FaqContent;
