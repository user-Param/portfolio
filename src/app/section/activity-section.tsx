"use client";

// ── Work Experience Data ───────────────────────────────────────────────────
const EXPERIENCES = [
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
];

const PROJECTS = [
  {
    name: "Jinx – High Frequency Trading Platform",
    bullets: [
      "Built an ultra low-latency, event-driven HFT system in C++, leveraging Boost.Asio and Boost.Beast for efficient asynchronous socket I/O, enabling fine-grained data flow control and high-throughput stream processing.",
      "Implemented a replicated in-memory order book for fault tolerance and consistent state management, enabling seamless failover, and used a lock-free event queue to process market events with minimal contention.",
      "Consumed market events from a lock-free queue and applied trading strategies, with a modular design allowing future integration with hardware acceleration (e.g., FPGA) and routing.",
      "Only risk-validated orders using pre-trade checks (position sizing, margin, leverage limits, stop-loss, trading session) and microstructure models (order book imbalance, microprice) to avoid adverse trades in fast markets.",
    ],
    tags: ["C++", "Boost.Asio", "Boost.Beast", "HFT", "Order Book"],
  },
  {
    name: "Blink – Backtesting Engine",
    bullets: [
      "Built a low-latency, event-driven quantitative research and backtesting platform in C++, enabling users to develop strategies, run simulations on historical datasets, and execute in live markets with real capital.",
      "Utilized Postgres for high-performance time-series market data, providing ultra-low latency ingestion, high throughput, and efficient analytical queries.",
      "Leveraged Boost.Asio and Boost.Beast for fine-grained control over the networking layer, enabling efficient asynchronous I/O, high-throughput data streams, and low-latency system performance.",
      "Built a React + TypeScript frontend providing an interactive environment for strategy development, visualization, and real-time monitoring.",
    ],
    tags: ["C++", "PostgreSQL", "React", "TypeScript", "Quant Research"],
  },
  {
    name: "Merchant Dashboard",
    bullets: [
      "Built a scalable, real-time merchant analytics platform processing ~10K events per minute, designed with a modular monolith architecture that cleanly separates ingestion, processing, and serving layers.",
      "Backend is stateless NestJS, deployed behind an Nginx load balancer for horizontal scaling across multiple instances.",
      "Kafka decouples high-volume event ingestion from processing, ensuring resilience to traffic spikes and preventing backpressure on the API.",
      "A dedicated precompute worker consumes events asynchronously, maintains aggregated metrics, and stores them for O(1) dashboard read queries—delivering sub-500ms analytics responses at scale.",
    ],
    tags: ["NestJS", "Kafka", "PostgreSQL", "Redis", "Nginx"],
  },
];

const TRADING_SKILLS = {
  exchanges: ["CoinDCX", "Zerodha", "Groww", "Upstox", "Binance", "Bybit", "Delta Exchange", "Exness"],
  proprietary: ["FundedNext", "Blueberry Funded", "Klein Funded", "Blue Guardian Funded"],
  tools: ["TradingView", "MetaTrader 5", "Jupyter Notebook", "QuantConnect", "MetaTrader 4"],
  indicators: ["EMA", "RSI", "Bollinger Bands", "MACD", "SuperTrend", "Footprints", "Orderbook", "Fibonacci", "Smart Money Concept", "Breakouts", "Volume", "Trading Sessions"],
};

// ── Helpers ────────────────────────────────────────────────────────────────
function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="12" />
      <path d="M2 12h20" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function WorkExperienceSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-14">

      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <p className="text-xs tracking-widest text-gray-400 font-medium uppercase mb-1">
            Career
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-black">Work Experience</h2>
          <p className="text-sm md:text-base text-gray-400 mt-0.5">
            Building systems at the intersection of performance and scale.
          </p>
        </div>
        <div className="flex gap-8 md:text-right">
          <div>
            <p className="text-2xl md:text-3xl font-black text-black">~1 yr</p>
            <p className="text-xs tracking-widest text-gray-400 uppercase">Experience</p>
          </div>
        </div>
      </div>

      {/* ── Work Experience Cards ── */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-2">
          <BriefcaseIcon className="w-4 h-4 text-gray-400" />
          <p className="text-sm font-semibold text-black">Positions</p>
        </div>

        {EXPERIENCES.map((exp, i) => (
          <div key={i} className="border border-gray-200 rounded-2xl p-6 bg-white space-y-4">
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-black text-black">{exp.role}</h3>
                  {exp.type === "internship" && (
                    <span className="text-xs  text-gray-500 px-2 py-0.5 rounded-md font-mono">
                      Internship
                    </span>
                  )}
                  {exp.type === "fulltime" && (
                    <span className="text-xs text-white px-2 py-0.5 rounded-md font-mono">
                      Full-time
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-0.5">
                  {exp.company} · {exp.location}
                </p>
              </div>
              <span className="text-xs font-mono text-gray-400 whitespace-nowrap shrink-0 mt-1">
                {exp.period}
              </span>
            </div>

            {/* Bullets */}
            <ul className="space-y-2">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex gap-2.5 text-xs text-gray-600 leading-relaxed">
                  <CheckIcon className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded-md font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Trading & Finance ── */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <TrendingIcon className="w-4 h-4 text-gray-400" />
          <p className="text-sm font-semibold text-black">Trading & Finance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Exchanges & Brokers */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-3">
            <p className="text-xs tracking-widest text-gray-400 uppercase">Exchanges & Brokers</p>
            <div className="flex flex-wrap gap-1.5">
              {TRADING_SKILLS.exchanges.map((e) => (
                <span key={e} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md font-mono">
                  {e}
                </span>
              ))}
            </div>
          </div>

          {/* Proprietary Trading */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-3">
            <p className="text-xs tracking-widest text-gray-400 uppercase">Proprietary Trading</p>
            <div className="flex flex-wrap gap-1.5">
              {TRADING_SKILLS.proprietary.map((e) => (
                <span key={e} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md font-mono">
                  {e}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Funded accounts across global prop firms
            </p>
          </div>

          {/* Research Tools */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-3">
            <p className="text-xs tracking-widest text-gray-400 uppercase">Research Tools</p>
            <div className="flex flex-wrap gap-1.5">
              {TRADING_SKILLS.tools.map((e) => (
                <span key={e} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md font-mono">
                  {e}
                </span>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="border border-gray-200 rounded-2xl p-5 space-y-3">
            <p className="text-xs tracking-widest text-gray-400 uppercase">Indicators & Concepts</p>
            <div className="flex flex-wrap gap-1.5">
              {TRADING_SKILLS.indicators.map((e) => (
                <span key={e} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2 py-0.5 rounded-md font-mono">
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}