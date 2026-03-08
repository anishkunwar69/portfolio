"use client";
import Image from "next/image";
import { useState } from "react";

function TestimonialContent() {
  // These are kept but commented as they might be used elsewhere in the component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials: Array<{
    type: string;
    embedId?: string;
    quote: string;
    author: string;
    company: string;
    role: string;
    profileImage: string;
    results: string;
    cta?: { text: string; link: string };
  }> = [
    {
      type: "video",
      embedId: "xPuUAOXxRgA",
      quote:
        "Anish transformed our online presence by creating a website that showcases our branches and tea offerings beautifully. He understood our vision and balanced modern design with our traditional roots. The site has given us a competitive edge and become essential to our business growth.",
      author: "Saroj Paudel",
      company: "Irani Chiya",
      role: "Founder & CEO",
      profileImage:
        "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/anish's-portfolio/hmpkw3fuaextkb76zl0b",
      results: "40% increase in brand visibility + online traffic",
    },
    {
      type: "video",
      embedId: "UpShTjXS4Z4",
      quote:
        "As FitPal's founder, I needed an MVP fitness tracking app built quickly. Anish delivered an intuitive platform with a clean interface that makes tracking gym progress simple. His ability to balance functionality with user experience and suggest crucial features set him apart.",
      author: "Rinchen Phuntsok",
      company: "FitPal",
      role: "Founder",
      profileImage:
        "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/anish's-portfolio/t1lt7xpfddfzpw2oqqco",
      results: "Secured 250+ users in 2 weeks of launch",
    },
    {
      type: "text",
      quote:
        "As a videographer, I needed someone who could truly understand my creative vision and build a portfolio that reflected both my work and my personality. Anish delivered exactly that — a website that showcased my projects beautifully while capturing who I am as an artist. His ability to translate a vague idea into something tangible and visually compelling made the entire experience exceed my expectations.",
      author: "Shayuj Pokharel",
      company: "",
      role: "Videographer",
      profileImage:
        "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1772954702/490342396_1427338601611419_632769221839554508_n_jpoaca.jpg",
      results: "Stronger online presence and branding",
    },
    {
      type: "text",
      quote:
        "We would love the opportunity to bring your vision to life. Let's collaborate and build something extraordinary together. Your success story could be featured right here—I can't wait to work with you!",
      author: "Your Name",
      company: "",
      role: "Future You",
      profileImage: "",
      results: "Your next big milestone",
      cta: {
        text: "Start Your Project",
        link: "https://cal.com/anish-kunwar-7lyj6e/quick-consultation",
      },
    },
  ];

  return (
    <div className="py-20">
      <style jsx>{`
        @media (min-width: 1195px) {
          .video-testimonial-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
            align-items: center;
          }
          .video-content {
            order: 2;
            margin-top: 0;
            padding: 0;
            background: none;
            border-radius: 0;
            box-shadow: none;
          }
        }
      `}</style>

      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500 hidden sm:block"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Client Success Stories
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          <span className="hidden sm:inline">
            Hear From <span className="text-blue-600">Our Clients</span>
          </span>
          <span className="sm:hidden">
            My Client&apos;s <span className="text-blue-600">Stories</span>
          </span>
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Real feedback from businesses we&apos;ve worked with to create
          impactful digital experiences.
        </p>
      </div>

      <div className="sm:space-y-24 space-y-16">
        {testimonials
          .filter((t) => t.type === "video")
          .map((testimonial, index) => (
            <div
              key={index}
              className="video-testimonial-grid grid grid-cols-1 gap-12"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl order-1 transform hover:translate-y-[-5px] transition-all duration-300">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${testimonial.embedId}`}
                    title="Client Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <div className="video-content order-2 px-4 py-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md mt-[-20px] z-10 mx-0 w-full">
                <div className="mb-4 bg-blue-50 text-blue-700 py-2 px-4 rounded-md font-medium">
                  <span className="block">Results: {testimonial.results}</span>
                </div>

                <div className="relative mb-6">
                  <svg
                    className="absolute -top-8 -left-0 h-16 w-16 text-blue-500 opacity-30"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8v6H4c0 4 1 8 8 8v-2c-5 0-6-3-6-6h6V8h-2zm12 0v6h-6c0 4 1 8 8 8v-2c-5 0-6-3-6-6h6V8h-2z" />
                  </svg>
                  <p className="text-lg xl:text-xl text-gray-700 italic leading-relaxed text-left w-full">
                    {testimonial.quote}
                  </p>
                </div>

                <div className="flex items-center mt-8 border-t border-gray-100 pt-4">
                  <div className="relative h-14 w-14 mr-4 rounded-full overflow-hidden shadow-md border-2 border-white ">
                    {testimonial.profileImage && (
                      <Image
                        src={testimonial.profileImage}
                        alt={`${testimonial.author} profile`}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="mt-16 sm:mt-24 pt-12 border-t border-gray-100">
        <h3 className="text-2xl md:text-3xl font-serif sm:mb-12 mb-11">
          More Client <span className="text-blue-600">Feedback</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {testimonials
            .filter((t) => t.type === "text")
            .map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 relative hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4 bg-blue-50 text-blue-700 py-2 px-4 rounded-md font-medium text-sm">
                  <span>Results: {testimonial.results}</span>
                </div>

                <div className="flex items-center mb-6 pb-4 border-b border-gray-100">
                  <div className="relative h-12 w-12 mr-4 rounded-full overflow-hidden shadow-md border-2 border-white bg-blue-50 flex items-center justify-center">
                    {testimonial.profileImage ? (
                      <Image
                        src={testimonial.profileImage}
                        alt={`${testimonial.author} profile`}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}{" "}
                      {testimonial.role && testimonial.company && ","}{" "}
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-left w-full mb-4">
                  {testimonial.quote}
                </p>

                {testimonial.cta && (
                  <div className="mt-6 mb-2">
                    <a
                      href={testimonial.cta.link}
                      className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md group"
                    >
                      {testimonial.cta.text}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialContent;
