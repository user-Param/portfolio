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
    <section className="w-full border h-[75vh]">
      <div className="relative w-full h-full flex justify-center">

        {/* Background */}
        <img
          src="/assets/certification-bg.jpg"
          alt=""
          className="absolute z-0 w-full h-full object-cover"
        />


        <div className=" p-6 h-[30vh] w-full z-20 flex justify-center gap-4 mt-10">
          <p className="text-black">The filmmakers behind “Spider-Man: <br />Across the Spider-Verse” pushed the <br /> limits of what's possible in <br /> animation to bring you the hit film <br /> you love. Watch these clips to learn <br /> exclusive details about your favorite <br /> scenes, and how to harness that <br /> focus and drive for your own <br /> projects.</p>
          <img src="/assets/watchmore.png" className="h-full relative " />
        </div>
        

        {/* Awards ABOVE image */}
        <span className="absolute  mt-90 z-10 flex justify-center gap-8 border">
          {awards.map((award, index) => (
            <span
              key={award.name}
              className={`w-70 h-[33vh] ${
      index === 1 ? "bg-blue-500" : "bg-red-500"
    }`}
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