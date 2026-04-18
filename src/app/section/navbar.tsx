export const Navbar = () => {
  return (
    <div className="h-[60px] px-6 flex items-center justify-between border-b">
      
      {/* Left: Logo / Name */}
      <div className="text-lg font-semibold">
        Param
      </div>

      {/* Right: Nav + Actions */}
      <div className="flex items-center gap-6">
        
        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-balck-500">
          <span className="cursor-pointer hover:text-black-600">Portfolio</span>
          <span className="cursor-pointer hover:text-black-600">Projects</span>
          <span className="cursor-pointer hover:text-black-600">Contact</span>
        </div>

        {/* Search */}
        <input
          type="search"
          placeholder="Search..."
          className="px-3 py-1 rounded-md bg-transparent border border-gray-600 text-sm outline-none"
        />

        {/* Profile */}
        <button className="px-4 py-1.5 text-sm text-white rounded-md bg-black">
          Theme
        </button>

        {/* CTA */}
        <button className="px-4 py-1.5 text-sm text-white rounded-md bg-black">
          Hire me
        </button>

      </div>
    </div>
  );
};