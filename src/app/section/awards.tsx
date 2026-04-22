const CERTS = [
  {
    id: 1,
    abbr: "FundedNext",
    verified: true,
    title: "FundedNext Funded Trader",
    issuer: "FundedNext",
    issued: "Issued Apr 2025",
    verify: "#",
  }
];

function ExternalLinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-3.5 h-3.5"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="15 3 21 3 21 9" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="10" y1="14" x2="21" y2="3" strokeLinecap="round" />
    </svg>
  );
}

export default function CertificationsSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-8 h-px bg-black inline-block" />
          <p className="text-xs tracking-widest text-gray-400 font-medium uppercase">
            04. / Accolades
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-black">Certifications &amp; Awards</h2>
        <p className="text-sm md:text-base text-gray-400 mt-2">
          Validating expertise through industry-recognized certifications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CERTS.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col border border-gray-200 rounded-2xl p-6 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            {/* Top row: abbr badge + VERIFIED */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md tracking-wide">
                {cert.abbr}
              </span>
              {cert.verified && (
                <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                  Verified
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-sm font-bold text-black leading-snug mb-2">
              {cert.title}
            </h3>

            {/* Issuer + Date */}
            <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
            <p className="text-xs font-mono text-gray-400 mb-6">{cert.issued}</p>

            {/* Divider + Verify link */}
            <div className="border-t border-gray-100 pt-4 mt-auto">
              <a
                href={cert.verify}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-black transition-colors"
              >
                Verify
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}