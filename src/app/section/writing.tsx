const POSTS = [
  {
    id: 1,
    tag: "Next.js",
    date: "Feb 12, 2026",
    readTime: "8 min read",
    title: "Mastering Server Components in Next.js 14",
    excerpt:
      "A deep dive into the React Server Components architecture and how t...",
    href: "#",
    image: null, // replace with "/images/blog/nextjs.png"
  },
  {
    id: 2,
    tag: "Design System",
    date: "Jan 28, 2026",
    readTime: "12 min read",
    title: "Building Accessible Design Systems",
    excerpt:
      "Key principles for creating inclusive UI component libraries that work for...",
    href: "#",
    image: null, // replace with "/images/blog/design-system.png"
  },
  {
    id: 3,
    tag: "Rust",
    date: "Jan 15, 2026",
    readTime: "15 min read",
    title: "Rust for JavaScript Developers",
    excerpt:
      "Comparing memory management models and getting started with Rus...",
    href: "#",
    image: null, // replace with "/images/blog/rust.png"
  },
];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
      <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
      <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
      <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RecentWritingsSection() {
  return (
    <section className="w-full max-w-[80%] mx-auto px-4 py-16">

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-black inline-block" />
            <p className="text-xs tracking-widest text-gray-400 font-medium uppercase">
              03. / Writing
            </p>
          </div>
          <h2 className="text-3xl font-black text-black">Recent Writings</h2>
          <p className="text-sm text-gray-400 mt-1.5">
            Thoughts on software engineering, design patterns, and emerging technologies.
          </p>
        </div>
        <a
        
          href="#"
          className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-full px-4 py-2 hover:border-gray-400 hover:text-black transition-all"
        >
          View all posts
          <ArrowIcon />
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4">
        {POSTS.map((post) => (
          <div
            key={post.id}
            className="flex flex-col border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200"
          >
            {/* Tag */}
            <div className="px-4 pt-4 pb-2">
              <span className="text-xs font-medium text-gray-500">{post.tag}</span>
            </div>

            {/* Thumbnail */}
            <div className="mx-4 mb-3 rounded-xl overflow-hidden bg-gray-100 h-36 w-auto">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100" />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-4 pb-4">
              {/* Date + Read time */}
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                <span className="flex items-center gap-1">
                  <CalendarIcon />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-black leading-snug mb-1.5">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-xs text-gray-400 leading-relaxed flex-1 line-clamp-2 mb-4">
                {post.excerpt}
              </p>

              {/* Read Article */}
              <a 
                href={post.href}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-black transition-colors"
              >
                Read Article
                <ArrowIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}