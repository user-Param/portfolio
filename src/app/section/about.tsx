import React from "react";

const skills = [
  {
    name: "C/C++",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c2.84 0 5.33-1.48 6.77-3.72" strokeLinecap="round" />
        <text x="6.5" y="15.5" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="monospace">C+</text>
      </svg>
    ),
  },
  {
  name: "Rust",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 md:w-7 md:h-7">
      {/* 8-tooth gear */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <rect
          key={angle}
          x="11.1"
          y="1.5"
          width="1.8"
          height="3"
          rx="0.5"
          transform={`rotate(${angle} 12 12)`}
        />
      ))}
      {/* Gear body */}
      <circle cx="12" cy="12" r="7.8" />
      {/* Inner cutout */}
      <circle cx="12" cy="12" r="5.5" fill="white" />
      {/* R letter */}
      <text
        x="12"
        y="16"
        fontSize="9"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fill="currentColor"
      >
        R
      </text>
    </svg>
  ),
},
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <text x="5.5" y="16" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
  name: "Python",
  icon: (
    <svg
      viewBox="0 0 256 255"
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 md:w-7 md:h-7"
    >
      <path
        fill="#3776AB"
        d="M126.916 0C92.728 0 93.663 14.834 93.663 14.834l.04 15.36h33.86v4.61H80.244s-22.73-2.58-22.73 33.24c0 35.82 19.84 34.56 19.84 34.56h11.84v-16.64s-.64-19.84 19.52-19.84h33.92s18.88.32 18.88-18.24V18.56S164.1 0 126.916 0z"
      />
      <path
        fill="#FFD43B"
        d="M129.084 255c34.188 0 33.253-14.834 33.253-14.834l-.04-15.36h-33.86v-4.61h47.32s22.73 2.58 22.73-33.24c0-35.82-19.84-34.56-19.84-34.56h-11.84v16.64s.64 19.84-19.52 19.84h-33.92s-18.88-.32-18.88 18.24v29.36S91.9 255 129.084 255z"
      />
    </svg>
  ),
},
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <circle cx="12" cy="12" r="10" />
        <text x="7.5" y="16" fontSize="9" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="serif">N</text>
      </svg>
    ),
  },
  {
    name: "Postgres",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <ellipse cx="12" cy="7" rx="7" ry="3" />
        <path d="M5 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7" strokeLinecap="round" />
        <path d="M5 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
  name: "Redis",
  icon: (
    <svg
      viewBox="0 0 256 256"
      className="w-6 h-6 md:w-7 md:h-7"
    >
      <path
        fill="#000000"
        d="M128 20L20 70l108 50 108-50-108-50zm0 70L20 140l108 50 108-50-108-50zm0 70L20 210l108 50 108-50-108-50z"
      />
    </svg>
  ),
},
  {
    name: "Kafka",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <circle cx="12" cy="4" r="2" />
        <circle cx="4" cy="14" r="2" />
        <circle cx="20" cy="14" r="2" />
        <circle cx="12" cy="20" r="1.5" fill="currentColor" stroke="none" />
        <path d="M12 6v4M12 10l-6.5 2.5M12 10l6.5 2.5M6 16l5 3M18 16l-5 3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <rect x="2" y="10" width="4" height="3" rx="0.5" />
        <rect x="7" y="10" width="4" height="3" rx="0.5" />
        <rect x="12" y="10" width="4" height="3" rx="0.5" />
        <rect x="7" y="6.5" width="4" height="3" rx="0.5" />
        <rect x="12" y="6.5" width="4" height="3" rx="0.5" />
        <path d="M2 14.5c1 1.5 3 2 5 1.5h11c2 0 4-1 4-3 0 0-1-1-3-1h-1c0-2-1.5-3-3-3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8.5c0-1-0.5-2-1.5-2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="3" x2="12" y2="10" strokeLinecap="round" />
        <line x1="12" y1="14" x2="12" y2="21" strokeLinecap="round" />
        <line x1="3" y1="12" x2="10" y2="12" strokeLinecap="round" />
        <line x1="14" y1="12" x2="21" y2="12" strokeLinecap="round" />
        <line x1="5.6" y1="5.6" x2="10" y2="10" strokeLinecap="round" />
        <line x1="14" y1="14" x2="18.4" y2="18.4" strokeLinecap="round" />
        <line x1="18.4" y1="5.6" x2="14" y2="10" strokeLinecap="round" />
        <line x1="10" y1="14" x2="5.6" y2="18.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "System Design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6 md:w-7 md:h-7">
        <rect x="2" y="3" width="6" height="4" rx="1" />
        <rect x="16" y="3" width="6" height="4" rx="1" />
        <rect x="9" y="17" width="6" height="4" rx="1" />
        <path d="M5 7v4h14V7" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="11" x2="12" y2="17" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section className="flex items-center bg-white px-6 md:px-12 py-4">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">

        {/* Left: Text */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="flex items-center gap-3 mb-6 text-xs md:text-sm tracking-[0.2em] text-gray-400 font-bold uppercase">
            <span className="w-8 h-px bg-black inline-block" />
            <span>01 / About</span>
          </div>

          <h2 className="text-xl sm:text-xl md:text-5xl font-black leading-tight text-black mb-6">
            Engineering with
            <br className="hidden sm:block" />
            Form &amp; Function.
          </h2>

          <div className="space-y-4">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              I build scalable software solutions designed for performance, reliability, and efficiency. My work focuses on developing high performance systems that can handle complex workflows, process large volumes of data, and execute with precision.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              

I enjoy working across the stack building robust backend systems, intuitive user interfaces, and seamless integrations that deliver reliable and efficient experiences. My approach to engineering is shaped by working in demanding environments, where system behavior, performance, and stability matter as much as clean code.

I’m particularly interested in building systems that go beyond static applications software that is responsive, efficient, and capable of handling real-world complexity at scale.
            </p>
            
            
            
          </div>
        </div>

        {/* Right: Skills Grid */}
        <div className="flex-1 w-full max-w-md">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 py-5 md:py-6 px-3 rounded-2xl border border-gray-100 hover:border-black hover:shadow-sm transition-all duration-300 cursor-default bg-gray-50/50"
              >
                <span className="text-black">{skill.icon}</span>
                <span className="text-[10px] md:text-xs text-gray-600 font-bold text-center leading-tight">
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