

export default function IntroCard() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="flex w-full max-w-[80%] bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200">

        {/* Left: Avatar */}
        <div className="flex items-center justify-center w-[45%] bg-white p-10">
          <div className="relative w-56 h-56 rounded-full overflow-hidden shadow-md">
            
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col flex-1 border-l border-gray-200">

          {/* PORTFOLIO label */}
          <div className="px-8 py-5 border-b border-gray-200">
            <span className="text-xs tracking-[0.25em] text-gray-400 font-medium uppercase">
              Portfolio
            </span>
          </div>

          {/* Name */}
          <div className="px-8 py-6 border-b border-gray-200 flex items-center gap-3">
            <h1 className="text-5xl font-black text-black tracking-tight">
              Paramjeet Singh
            </h1>
            {/* Verified Badge */}
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth={2.5}>
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {/* Speaker Icon */}
            <button className="text-gray-300 hover:text-gray-500 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
                <path d="M11 5L6 9H3v6h3l5 4V5z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Role + Description */}
          <div className="px-8 py-6 border-b border-gray-200 flex-1">
            <p className="text-base font-bold text-black mb-2">Full-stack developer</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Bridging the gap between robust engineering and pixel-perfect
              design. Building clean, accessible web interfaces with React &amp;
              Next.js.
            </p>
          </div>

          {/* Actions */}
          <div className="px-8 py-6 flex items-center gap-3">
            {/* Contact Me Button */}
            <button className="flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-gray-800 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-4 h-4">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" strokeLinecap="round" />
              </svg>
              Contact Me
            </button>

            {/* GitHub */}
            <a
              href="#"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black transition-all"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}