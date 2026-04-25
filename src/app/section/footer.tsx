"use client";

import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12.13 19.79 19.79 0 0 1 1.45 3.5 2 2 0 0 1 3.42 1.35h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function CheckCircleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

// ── Social Links Data ──────────────────────────────────────────────────────
const SOCIALS = [
  {
    label: "LinkedIn",
    handle: "paramjeet-singh-b566b036b",
    href: "https://www.linkedin.com/in/paramjeet-singh-b566b036b",
    Icon: LinkedInIcon,
    description: "Connect with me professionally",
  },
  {
    label: "GitHub",
    handle: "paramjeetsinghpawar",
    href: "https://github.com/user-param",
    Icon: GithubIcon,
    description: "Check out my open-source work",
  },
  {
    label: "Email",
    handle: "paramjeetsinghpawar25@gmail.com",
    href: "mailto:paramjeetsinghpawar25@gmail.com",
    Icon: MailIcon,
    description: "Drop me a direct email",
  },
  {
    label: "Phone",
    handle: "+91 7734050945",
    href: "tel:+917734050945",
    Icon: PhoneIcon,
    description: "Call or WhatsApp me",
  },
];

// ── Main Component ─────────────────────────────────────────────────────────
export default function ContactAndFooter() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setSending(true);
    // Simulate send — wire up your backend/email service here
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setMessage("");
      setName("");
    }, 1200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12">

      {/* ── Contact Section ── */}
      <section className="py-16 space-y-10">

        {/* Header */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 font-medium uppercase mb-1">
            Get in touch
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-black">Contact Me</h2>
          <p className="text-sm md:text-base text-gray-400 mt-0.5 max-w-md">
            Open to opportunities, collaborations, or just a quick chat about trading systems and distributed architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Left: Socials ── */}
          <div className="space-y-3">
            {SOCIALS.map(({ label, handle, href, Icon, description }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 border border-gray-200 rounded-2xl px-5 py-4 bg-white hover:border-gray-400 hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-gray-400 transition-all shrink-0">
                  <Icon />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-black">{label}</p>
                  </div>
                  <p className="text-xs text-gray-400 truncate">{handle}</p>
                </div>
                <span className="ml-auto text-xs text-gray-300 group-hover:text-gray-500 transition-colors shrink-0">
                  →
                </span>
              </a>
            ))}
          </div>

          </div>
          
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">
            Built with Next.js, Tailwind CSS &amp; Framer Motion.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            © 2026 Paramjeet Singh. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          {[
            { href: "https://github.com/user-param", Icon: GithubIcon },
            { href: "https://www.linkedin.com/in/paramjeet-singh-b566b036b", Icon: LinkedInIcon },
            { href: "mailto:paramjeetsinghpawar25@gmail.com", Icon: MailIcon },
          ].map(({ href, Icon }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
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