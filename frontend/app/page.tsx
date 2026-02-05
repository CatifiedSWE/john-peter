import Image from 'next/image'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      {/* Fixed noise overlay */}
      <div className="fixed inset-0 bg-noise z-50 pointer-events-none"></div>

      {/* Navbar - Desktop only */}
      <Navbar />

      <main className="relative min-h-screen w-full flex flex-col overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex-grow flex items-center justify-center px-4 md:px-8 lg:px-12" data-testid="hero-section">
          {/* Background Text - Desktop: Marquee "JOHN PETER" | Mobile: Static "JOHN" above image */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            {/* Desktop: Horizontal Marquee */}
            <div className="hidden md:flex items-center whitespace-nowrap">
              <h1 className="text-[30vw] lg:text-[25vw] xl:text-[22vw] 2xl:text-[20vw] font-display font-bold leading-none text-primary/20 opacity-80 flex animate-marquee">
                <span className="inline-block px-8 lg:px-12">JOHN PETER —</span>
                <span className="inline-block px-8 lg:px-12">JOHN PETER —</span>
                <span className="inline-block px-8 lg:px-12">JOHN PETER —</span>
                <span className="inline-block px-8 lg:px-12">JOHN PETER —</span>
              </h1>
            </div>

            {/* Mobile: Static "JOHN" with higher z-index */}
            <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-screen flex justify-center z-30">
              <h1 className="text-bleed font-display font-black text-white/5 uppercase italic">
                JOHN
              </h1>
            </div>
          </div>

          {/* Main Content - Desktop Grid Layout */}
          <div className="relative z-20 w-full max-w-[1800px] mx-auto px-4 md:px-6 lg:px-10 xl:px-12">
            {/* Desktop 3-column grid layout - adjusted for all screen sizes */}
            <div className="hidden md:grid md:grid-cols-[minmax(140px,260px)_minmax(200px,280px)_minmax(140px,260px)] lg:grid-cols-[minmax(180px,320px)_minmax(260px,360px)_minmax(180px,320px)] xl:grid-cols-[minmax(240px,400px)_minmax(320px,420px)_minmax(240px,400px)] 2xl:grid-cols-[1fr_minmax(400px,500px)_1fr] gap-3 md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-12 items-center min-h-[80vh]">
              
              {/* Left Content */}
              <div className="flex flex-col justify-center z-30 pr-1 md:pr-2 lg:pr-4 xl:pr-6 overflow-hidden">
                <div className="space-y-2 md:space-y-3 lg:space-y-5 xl:space-y-6">
                  <div className="space-y-1 md:space-y-1.5 lg:space-y-2 xl:space-y-3">
                    <span className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] tracking-widest uppercase text-primary font-semibold">
                      Feature Profile
                    </span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif italic text-white leading-tight">
                      Revenue <br /> Architecture
                    </h2>
                    <p className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] tracking-widest uppercase text-slate-400 max-w-[120px] md:max-w-[160px] lg:max-w-[220px] xl:max-w-[280px] 2xl:max-w-[320px] leading-relaxed">
                      Building multi-crore pipelines. Closing enterprise deals.
                    </p>
                  </div>

                  <div className="pt-2 md:pt-4 lg:pt-8 xl:pt-10 2xl:pt-12 space-y-1.5 md:space-y-2 lg:space-y-3 xl:space-y-4">
                    <span className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] tracking-widest uppercase text-primary font-semibold block">
                      Revenue Impact
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display text-white">₹5Cr<span className="text-primary">+</span></span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-2 lg:gap-3">
                      <div className="h-px w-3 md:w-4 lg:w-6 xl:w-8 bg-slate-600"></div>
                      <span className="text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] tracking-widest uppercase text-slate-400">
                        Direct Revenue Generated / 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center - Portrait Image */}
              <div className="flex justify-center items-center">
                <div className="relative w-full aspect-[3/4] shadow-2xl overflow-hidden group">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBztZzLBcZjDx5WxUvrsZbCRe0NkSP5yu6xMCsM9q_qt-wvOSushrPynPdNTi0cgVzlJVHofwV5VDf4hn6fNQZj5C1-rmbQMn5DsO5k8tlTKFQqQvo7UE3d5F5O-2_7MCNV2fOR06BuDfGEupz1ZGbm_6nfuQb4U7z3fSVd4C2BB5pWnZp_HtBZ9k1QSu7i3VKje6oZQGUAmecRPijFxwBZJhrAhev6afL4GqW2hzsGS-43juIIXV37VO0PHoE7YIZLbwJfl18iLUTj"
                    alt="Professional Portrait of the Architect"
                    fill
                    className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 masked-image"
                    priority
                    data-testid="portrait-image"
                  />
                  <div className="absolute inset-3 lg:inset-4 border border-white/10 pointer-events-none"></div>
                  <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="h-8 lg:h-12 w-px bg-white/30 mb-2"></div>
                    <span className="text-[8px] lg:text-[9px] tracking-superwidest uppercase text-white/80 font-light">
                      Full Dossier
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center z-30 text-right pl-1 md:pl-2 lg:pl-4 xl:pl-6 overflow-hidden">
                <div className="space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8">
                  <div className="space-y-1 md:space-y-1.5 inline-block ml-auto">
                    <span className="inline-block bg-primary text-background-dark px-1 md:px-1.5 lg:px-2 xl:px-3 py-0.5 text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] font-bold tracking-widest uppercase">
                      Issue 042
                    </span>
                    <h3 className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs italic font-serif text-slate-500 mt-1 md:mt-1.5 lg:mt-2">
                      Global Excellence Report
                    </h3>
                    <p className="text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] tracking-widest text-slate-400">$19.99 // VOL. XII</p>
                  </div>

                  <div className="pt-1 md:pt-2 lg:pt-4 xl:pt-6 space-y-1.5 md:space-y-2 lg:space-y-3 xl:space-y-4">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-serif italic text-white leading-tight">
                      Execution <br /> & Trust
                    </h2>
                    <p className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] tracking-widest uppercase text-primary italic max-w-[100px] md:max-w-[130px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[260px] ml-auto">
                      Representing enterprise brands at the front line.
                    </p>
                    <div className="w-10 md:w-12 lg:w-16 xl:w-20 h-px bg-slate-600 ml-auto mt-1 md:mt-2 lg:mt-4 xl:mt-6"></div>
                  </div>

                  <div className="pt-1 md:pt-2 lg:pt-4 xl:pt-6 space-y-1.5 md:space-y-2 lg:space-y-3 xl:space-y-4">
                    <span className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] tracking-widest uppercase text-primary font-semibold block">
                      Deal Execution
                    </span>
                    <div className="flex items-center justify-end">
                      <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display text-white tracking-tighter">
                        800<span className="text-primary italic">+</span>
                      </span>
                    </div>
                    <div className="flex items-center justify-end gap-1 md:gap-1.5 lg:gap-2 xl:gap-3">
                      <span className="text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] tracking-widest uppercase text-slate-400">
                        Enterprise Closures
                      </span>
                      <div className="h-px w-3 md:w-4 lg:w-6 xl:w-8 bg-slate-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center">
              {/* Portrait Image */}
              <div className="relative w-72 aspect-[3/4] shadow-2xl overflow-hidden group">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBztZzLBcZjDx5WxUvrsZbCRe0NkSP5yu6xMCsM9q_qt-wvOSushrPynPdNTi0cgVzlJVHofwV5VDf4hn6fNQZj5C1-rmbQMn5DsO5k8tlTKFQqQvo7UE3d5F5O-2_7MCNV2fOR06BuDfGEupz1ZGbm_6nfuQb4U7z3fSVd4C2BB5pWnZp_HtBZ9k1QSu7i3VKje6oZQGUAmecRPijFxwBZJhrAhev6afL4GqW2hzsGS-43juIIXV37VO0PHoE7YIZLbwJfl18iLUTj"
                  alt="Professional Portrait of the Architect"
                  fill
                  className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 masked-image"
                  priority
                />
                <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="h-12 w-px bg-white/30 mb-2"></div>
                  <span className="text-[9px] tracking-superwidest uppercase text-white/80 font-light">
                    Full Dossier
                  </span>
                </div>
              </div>

              {/* Mobile Content - Below Image */}
              <div className="w-full text-center space-y-6 px-4 pt-8 pb-8">
                <div className="space-y-1">
                  <h2 className="text-xs tracking-[0.6em] uppercase font-light text-slate-400">
                    REVENUE ARCHITECT
                  </h2>
                  <div className="h-px w-12 bg-primary/40 mx-auto mt-3"></div>
                </div>
                <div className="space-y-3 pt-4">
                  <h3 className="text-5xl font-serif italic text-white leading-tight">
                    Revenue <br /> Architecture
                  </h3>
                  <p className="text-[11px] tracking-widest uppercase text-primary/80 max-w-[280px] mx-auto leading-relaxed">
                    Chennai-based. Building multi-crore revenue systems for Titan, Maruti Suzuki, and enterprise decision-makers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll indicator - Desktop */}
      <div className="hidden md:flex fixed left-4 lg:left-6 xl:left-8 bottom-8 lg:bottom-12 z-50 flex-col items-center gap-3 lg:gap-4">
        <div className="h-16 lg:h-24 w-px bg-gradient-to-t from-primary to-transparent"></div>
        <span className="vertical-text text-[8px] lg:text-[9px] tracking-widest uppercase text-primary/60">
          Scroll to Explore
        </span>
      </div>

      {/* Mobile side text */}
      <div className="md:hidden fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <div className="vertical-text text-[8px] uppercase tracking-superwidest text-slate-700">
          Enterprise Sales & Revenue Performance Report
        </div>
      </div>

      {/* Footer copyright - Desktop */}
      <div className="hidden md:block fixed bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-40">
        <p className="text-[8px] lg:text-[9px] tracking-widest uppercase text-slate-600">
          © 2024 John Peter. Confidential.
        </p>
      </div>

      {/* Right vertical text - Desktop */}
      <div className="hidden lg:flex fixed right-4 xl:right-6 2xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
        <span className="vertical-text text-[8px] xl:text-[9px] tracking-widest uppercase text-slate-600">
          2024 // Consistent Performance // Proven Systems
        </span>
      </div>
    </>
  )
}
