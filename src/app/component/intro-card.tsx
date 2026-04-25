import Image from "next/image";

export default function IntroCard() {
  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-0">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
        {/* Left: Avatar */}
        <div className="flex items-center justify-center w-full md:w-[40%] bg-white p-8 md:p-12">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-md bg-gray-50 border border-gray-100">
            <img
              src="/assets/me.png"
              alt="Avatar"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-300"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col flex-1 border-t md:border-t-0 md:border-l border-gray-100">
          {/* PORTFOLIO label */}
          <div className="px-6 md:px-8 py-4 border-b border-gray-100">
            <span className="text-[10px] md:text-xs tracking-[0.25em] text-gray-400 font-semibold uppercase">
              Portfolio
            </span>
          </div>

          {/* Name */}
          <div className="px-6 md:px-8 py-5 md:py-6 border-b border-gray-100 flex items-center flex-wrap gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
              Paramjeet Singh
            </h1>
            <div className="flex items-center gap-2">
              {/* Verified Badge */}
              <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-black text-white flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-3 h-3 md:w-4 md:h-4"
                  stroke="white"
                  strokeWidth={3}
                >
                  <path
                    d="M5 13l4 4L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {/* Speaker Icon */}
              <button className="text-gray-300 hover:text-gray-500 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    d="M11 5L6 9H3v6h3l5 4V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M15.5 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Role + Description */}
          <div className="px-6 md:px-8 py-5 md:py-6 border-b border-gray-100 flex-1">
            <p className="text-base md:text-lg font-bold text-black mb-2">
              Full-stack developer
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md">
              Developing scalable software solutions with a focus on performance, user experience, and reliability
            </p>
          </div>

          {/* Actions */}
          <div className="px-6 md:px-8 py-5 md:py-6 flex flex-wrap items-center gap-3">
            {/* Contact Me Button */}
            <a
              href="mailto:paramjeetsinghpawar25@gmail.com?subject=Lets%20work%20Together&body=Hi%20Param,"
              className="flex items-center gap-2 bg-black text-white text-xs md:text-sm font-semibold px-5 py-2.5 md:py-3 rounded-full hover:bg-gray-800 transition-colors shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth={2}
                className="w-3.5 h-3.5 md:w-4 md:h-4"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" strokeLinecap="round" />
              </svg>
              Contact Me
            </a>

            <div className="flex items-center gap-2 md:gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/user-Param"
                className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:bg-gray-50 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="w-4.5 h-4.5 md:w-5 md:h-5"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/paramjeet-singh-b566b036b"
                className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:bg-gray-50 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="w-4.5 h-4.5 md:w-5 md:h-5"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="/assets/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="View Resume"
                className="flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full border border-gray-200 text-gray-500 hover:border-black hover:bg-gray-50 transition-all"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  className="w-4.5 h-4.5 md:w-5 md:h-5"
                >
                  <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
                  <path d="M14 2v6h6" />
                  <line x1="8" y1="13" x2="16" y2="13" />
                  <line x1="8" y1="17" x2="16" y2="17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
