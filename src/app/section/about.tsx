import React from "react";

const skills = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <text x="7" y="16" fontSize="9" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="serif">N</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <text x="6" y="16" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M6 10c.5-2 2-3 3.5-3S12 8.5 12 10c.5-2 2-3 3.5-3S18 8.5 18 10" strokeLinecap="round" />
        <path d="M6 15c.5-2 2-3 3.5-3S12 13.5 12 15c.5-2 2-3 3.5-3S18 13.5 18 15" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M21 8c0 2.5-4 4.5-9 4.5S3 10.5 3 8s4-5 9-5 9 2.5 9 5z" />
        <path d="M3 8v8c0 2.5 4 4.5 9 4.5s9-2 9-4.5V8" />
        <path d="M3 12c0 2.5 4 4.5 9 4.5s9-2 9-4.5" />
      </svg>
    ),
  },
  {
    name: "UI/UX Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <rect x="7" y="7" width="4" height="4" rx="0.5" />
        <rect x="7" y="13" width="10" height="1.5" rx="0.5" />
        <rect x="7" y="16" width="7" height="1.5" rx="0.5" />
      </svg>
    ),
  },
  {
    name: "Mobile First",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Git & CI/CD",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M8 6h4a4 4 0 0 1 4 4v4" strokeLinecap="round" />
        <path d="M6 8v8" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center px-16 py-24 bg-white">
      <div className="max-w-[80%] mx-auto w-full flex flex-col md:flex-row gap-16 items-center justify-between">

        {/* Left: Text */}
        <div className="flex-1 max-w-lg">
          <div className="flex items-center gap-3 mb-6 text-sm tracking-widest text-gray-500 font-medium uppercase">
            <span className="w-8 h-px bg-black inline-block" />
            <span>01.</span>
            <span>/</span>
            <span>About</span>
          </div>

          <h2 className="text-5xl font-black leading-tight text-black mb-6">
            Engineering with
            <br />
            Form &amp; Function.
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-5">
            I am a Design Engineer who bridges the gap between meticulous UI/UX
            design and robust systems. I build applications that not only look
            exceptional but perform flawlessly.
          </p>

          <p className="text-gray-500 text-base leading-relaxed">
            With a deep understanding of React, Next.js, and modern CSS
            architecture, I focus on crafting scalable, accessible, and
            beautifully animated web interfaces.
          </p>
        </div>

        {/* Right: Skills Grid */}
        <div className="flex-1 max-w-md">
          <div className="grid grid-cols-3 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 py-6 px-4 rounded-2xl border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all duration-200 cursor-default"
              >
                <span className="text-black">{skill.icon}</span>
                <span className="text-xs text-gray-700 font-medium text-center leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}