"use client";

import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    category: "Fullstack",
    featured: true,
    title: "Blink - Backtesting Engine",
    description:
      "Blink is a high-performance backtesting engine designed to simulate and evaluate trading strategies with speed and accuracy, enabling efficient analysis and optimization before deployment",
    tags: ["C++", "React", "Typescript", "Python"],
    source: "https://github.com/user-Param/Blink",
  },
  {
    id: 2,
    category: "Fullstack",
    featured: true,
    title: "Jinx - High Frequency Trading Platform",
    description:
      "Jinx is a high-frequency trading (HFT) bot designed for ultra-fast execution, processing market data and executing trades with minimal latency to capture micro-level opportunities in fast-moving markets.",
    tags: ["C++", "Next.js"],
    source: "https://github.com/user-Param/Jinx",
  },
  {
    id: 3,
    category: "Fullstack",
    featured: false,
    title: "7x - Solana Based Crypto Tumbler",
    description:
      "7x is a crypto privacy tool focused on secure and compliant transaction handling while protecting user confidentiality.",
    tags: ["Next.js", "Rust"],
    source: "#",
  },
  {
    id: 4,
    category: "Backend",
    featured: true,
    title: "Ava - Market Making Bot",
    description:
      "Ava is an arbitrage trading bot designed to identify price inefficiencies across multiple markets and execute trades efficiently, enabling consistent capture of cross-platform opportunities.",
    tags: ["C++", "Next", "CMake"],
    source: "https://github.com/user-Param/Market-Making-Bot",
  },
  {
    id: 5,
    category: "Fullstack",
    featured: false,
    title: "Merchant - Sales Dashboard",
    description:
      "Merchant is a scalable analytics platform that processes high-volume data using Kafka, PostgreSQL, and Redis to deliver fast, real-time insights.",
    tags: ["Next.js", "Nest.js", "Redis", "Postgres"],
    source: "https://github.com/user-Param/Merchant-",
  },
  {
    id: 6,
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
                  ? "bg-white text-gray shadow-sm ring-1 ring-black/5"
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
            className="flex flex-col border border-gray-100 rounded-3xl p-6 bg-white hover:border-black/10 hover:shadow-lg transition-all duration-300 group"
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
            {/* <div className="border border-black/10 rounded-xl h-[150px] w-full">
              demo video
            </div> */}

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