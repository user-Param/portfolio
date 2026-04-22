"use client";

export const Navbar = () => {
  return (
    <nav className="h-[70px] px-4 md:px-8 flex items-center justify-between border-b border-black/5 bg-white sticky top-0 z-50">
      
      {/* Left: Logo / Name */}
      <div className="text-xl font-bold tracking-tight">
        Param
      </div>

      {/* Right: Nav + Actions */}
      <div className="flex items-center gap-4 md:gap-8">
        
        {/* Links - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500">
          <span className="cursor-pointer hover:text-black transition-colors">Portfolio</span>
          <span className="cursor-pointer hover:text-black transition-colors">Projects</span>
          <span className="cursor-pointer hover:text-black transition-colors">Contact</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Search - Hidden on Small Mobile */}
          <div className="hidden sm:block">
            <input
              type="search"
              placeholder="Search..."
              className="w-32 md:w-48 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-sm outline-none focus:border-black transition-all"
            />
          </div>

          <button 
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="px-4 py-2 text-xs md:text-sm font-semibold text-black rounded-full bg-black border border-gray-200 transition-colors dark:text-white dark:border-white/20"
          >
            Theme
          </button>

          <a href="mailto:paramjeetsinghpawar25@gmail.com?subject=Lets%20work%20Together&body=Hi%20Param,"
          className="px-4 py-2 text-xs md:text-sm font-semibold text-white rounded-full bg-black hover:bg-gray-800 transition-colors">
            Hire me
          </a>
        </div>

      </div>
    </nav>
  );
};