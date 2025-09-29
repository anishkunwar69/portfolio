"use client";
import Link from "next/link";
import { useState } from "react";

function FaqContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can you deliver results for my business?",
      answer:
        "Our agency is structured for rapid delivery and measurable results. For most clients, we begin seeing traffic improvements within the first 2 weeks and conversion increases within 30 days of launch. Our Sales-Focused Website package typically delivers ROI within 45-60 days, while our MVP packages help founders secure funding in as little as 3-4 weeks. We're committed to timelines that align with your business goals—whether that's hitting revenue targets, launching before competitors, or meeting investor deadlines.",
    },
    {
      question: "What kind of ROI can I expect from your services?",
      answer:
        "Our clients typically see a 2-4x return on investment within the first 3-6 months. For example, our e-commerce clients average a 30-40% increase in conversion rates, and our SaaS clients reduce customer acquisition costs by 25-35% through optimized websites. We document all performance metrics and provide monthly reports tracking your specific KPIs—whether that's lead generation, sales, user signups, or investor interest. Our agency's success is measured by your business outcomes, not just website aesthetics.",
    },
    {
      question:
        "How is your agency different from other web development companies?",
      answer:
        "Unlike traditional web agencies that focus solely on design or development, we operate as a strategic growth partner. Our team combines technical expertise with business strategy to create digital assets that actively generate revenue. We don't just build websites—we build sales systems with clear ROI. Our process includes in-depth market research, competitor analysis, and conversion optimization from day one. Additionally, we offer flexible payment options including performance-based models for qualified clients, demonstrating our confidence in delivering measurable results.",
    },
    {
      question: "Do you work with early-stage startups with limited budgets?",
      answer:
        "Yes, we've developed specific packages for early-stage founders who need to maximize every dollar. Our 7-Day Launch Accelerator ($999) is specifically designed for pre-seed startups needing to validate concepts quickly. For funded startups, our Startup MVP Package ($2,499) provides everything needed to demonstrate traction to investors. We also offer flexible payment structures for promising startups, including milestone-based payments and, in select cases, equity arrangements for long-term partnerships. Our goal is to help you reach profitability or your next funding round.",
    },
    {
      question: "What ongoing support do you provide after project completion?",
      answer:
        "We believe in building long-term partnerships, not just completing transactions. Every project includes 30 days of post-launch support at no additional cost. Beyond that, our Growth Partnership program ($499/month) provides ongoing optimization, feature additions, and technical support to continuously improve your results. This includes monthly performance reviews, A/B testing of key pages, and priority access to our team for time-sensitive updates. Many clients find that this ongoing optimization pays for itself through increased conversion rates and customer lifetime value.",
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
              href="https://www.instagram.com/anishkunwar_21/"
              className="group relative px-8 py-3 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
              <span className="relative text-white">
                Book Your Free Strategy Call
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqContent;
