"use client";

// ── Stable seeded grid (module-level, never re-generates) ──────────────────
const GRID = (() => {
  let seed = 42;
  const rand = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  return Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => {
      const r = rand();
      return r < 0.25 ? 0 : r < 0.45 ? 1 : r < 0.65 ? 2 : r < 0.82 ? 3 : 4;
    })
  );
})();

// ── Constants ──────────────────────────────────────────────────────────────
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const ACTIVITY = [
  {
    repo: "udayahire2/udx-ui-kit",
    time: "2 hours ago",
    message: "Implemented new interactive components",
    tag: "feat/ui-components",
    type: "commit",
  },
  {
    repo: "udayahire2/nmu",
    time: "5 hours ago",
    message: "Fix: Resolved hydration mismatch in layout",
    tag: "#12",
    type: "pr",
  },
  {
    repo: "framer/motion",
    time: "1 day ago",
    message: "Starred framer/motion repository",
    tag: "starred",
    type: "star",
  },
  {
    repo: "udayahire2/gram-panchayat",
    time: "2 days ago",
    message: "Merged PR #8: Database configuration update",
    tag: "main",
    type: "merge",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────
function levelColor(level) {
  const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
  return colors[level] ?? colors[0];
}

function TypeIcon({ type }) {
  const cls = "w-4 h-4";
  if (type === "commit")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={cls}>
        <circle cx="12" cy="12" r="3" />
        <line x1="3" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="21" y2="12" />
      </svg>
    );
  if (type === "pr")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={cls}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <path d="M8 6h4a4 4 0 0 1 4 4v4" strokeLinecap="round" />
        <path d="M6 8v8" strokeLinecap="round" />
      </svg>
    );
  if (type === "star")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={cls}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  if (type === "merge")
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={cls}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M6 8v8" strokeLinecap="round" />
        <path d="M8 6h4a4 4 0 0 1 4 4" strokeLinecap="round" />
      </svg>
    );
  return null;
}

// ── Main Component ─────────────────────────────────────────────────────────
export default function CodingActivitySection() {
  const monthLabels = MONTHS.map((m, i) => ({
    label: m,
    x: Math.round(i * (52 / 12)),
  }));

  return (
    <section className="w-full max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div>
          <p className="text-xs tracking-widest text-gray-400 font-medium uppercase mb-1">
            Activity
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-black">Coding Activity</h2>
          <p className="text-sm md:text-base text-gray-400 mt-0.5">
            My contributions over the last year.
          </p>
        </div>
        <div className="flex gap-8 md:text-right">
          <div>
            <p className="text-2xl md:text-3xl font-black text-black">1,583</p>
            <p className="text-xs tracking-widest text-gray-400 uppercase">Total</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-black text-black">14</p>
            <p className="text-xs tracking-widest text-gray-400 uppercase">Streak</p>
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="border border-gray-200 rounded-2xl p-5 bg-white">
        <div className="overflow-x-auto">
          <svg
            width={GRID.length * 14}
            height={7 * 14 + 24}
            style={{ display: "block" }}
          >
            {/* Month labels */}
            {monthLabels.map(({ label, x }) => (
              <text
                key={label}
                x={x * 14}
                y={12}
                fontSize={10}
                fill="#9ca3af"
                fontFamily="monospace"
              >
                {label}
              </text>
            ))}

            {/* Cells */}
            {GRID.map((week, wi) =>
              week.map((level, di) => (
                <rect
                  key={`${wi}-${di}`}
                  x={wi * 14}
                  y={di * 14 + 18}
                  width={11}
                  height={11}
                  rx={2.5}
                  fill={levelColor(level)}
                />
              ))
            )}
          </svg>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-gray-400">1583 activities in 2026</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((l) => (
              <span
                key={l}
                className="inline-block w-3 h-3 rounded-sm"
                style={{ backgroundColor: levelColor(l) }}
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Recent Activity */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4 text-gray-400"
            >
              <polyline points="13 2 13 9 20 9" />
              <polyline points="11 22 11 15 4 15" />
              <path d="M3 3l18 18" />
            </svg>
            <p className="text-sm font-semibold text-black">Recent Activity</p>
          </div>

          <div className="space-y-5">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-0.5 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 flex-shrink-0">
                  <TypeIcon type={a.type} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold text-black">{a.repo}</span>
                    <span className="text-xs text-gray-400">{a.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">{a.message}</p>
                  <span className="inline-block mt-1.5 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-md font-mono">
                    {a.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4 text-gray-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <p className="text-sm font-semibold text-black">Overview</p>
          </div>

          <div className="space-y-3">
            {/* Pull Requests */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                Pull Requests
              </p>
              <p className="text-3xl font-black text-black">142</p>
              <p className="text-xs text-gray-400 mt-1">+12% from last month</p>
            </div>

            {/* Code Reviews */}
            <div className="border border-gray-200 rounded-2xl p-5">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-2">
                Code Reviews
              </p>
              <p className="text-3xl font-black text-black">85</p>
              <p className="text-xs text-gray-400 mt-1">+5% from last month</p>
            </div>

            {/* Top 1% Badge */}
            <div className="border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-black">Top 1%</p>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  Global Contributor
                </p>
              </div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-5 h-5 text-gray-300"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}