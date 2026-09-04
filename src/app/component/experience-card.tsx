export default function Experiences(){
    const experiences = [
  {
    role: "Full-stack Software Engineer Apprenticeship",
    company: "100xDevs",
    location: "Delhi NCR, India (Remote)",
    period: "Nov 2025 – Present",
    type: "fulltime",
    bullets: [
      "Led end-to-end design and development of a high-performance algorithmic trading platform built on a low-latency C++ core with a modern React-based terminal.",
      "Engineered a distributed, microservices-style architecture with WebSocket-based real-time data streaming, a multi-threaded datafeed system, and a high-speed execution engine with integrated risk management.",
      "Implemented hybrid execution modes for live trading and historical backtesting, along with an embedded browser-based IDE for strategy development, real-time visualization, and seamless strategy deployment.",
      "Architected a simulated crypto CFD trading engine (BTC, ETH, SOL) as an event-driven microservice system wired through Redis Streams and QuestDB snapshots, so trades replay deterministically and positions survive restarts.",
      "Built a real-time portfolio tracker using TypeScript with Redis caching, precomputed PnL metrics, and load-balanced WebSocket pipelines for low-latency updates.",
    ],
    tags: ["C++", "React", "WebSockets", "Redis", "QuestDB", "TypeScript"],
  },
  {
    role: "Full-stack Software Engineer Intern",
    company: "Peples Brands Lab",
    location: "Delhi NCR, India (Remote)",
    period: "Jun 2025 – Nov 2025",
    type: "internship",
    bullets: [
      "Drove an ecommerce SaaS from idea to MVP in ~3 months by designing a scalable backend + frontend architecture, implementing feed/cart/order/payment flows.",
      "Built a reusable Next.js + Tailwind component library that replaced spreadsheet workflows and cut new dashboard view build time from days to hours.",
      "Partnered with founders from zero to launch to ship the first production website, implementing a modular component system (hero, feature rows, FAQ, CTA) and wiring in analytics and env-based config.",
      "Enabled the team to roll out, A/B test, and rollback new pages safely within days instead of weeks.",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "SaaS", "A/B Testing"],
  },
  {
    role: "Propritary Trader",
    company: "Funded Next",
    location: "Delhi NCR, India (Remote)",
    period: "Jun 2025 – Nov 2025",
    type: "internship",
    bullets: [
      "Drove an ecommerce SaaS from idea to MVP in ~3 months by designing a scalable backend + frontend architecture, implementing feed/cart/order/payment flows.",
      "Built a reusable Next.js + Tailwind component library that replaced spreadsheet workflows and cut new dashboard view build time from days to hours.",
      "Partnered with founders from zero to launch to ship the first production website, implementing a modular component system (hero, feature rows, FAQ, CTA) and wiring in analytics and env-based config.",
      "Enabled the team to roll out, A/B test, and rollback new pages safely within days instead of weeks.",
    ],
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "SaaS", "A/B Testing"],
  },
];

    return(
        <span className="h-10 w-20 border">
            {experiences.map((experience)=> (
                <div className="h-[18vh] w-[20%] border mt-10 my-4 ml-60 bg-white">
                    <span key={experience.role}>{experience.role}</span>
                </div>
                
            ))}
        </span>
    )
}