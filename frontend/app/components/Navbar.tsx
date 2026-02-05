'use client'

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 xl:px-12 py-4 lg:py-6">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="flex flex-col">
          <span className="text-xl lg:text-2xl font-serif italic text-white tracking-wide">JP</span>
          <span className="text-[8px] lg:text-[9px] tracking-widest uppercase text-slate-500">Sales and Revenue Architect</span>
          <span className="text-[7px] lg:text-[8px] tracking-widest uppercase text-primary/60">Enterprise Sales</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
          <a
            href="#dossier"
            className="text-[10px] lg:text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors duration-300"
            data-testid="nav-dossier"
          >
            Dossier
          </a>
          <a
            href="#insights"
            className="text-[10px] lg:text-xs tracking-widest uppercase text-slate-400 hover:text-white transition-colors duration-300"
            data-testid="nav-insights"
          >
            Insights
          </a>
          <a
            href="#connect"
            className="text-[10px] lg:text-xs tracking-widest uppercase text-primary hover:text-white transition-colors duration-300 underline underline-offset-4"
            data-testid="nav-connect"
          >
            Connect
          </a>
          
          {/* Hamburger Menu Icon */}
          <button className="flex flex-col gap-1.5 p-2 hover:opacity-70 transition-opacity" aria-label="Menu">
            <span className="w-5 lg:w-6 h-px bg-white"></span>
            <span className="w-5 lg:w-6 h-px bg-white"></span>
            <span className="w-3 lg:w-4 h-px bg-white"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
