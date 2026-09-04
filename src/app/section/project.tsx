"use client";

import path from "path";
import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    path: "assets/claude.jpeg",
    category: "Fullstack",
    featured: true,
    title: "OpenLobster - RAG coding Agent",
    description:
      "",
    tags: ["C++", "Next", "CMake"],
    source: "https://github.com/user-Param/Market-Making-Bot",
  },
  {
    id: 2,
    path: "assets/exchange.jpeg",
    category: "Fullstack",
    featured: true,
    title: "FTX - Perpetual Futures Exchange",
    description:
    "",
    tags: ["TypeScript", "C++", "Postgres", "Next.js", "Redis", "Kafka"],
    source: "https://github.com/user-Param/Perpetual-Futures-Exchange",
  },
  {
    id: 3,
    path: "assets/claude.jpeg",
    category: "Fullstack",
    featured: true,
    title: "Blink - Backtesting Engine",
    description:
      "",
    tags: ["C++", "React", "Typescript", "Python"],
    source: "https://github.com/user-Param/Blink",
  },
  {
    id: 4,
    path: "assets/claude.jpeg",
    category: "Fullstack",
    featured: false,
    title: "WorkPlace - Multi Agent orchestrartion",
    description:
      "",
    tags: ["Next.js", "Nest.js", "Redis", "Postgres"],
    source: "https://github.com/user-Param/Merchant-",
  },
];

const FILTERS = ["All", "Backend", "Fullstack"];

function SourceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-4 h-4"
    >
      <path
        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SelectedProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full h-[75vh] relative flex justify-center items-center overflow-hidden">
      <span className="h-full w-full bg-black/50 absolute"></span>
  <img
    src="/assets/section3-bg.jpg"
    className="absolute inset-0 h-[100%] w-full object-cover"
    alt=""
  />

  <img
    src="/assets/section3-miles.gif"
    alt=""
    className="absolute z-10 inset-0 w-[40%] h-[50%] object-cover ml-25 mt-10"
  />

  {/* Content */}
  <span className="relative z-20 my-30 w-[90%] py-10">


    {/* Project Cards */}
    <span className="grid grid-cols-3 w-[80%]">
      {filtered.map((project) => (
        <span
          key={project.id}
          onMouseEnter={() => setExpandedCard(project.id)}
          onMouseLeave={() => setExpandedCard(null)}
          className={`flex flex-col w-[18rem] bg-white overflow-hidden transition-all duration-500 rounded-sm border-white${
    project.id === 3 ? "col-start-1" : ""
  } ${
    expandedCard === project.id
      ? "scale-[1.03] shadow-xl z-20"
      : "scale-100"
  }`}
        >
          {/* Video */}
          <div className="h-42 w-full border mb-1 border-white">
            <img src={project.path} />
          </div>

          {/* Project name */}
          <div className="h-[57px]">
            <img src="/assets/projectstitle.png"  className="absolute h-[50px] w-full z-0"/>
            <h1 className="z-10">{project.title}</h1>
          </div>

          {/* Hover content */}
          <div className="max-h-full overflow-hidden translate-y-3 transition-all duration-500 group-hover:max-h-60 group-hover:opacity-100 group-hover:translate-y-0">

            

          </div>
        </span>
      ))}
    </span>

  </span>
</section>
  );
}