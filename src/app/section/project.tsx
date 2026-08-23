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
      "OpenLobster is an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools. Available in your terminal, IDE and browser.",
    tags: ["C++", "Next", "CMake"],
    source: "https://github.com/user-Param/Market-Making-Bot",
  },
  {
    id: 2,
    path: "assets/exchange.jpeg",
    category: "Fullstack",
    featured: true,
    title: "Exchange - Perpetual Futures Exchange",
    description:
    "A production-grade perpetual futures exchange with a high-performance C++ matching engine, TypeScript API, and real-time data pipelines.",
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
      "Blink is a high-performance backtesting engine designed to simulate and evaluate trading strategies with speed and accuracy, enabling efficient analysis and optimization before deployment",
    tags: ["C++", "React", "Typescript", "Python"],
    source: "https://github.com/user-Param/Blink",
  },
  {
    id: 4,
    path: "assets/claude.jpeg",
    category: "Fullstack",
    featured: false,
    title: "Merchant - Sales Dashboard",
    description:
      "Merchant is a scalable analytics platform that processes high-volume data using Kafka, PostgreSQL, and Redis to deliver fast, real-time insights.",
    tags: ["Next.js", "Nest.js", "Redis", "Postgres"],
    source: "https://github.com/user-Param/Merchant-",
  },
  {
    id: 5,
    path: "assets/claude.jpeg",
    category: "Fullstack",
    featured: false,
    title: "IssueX - Community Driven Inconvenience Resolving Platform",
    description:
      "IssueX is a collaborative platform for sharing problems and building better solutions together through community-driven contributions.",
    tags: ["React", "Typescript", "Postgres"],
    source: "https://github.com/user-Param/IssueX",
  },
  {
    id: 6,
    path: "assets/claude.jpeg",
    category: "Fullstack",
    featured: false,
    title: "Merchant - Sales Dashboard",
    description:
      "Merchant is a scalable analytics platform that processes high-volume data using Kafka, PostgreSQL, and Redis to deliver fast, real-time insights.",
    tags: ["Next.js", "Nest.js", "Redis", "Postgres"],
    source: "https://github.com/user-Param/Merchant-",
  },
  {
    id: 7,
    path: "assets/claude.jpeg",
    category: "Fullstack",
    featured: false,
    title: "IssueX - Community Driven Inconvenience Resolving Platform",
    description:
      "IssueX is a collaborative platform for sharing problems and building better solutions together through community-driven contributions.",
    tags: ["React", "Typescript", "Postgres"],
    source: "https://github.com/user-Param/IssueX",
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
    <section className="w-full relative flex justify-center items-center overflow-hidden py-2">
  <img
    src="/assets/section3-bg.jpg"
    className="absolute inset-0 h-full w-full object-cover"
    alt=""
  />

  <img
    src="/assets/section3-miles.gif"
    alt=""
    className="absolute z-10 inset-0 w-[39%] h-[40%] object-cover ml-25 mt-20"
  />

  {/* Content */}
  <span className="relative z-20 my-50 w-[90%] py-2">

    {/* Filter Tabs */}
    <span className="flex items-center justify-end gap-1 mb-12 mr-30">
      <div className="flex items-center gap-1 border border-gray-100 rounded-full p-1 bg-gray-50/50">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
              activeFilter === f
                ? "bg-white text-gray shadow-sm ring-1 ring-black/5"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </span>

    {/* Project Cards */}
    <span className="grid grid-cols-4 gap-2 border w-full px-6">
      {filtered.map((project) => (
        <div
          key={project.id}
          onMouseEnter={() => setExpandedCard(project.id)}
          onMouseLeave={() => setExpandedCard(null)}
          className={`flex flex-col w-[20rem] bg-white overflow-hidden transition-all duration-500 ${
    project.id === 4 ? "col-start-1" : ""
  } ${
    expandedCard === project.id
      ? "scale-[1.03] shadow-xl z-20"
      : "scale-100"
  }`}
        >
          {/* Video */}
          <div className="h-42 w-full border mb-4 p-2">
            <img src={project.path} alt="" />
          </div>

          {/* Project name */}
          <h3 className="text-lg font-bold text-black mb-3 leading-tight px-3">
            {project.title}
          </h3>

          {/* Hover content */}
          <div className="max-h-full overflow-hidden translate-y-3 transition-all duration-500 group-hover:max-h-60 group-hover:opacity-100 group-hover:translate-y-0">

            {/* Description */}
            <h3 className="text-sm text-gray-500 leading-relaxed mb-4 px-4">
              {project.description}
            </h3>

            

          </div>
        </div>
      ))}
    </span>

  </span>
</section>
  );
}