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
    title: "Merchant - Sales Dashboard ",
    description:
      "A structured digital governance platform designed to streamline rural administration operations. Features centralized resident management, digital record keeping, and service delivery.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML"],
    source: "#",
  },
  {
    id: 6,
    category: "Fullstack",
    featured: false,
    title: "IssueX - Community Driven Inconvienence Resolving Platform",
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
    <section className="w-full max-w-[80%] mx-auto px-4 py-16">

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <p className="text-xs tracking-widest text-gray-400 font-medium uppercase mb-2">
            02. / Work
          </p>
          <h2 className="text-3xl font-black text-black">Selected Projects</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 border border-gray-200 rounded-full px-1.5 py-1.5 bg-white">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                activeFilter === f
                  ? "bg-white border border-gray-200 text-black shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-3 gap-4">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="flex flex-col border border-gray-200 rounded-2xl p-5 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            {/* Category + Featured badges */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs tracking-widest text-gray-400 uppercase font-medium">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-semibold bg-black text-white px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-base font-bold text-black mb-2 leading-snug">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1 line-clamp-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-gray-500 border border-gray-200 rounded-md px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 pt-4">
              <a
                href={project.source}
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-black transition-colors"
              >
                <SourceIcon />
                <span>Source</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}