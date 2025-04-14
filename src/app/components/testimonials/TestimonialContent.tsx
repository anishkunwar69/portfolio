"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

function TestimonialContent() {
  // These are kept but commented as they might be used elsewhere in the component
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [videoTestimonialsRef, videoTestimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [textTestimonialsRef, textTestimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      type: "video",
      embedId: "V8ioj6B1ICY",
      quote:
        "Anish's web development skills completely transformed our online presence. The site he built for us is not only beautiful but incredibly functional. The results were beyond our expectations.",
      author: "Saroj Paudel",
      company: "Irani Chiya",
      role: "Founder & CEO",
      profileImage: "/t1.jpg",
    },
    {
      type: "video",
      embedId: "V8ioj6B1ICY",
      quote:
        "Working with Anish was a game-changer for our business. He understood exactly what we needed and delivered beyond our expectations. Our conversion rate increased by 35% within the first month.",
      author: "Rinchen Phuntsok",
      company: "FitPal",
      role: "Founder",
      profileImage: "/t1.jpg",
    },
    {
      type: "text",
      quote:
        "As a startup founder, I needed a website that would help establish credibility quickly. Anish delivered a stunning site that perfectly captured our brand's essence and has significantly increased our conversion rate by 45%. His attention to detail and focus on user experience made all the difference.",
      author: "Suman Singh Bhujel",
      company: "TechLift",
      role: "CTO",
      profileImage: "/t1.jpg",
    },
    {
      type: "text",
      quote:
        "Collaborating with Anish on our e-commerce platform was the best decision we made for our business. He not only created a visually stunning website but also implemented intuitive user flows that drastically improved our customer journey. Our sales have increased by 60% since launch.",
      author: "Maya Sharma",
      company: "ArtisanCraft",
      role: "Marketing Director",
      profileImage: "/t1.jpg",
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
          Client Success Stories
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          <span className="hidden sm:inline">
            Hear From <span className="text-blue-600">My Clients</span>
          </span>
          <span className="sm:hidden">
            My Client&apos;s <span className="text-blue-600">Stories</span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 max-w-2xl"
        >
          Real feedback from businesses I&apos;ve worked with to create impactful
          digital experiences.
        </motion.p>
      </motion.div>

      <motion.div
        ref={videoTestimonialsRef}
        initial={{ opacity: 0 }}
        animate={videoTestimonialsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sm:space-y-24 space-y-16"
      >
        {testimonials
          .filter((t) => t.type === "video")
          .map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={videoTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={
                  videoTestimonialsInView ? { scale: 1, opacity: 1 } : {}
                }
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.2,
                  ease: "easeOut",
                }}
                className="relative rounded-xl overflow-hidden shadow-xl lg:shadow-lg order-1 lg:order-1 transform lg:transform-none hover:translate-y-[-5px] transition-all duration-300"
              >
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${testimonial.embedId}`}
                    title="Client Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={videoTestimonialsInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.2,
                  ease: "easeOut",
                }}
                className="order-2 lg:order-2 px-4 py-6 lg:p-0 bg-gradient-to-br from-white to-gray-50 lg:bg-none rounded-xl lg:rounded-none shadow-md lg:shadow-none mt-[-20px] lg:mt-0 z-10 mx-0 w-full lg:mx-0"
              >
                <div className="relative mb-6">
                  <motion.svg
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={
                      videoTestimonialsInView ? { opacity: 0.2, scale: 1 } : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.2,
                      ease: "easeOut",
                    }}
                    className="absolute -top-8 -left-0 h-16 w-16 text-blue-500 opacity-30"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8v6H4c0 4 1 8 8 8v-2c-5 0-6-3-6-6h6V8h-2zm12 0v6h-6c0 4 1 8 8 8v-2c-5 0-6-3-6-6h6V8h-2z" />
                  </motion.svg>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={videoTestimonialsInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.2,
                      ease: "easeOut",
                    }}
                    className="text-lg xl:text-xl text-gray-700 italic leading-relaxed text-left w-full"
                  >
                    {testimonial.quote}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={videoTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.6 + index * 0.2,
                    ease: "easeOut",
                  }}
                  className="flex items-center mt-8 border-t border-gray-100 pt-4 lg:border-0 lg:pt-0"
                >
                  <div className="relative h-14 w-14 mr-4 rounded-full overflow-hidden shadow-md border-2 border-white">
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
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
      </motion.div>

      <motion.div
        ref={textTestimonialsRef}
        initial={{ opacity: 0 }}
        animate={textTestimonialsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-16 sm:mt-24 pt-12 border-t border-gray-100"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={textTestimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-serif sm:mb-12 mb-11"
        >
          More Client <span className="text-blue-600">Feedback</span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {testimonials
            .filter((t) => t.type === "text")
            .map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={textTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 relative hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={textTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.2,
                    ease: "easeOut",
                  }}
                  className="flex items-center mb-6 pb-4 border-b border-gray-100"
                >
                  <div className="relative h-12 w-12 mr-4 rounded-full overflow-hidden shadow-md border-2 border-white">
                    {testimonial.profileImage && (
                      <Image
                        src={testimonial.profileImage}
                        alt={`${testimonial.author} profile`}
                        width={48}
                        height={48}
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
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={textTestimonialsInView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.2,
                    ease: "easeOut",
                  }}
                  className="text-gray-700 leading-relaxed text-left w-full"
                >
                  {testimonial.quote}
                </motion.p>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
}

export default TestimonialContent;
