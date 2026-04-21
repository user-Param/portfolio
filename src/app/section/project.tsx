"use client";

import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    category: "Fullstack",
    featured: true,
    title: "Blink - Backtesting Engine",
    description:
      "Developed a Backtesting Engine with integrated live algo trading a unified platform for research backtest and deploy",
    tags: ["C++", "React", "Typescript", "Python"],
    source: "#",
  },
  {
    id: 2,
    category: "Fullstack",
    featured: true,
    title: "Jinx - High Frequency Trading Platform",
    description:
      "A modern, accessible component library providing robust UI elements and standardized design tokens. Built on Radix UI primitives with full keyboard navigation support.",
    tags: ["React", "TailwindCSS", "Framer Motion", "Radix UI"],
    source: "#",
  },
  {
    id: 3,
    category: "Fullstack",
    featured: true,
    title: "7x - Solana Based Crypto Tumbler",
    description:
      "A high-performance web application scaffolding emphasizing modern tooling and strict type safety. Features fast build times, pre-configured linting, and CI-ready setup.",
    tags: ["React", "TypeScript", "Vite", "ESLint"],
    source: "#",
  },
  {
    id: 4,
    category: "Backend",
    featured: true,
    title: "Ava - Market Making Bot",
    description:
      "A structured digital governance platform designed to streamline rural administration operations. Features centralized resident management, digital record keeping, and service delivery.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML"],
    source: "#",
  },
  {
    id: 5,
    category: "Fullstack",
    featured: false,
    title: "Merchant - Sales Dashboard",
    description:
      "A structured digital governance platform designed to streamline rural administration operations. Features centralized resident management, digital record keeping, and service delivery.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML"],
    source: "#",
  },
  {
    id: 6,
    category: "Fullstack",
    featured: false,
    title: "IssueX - Community Driven Inconvenience Resolving Platform",
    description:
      "A structured digital governance platform designed to streamline rural administration operations. Features centralized resident management, digital record keeping, and service delivery.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML"],
    source: "#",
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

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16">

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-xs tracking-[0.2em] text-gray-400 font-bold uppercase mb-3">
            02 / Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-black">Selected Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 border border-gray-100 rounded-full p-1 bg-gray-50/50">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 ${
                activeFilter === f
                  ? "bg-white text-black shadow-sm ring-1 ring-black/5"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-gray-100 rounded-3xl p-6 bg-white hover:border-black hover:shadow-lg transition-all duration-300 group"
          >
            {/* Category + Featured badges */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-[9px] font-black bg-black text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-black mb-3 leading-tight group-hover:text-black transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1 line-clamp-3 md:line-clamp-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] md:text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-1 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 pt-5">
              <a
                href={project.source}
                className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-black transition-colors group/link"
              >
                <SourceIcon />
                <span>View Source</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}