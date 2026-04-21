"use client";

import { a } from "motion/react-client";


function ReactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <circle cx="12" cy="12" r="10" />
      <text x="7.5" y="16" fontSize="9" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="serif">N</text>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M6 10c.5-2 2-3 3.5-3S12 8.5 12 10c.5-2 2-3 3.5-3S18 8.5 18 10" strokeLinecap="round" />
      <path d="M6 15c.5-2 2-3 3.5-3S12 13.5 12 15c.5-2 2-3 3.5-3S18 13.5 18 15" strokeLinecap="round" />
    </svg>
  );
}

function FramerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M5 3h14v6H5zM5 9h7l7 6H5zM5 15h7v6z" strokeLinejoin="round" />
    </svg>
  );
}

function VercelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M12 3L22 21H2L12 3z" strokeLinejoin="round" />
    </svg>
  );
}

function TSIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <text x="6" y="16" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none" fontFamily="monospace">TS</text>
    </svg>
  );
}

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-4 h-4">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" strokeLinecap="round" />
    </svg>
  );
}

const OSS_PROJECTS = [
  { id: 1, name: "React",         link: "#", Icon: ReactIcon  },
  { id: 2, name: "Next.js",       link: "#", Icon: NextIcon   },
  { id: 3, name: "Tailwind CSS",  link: "#", Icon: TailwindIcon },
  { id: 4, name: "Framer Motion", link: "#", Icon: FramerIcon },
  { id: 5, name: "Vercel",        link: "#", Icon: VercelIcon },
  { id: 6, name: "TypeScript",    link: "#", Icon: TSIcon     },
];

export default function OpensourceAndFooter() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12">

      {/* ── Opensource Section ── */}
      <section className="py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-black text-black">Opensource</h2>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors"
          >
            <GithubIcon />
            Follow on GitHub
          </a>
        </div>

        <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-lg mb-8">
          This portfolio is built with modern, open-source technologies to ensure optimal
          performance, accessibility, and a premium user experience. I strongly believe in giving back
          to the community that builds the tools I use daily.
        </p>

        {/* OSS Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {OSS_PROJECTS.map(({ id, name, link, Icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-gray-200 rounded-2xl px-4 py-3.5 bg-white hover:border-gray-400 hover:shadow-sm transition-all duration-200 group"
            >
              <span className="text-gray-400 group-hover:text-black transition-colors">
                <Icon />
              </span>
              <div>
                <p className="text-sm font-semibold text-black">{name}</p>
                <p className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                  View project →
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            © 2026 Uday Ahire. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {[
            { href: "#", Icon: GithubIcon    },
            { href: "#", Icon: LinkedInIcon  },
            { href: "#", Icon: InstagramIcon },
            { href: "#", Icon: MailIcon      },
          ].map(({ href, Icon }, i) => (
            <a
              key={i}
              href={href}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-gray-400 hover:text-black transition-all"
            >
              <Icon />
            </a>
          ))}
        </div>
      </footer>

      {/* ── System Status ── */}
      <div className="flex justify-center py-6">
        <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
            System Operational
          </span>
        </div>
      </div>
      </div>
  );
}