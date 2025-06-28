"use client";
import Link from "next/link";
import React, { useState } from "react";

const FooterContent = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<
    null | "success" | "error"
  >(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    setTimeout(() => {
      setIsSubscribing(false);
      setSubscribeStatus("success");
      setEmail("");

      setTimeout(() => {
        setSubscribeStatus(null);
      }, 3000);
    }, 1500);
  };

  const navItems = [
    { name: "Who We Work With", path: "#who-we-work-with" },
    { name: "Solutions", path: "#services" },
    { name: "Our Works", path: "#portfolio" },
    { name: "Testimonials", path: "#testimonials" },
  ];

  return (
    <div className="container mx-auto px-6 pt-16 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
        <div className="md:col-span-5">
          <div className="mb-8">
            <h2 className="text-3xl font-serif mb-4">AK Studio</h2>
            <div className="w-12 h-1 bg-blue-400 mb-6"></div>
            <p className="text-blue-100 max-w-md mb-8">
            We help founders & creators launch fast, sell smarter, and grow online — with high-converting websites and MVPs built in weeks, not months.
From idea to launch, we turn your vision into a live product that drives real business results — fast.
            </p>
          </div>

          <div className="mt-[42px]">
            <h3 className="text-sm uppercase tracking-wider text-blue-200 mb-4">
              Quick Links
            </h3>
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-blue-200 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <h3 className="text-2xl font-medium mb-4">
              Get our growth insights
            </h3>
            <p className="text-blue-100 mb-6">
              Join business owners receiving our weekly tips on increasing
              website conversions and revenue.
            </p>
            <form onSubmit={handleSubscribe} className="relative mb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-36 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-blue-200/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-all duration-300 disabled:opacity-70"
              >
                {isSubscribing ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Subscribing
                  </span>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            {subscribeStatus && (
              <div
                className={`mt-3 text-sm ${
                  subscribeStatus === "success"
                    ? "text-green-300"
                    : "text-red-300"
                }`}
              >
                {subscribeStatus === "success"
                  ? "✓ Successfully subscribed! Thank you."
                  : "× There was an error. Please try again."}
              </div>
            )}
          </div>

          <div className="mt-8">
            <Link href="#contact" className="inline-flex items-center group">
              <span className="mr-2 bg-white text-blue-600 px-5 py-2.5 rounded-lg font-medium transition-transform duration-300 group-hover:-translate-y-1">
                Book a Free Strategy Call
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500/30 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-blue-200 mb-4 md:mb-0">
          © {new Date().getFullYear()} AK Studio. All rights reserved.
        </div>

        <div className="text-xs bg-blue-700/50 px-3 py-1.5 rounded-full text-blue-100">
          Delivering measurable results since 2025
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
