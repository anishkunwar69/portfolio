"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

// Define types
interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  website: string;
}

interface ProjectItemProps {
  project: ProjectType;
  index: number;
  onMouseEnter: (id: number) => void;
  onMouseLeave: (id: null) => void;
  isFocused: boolean;
}

// Separate component for project items to safely use hooks
function ProjectItem({ project, index, onMouseEnter, onMouseLeave, isFocused }: ProjectItemProps) {
  const [projectRef, projectInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      key={project.id}
      ref={projectRef}
      initial={{ opacity: 0, y: 80 }}
      animate={projectInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
      onMouseEnter={() => onMouseEnter(project.id)}
      onMouseLeave={() => onMouseLeave(null)}
    >
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
        animate={projectInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className={`absolute ${
          index % 2 === 0 ? "right-0" : "-left-0"
        } top-0 select-none pointer-events-none hidden md:block`}
      >
        <span className="text-[10rem] font-light text-blue-600">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </motion.div>

      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative`}
      >
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          animate={projectInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className={`md:col-span-7 ${
            index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
          }`}
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={projectInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: "easeOut",
              }}
              className={`absolute ${
                index % 2 === 0 ? "right-8" : "left-8"
              } -top-8 w-1/2 h-1/2 border-2 border-blue-500/20 -z-10`}
            ></motion.div>

            <div className="relative overflow-hidden aspect-[16/10] cursor-pointer">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-blue-600 rounded-md inline-block hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
          animate={projectInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className={`md:col-span-5 ${
            index % 2 === 0
              ? "md:col-start-7 md:-ml-12"
              : "md:col-start-1 md:-mr-12"
          } bg-white p-8 relative z-10 shadow-sm`}
        >
          <div className="space-y-5">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={projectInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="text-2xl font-medium text-gray-800 relative inline-block"
            >
              {project.title}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform origin-left transition-transform duration-300 ${
                  isFocused ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={projectInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="flex flex-wrap gap-2"
            >
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-50 text-gray-600 px-2 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={projectInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.9,
                ease: "easeOut",
              }}
              className="text-gray-600 text-sm leading-relaxed"
            >
              {project.description}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={projectInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              <span className="border-b border-transparent hover:border-blue-600 pb-1">
                View Website
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PortfolioContent() {
  const [focusedProject, setFocusedProject] = useState<number | null>(null);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: "Irani Chiya",
      description:
        "A brand-focused website for a traditional tea company that showcases their unique offerings and multiple branch locations. The site enhances their online presence while preserving their cultural heritage through modern design.",
      tags: ["Branding", "Web Design", "Frontend-heavy"],
      image: "/dm222.png",
      website: "https://iranichiya.com",
    },
    {
      id: 2,
      title: "FitPal Fitness App",
      description:
        "An MVP fitness application that enables users to track and record their gym progress. Features intuitive workout logging, progress visualization, and personalized fitness journey tracking.",
      tags: ["Web App", "Full Stack", "MVP"],
      image: "/d3.png",
      website: "https://fitpal-ashen.vercel.app/",
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
          Portfolio
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-serif mb-6"
        >
          <span className="text-blue-600">Featured</span> Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-gray-700 max-w-2xl"
        >
          Digital solutions that have transformed businesses and elevated their
          online presence, focusing on exceptional user experience and strategic
          outcomes.
        </motion.p>
      </motion.div>

      <motion.div
        ref={projectsRef}
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="space-y-32"
      >
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            index={index}
            onMouseEnter={setFocusedProject}
            onMouseLeave={setFocusedProject}
            isFocused={focusedProject === project.id}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default PortfolioContent;
