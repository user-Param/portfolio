"use client";
import Experiences from "../component/experience-card";
// ── Work Experience Data ───────────────────────────────────────────────────


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
    <section className="relative w-full h-[75vh] overflow-hidden">

  {/* Background */}
  <img
    src="/assets/pavitra-bg.jpg"
    className="absolute inset-0 z-0 w-full h-full object-cover"
    alt=""
  />

  {/* Pavitra above background */}
  <img
    src="/assets/pavitra.png"
    className="absolute z-10 h-[35rem] w-[35rem] ml-205"
    alt=""
  />
      

      <span className="relative ">
          <Experiences />
      </span>
      

    </section>
  );
}