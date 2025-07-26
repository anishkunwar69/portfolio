"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Define types
interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  website: string;
  businessResults: string;
  challenge: string;
  solution: string;
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
        } top-0 select-none pointer-events-none hidden xl:block`}
      >
        <span className="text-[10rem] font-light text-blue-600">
          {(index + 1).toString().padStart(2, "0")}
        </span>
      </div>

      <div
        className={`grid grid-cols-1 xl:grid-cols-12 gap-8 items-center relative`}
      >
        <div
          className={`xl:col-span-7 ${
            index % 2 === 0 ? "xl:col-start-1" : "xl:col-start-6"
          }`}
        >
          <div className="relative">
            <div
              className={`absolute ${
                index % 2 === 0 ? "right-8" : "left-8"
              } -top-8 w-1/2 h-1/2 border-2 border-blue-500/20 -z-10 hidden xl:block`}
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
          className={`xl:col-span-5 ${
            index % 2 === 0
              ? "xl:col-start-7 xl:-ml-12"
              : "xl:col-start-1 xl:-mr-12"
          } bg-white p-8 relative z-10 shadow-sm mt-6 xl:mt-0`}
        >
          <div className="sm:space-y-5 space-y-3">
            <div className="bg-blue-50 text-blue-700 py-2 px-3 rounded-md font-medium sm:text-sm text-xs inline-block w-full">
              <span>Results: {project.businessResults}</span>
            </div>
            
            <h3
              className="sm:text-2xl text-xl font-medium text-gray-800 relative inline-block group"
            >
              {project.title}
              <span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"
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
            
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-800">Challenge:</span>
                <p className="text-gray-600 sm:text-sm text-xs leading-relaxed">{project.challenge}</p>
              </div>
              
              <div>
                <span className="text-sm font-medium text-gray-800">Solution:</span>
                <p className="text-gray-600 sm:text-sm text-xs leading-relaxed">{project.solution}</p>
              </div>
            </div>

            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-sm"
            >
              <span className="border-b border-transparent hover:border-blue-600 pb-1">
                View Live Website
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
      title: "Irani Chiya - Brand Growth",
      description:
        "A brand-focused website for a traditional tea company that showcases their unique offerings and multiple branch locations. The site enhances their online presence while preserving their cultural heritage through modern design.",
      tags: ["E-commerce", "Brand Strategy", "Multi-location"],
      image: "https://res.cloudinary.com/dmq5tx0bd/image/upload/f_auto,q_auto/v1/anish's-portfolio/hfzlg4naommrv8dbxhsz",
      website: "https://iranichiya.com",
      businessResults: "40% increase in brand visibility + online traffic",
      challenge: "Irani Chiya needed to showcase multiple locations and product offerings while maintaining their cultural identity in a digital space.",
      solution: "We created a modern, user-friendly website with location finder, online ordering system, and brand storytelling that preserved their heritage while driving business growth."
    },
    {
      id: 2,
      title: "FamBook",
      description:
        "An MVP fitness application that enables users to track and record their gym progress. Features intuitive workout logging, progress visualization, and personalized fitness journey tracking.",
      tags: ["SaaS", "Full Stack App", "User Experience"],
      image: "https://res.cloudinary.com/dmq5tx0bd/image/upload/v1753503608/anish2_2x_eywzql.png",
      website: "https://www.fambook.pro/",
      businessResults: "Helped 40+ families to secure their memories",
      challenge: "Families are spread across the world, and staying privately connected is hard. No platform existed just for family bonding and preserving legacy.",
      solution: "We built Fambook, a private social app for families to share posts, photos, events, and family trees—preserving memories and staying connected across any distance."
    },
  ];

  return (
    <div className="py-20">
      <div className="mb-16 relative">
        <div className="absolute -left-4 top-0 w-1 h-24 bg-blue-500 hidden sm:block"></div>
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Success Stories
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          <span className="text-blue-600">Our</span> Works
        </h1>
        <p className="text-gray-700 max-w-2xl">
          See how we've transformed businesses through strategic digital solutions that deliver measurable results and ROI.
        </p>
      </div>

      <div className="sm:space-y-32 space-y-16">
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
      
      <div className="mt-20 border-t border-gray-100 pt-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif mb-6">
            Ready to be our next <span className="text-blue-600">success story</span>?
          </h3>
          <p className="text-gray-700 mb-10">
            Book a free discovery call to discuss your project needs and see how we can help you achieve similar results.
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              href="#contact"
              className="group relative px-8 py-3 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-blue-600 transition-all duration-300 ease-out group-hover:bg-opacity-80"></span>
              <span className="relative text-white">Schedule Your Free Strategy Call</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;
