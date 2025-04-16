"use client";
import Image from "next/image";
import { useState } from "react";

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
  return (
    <div
      key={project.id}
      className="relative"
      onMouseEnter={() => onMouseEnter(project.id)}
      onMouseLeave={() => onMouseLeave(null)}
    >
      <div
        className={`absolute ${
          index % 2 === 0 ? "right-0" : "-left-0"
        } top-0 select-none pointer-events-none hidden md:block`}
      >
        <span className="text-[10rem] font-light text-blue-600">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative`}
      >
        <div
          className={`md:col-span-7 ${
            index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
          }`}
        >
          <div className="relative">
            <div
              className={`absolute ${
                index % 2 === 0 ? "right-8" : "left-8"
              } -top-8 w-1/2 h-1/2 border-2 border-blue-500/20 -z-10`}
            ></div>

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
        </div>

        <div
          className={`md:col-span-5 ${
            index % 2 === 0
              ? "md:col-start-7 md:-ml-12"
              : "md:col-start-1 md:-mr-12"
          } bg-white p-8 relative z-10 shadow-sm`}
        >
          <div className="space-y-5">
            <h3
              className="text-2xl font-medium text-gray-800 relative inline-block"
            >
              {project.title}
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform origin-left transition-transform duration-300 ${
                  isFocused ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </h3>

            <div
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
            </div>

            <p
              className="text-gray-600 text-sm leading-relaxed"
            >
              {project.description}
            </p>

            <a
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioContent() {
  const [focusedProject, setFocusedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Irani Chiya",
      description:
        "A brand-focused website for a traditional tea company that showcases their unique offerings and multiple branch locations. The site enhances their online presence while preserving their cultural heritage through modern design.",
      tags: ["Branding", "Web Design", "Frontend-heavy"],
      image: "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/anish's-portfolio/hfzlg4naommrv8dbxhsz",
      website: "https://iranichiya.com",
    },
    {
      id: 2,
      title: "FitPal Fitness App",
      description:
        "An MVP fitness application that enables users to track and record their gym progress. Features intuitive workout logging, progress visualization, and personalized fitness journey tracking.",
      tags: ["Web App", "Full Stack", "MVP"],
      image: "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/anish's-portfolio/xzrdiarm5pub35gnvsou",
      website: "https://fitpal-ashen.vercel.app/",
    },
  ];

  return (
    <div className="py-20">
      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Portfolio
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          <span className="text-blue-600">Featured</span> Projects
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Digital solutions that have transformed businesses and elevated their
          online presence, focusing on exceptional user experience and strategic
          outcomes.
        </p>
      </div>

      <div className="space-y-32">
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
      </div>
    </div>
  );
}

export default PortfolioContent;
