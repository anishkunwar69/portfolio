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
    { name: "Testimonials", path: "#testimonials" },
    { name: "Our Works", path: "#portfolio" },
    { name: "FAQs", path: "#faqs" },
  ];

  return (
    <div className="container mx-auto px-6 pt-16 pb-14">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
        <div className="md:col-span-5">
          <div className="mb-8">
            <h2 className="text-3xl font-serif mb-4">AK Studio</h2>
            <div className="w-12 h-1 bg-blue-400 mb-6"></div>
            <p className="text-blue-100 max-w-md mb-8">
              We help founders & creators launch fast, sell smarter, and grow
              online — with high-converting websites and MVPs built in weeks,
              not months. From idea to launch, we turn your vision into a live
              product that drives real business results — fast.
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
            <Link
              href="https://cal.com/anish-kunwar-7lyj6e/quick-consultation"
              className="inline-flex items-center group"
              target="_blank"
            >
              <span className="mr-2 bg-white text-blue-600 px-5 py-2.5 rounded-lg font-medium transition-transform duration-300 group-hover:-translate-y-1">
                Book A Free Call
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

          <div className="mt-8">
            <h4 className="text-sm uppercase tracking-wider text-blue-200 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              {/* Instagram */}
              <Link
                href="https://www.instagram.com/anishkunwar_21/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:-translate-y-1">
                  <svg
                    className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-pink-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </Link>

              {/* TikTok */}
              <Link
                href="https://www.tiktok.com/@anishkunwarr?_t=ZS-8yHzAFqYAhc&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/40 group-hover:-translate-y-1">
                  <svg
                    className="w-5 h-5 text-white transition-colors duration-300 group-hover:text-pink-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-1.067-1.086-2.4-1.095-2.689L16.618 1.5h-3.357v14.167c0 1.81-1.475 3.285-3.285 3.285-1.81 0-3.285-1.475-3.285-3.285 0-1.81 1.475-3.285 3.285-3.285.36 0 .71.058 1.036.166V9.119a6.618 6.618 0 0 0-1.036-.082c-3.65 0-6.618 2.967-6.618 6.618S6.326 22.273 9.976 22.273s6.618-2.967 6.618-6.618V8.334a9.65 9.65 0 0 0 5.12 1.404V6.405a6.06 6.06 0 0 1-2.393-.843z" />
                  </svg>
                </div>
              </Link>
            </div>
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
