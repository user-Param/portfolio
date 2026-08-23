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
  const awards = [
    {
      image: "image",
      name: "funded next",
      description: "jscjsdcsdcjdsjcsdjcdjscjsdnc",
    },
    {
      image: "image",
      name: "funded n02",
      description: "jscjsdcsdcjdsjcsdjcdjscjsdnc",
    },
    {
      image: "image",
      name: "funded nsdsd",
      description: "jscjsdcsdcjdsjcsdjcdjscjsdnc",
    },
  ];

  return (
    <section className="w-full border h-screen">
      <div className="relative w-full h-full flex justify-center">

        {/* Background */}
        <img
          src="/assets/certification-bg.jpg"
          alt=""
          className="absolute z-0 w-full h-full object-cover"
        />

        {/* Awards ABOVE image */}
        <span className="absolute  z-10 flex justify-center gap-6 border mt-104">
          {awards.map((award) => (
            <span
              key={award.name}
              className="w-90 h-[50vh] p-6 bg-red-500"
            >
              <div className="h-[160] border">{award.image}</div>
              <h2>{award.name}</h2>
              <p>{award.description}</p>
            </span>
          ))}
        </span>

      </div>
    </section>
  );
}