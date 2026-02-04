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
        <section className="relative flex-grow flex items-center justify-center px-4 md:px-0" data-testid="hero-section">
          {/* Background Text - Desktop: Marquee "JOHN PETER" | Mobile: Static "JOHN" above image */}
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
            {/* Desktop: Horizontal Marquee */}
            <div className="hidden md:flex items-center whitespace-nowrap">
              <h1 className="text-[35vw] font-display font-bold leading-none text-primary/20 opacity-80 flex animate-marquee">
                <span className="inline-block px-12">JOHN PETER —</span>
                <span className="inline-block px-12">JOHN PETER —</span>
                <span className="inline-block px-12">JOHN PETER —</span>
                <span className="inline-block px-12">JOHN PETER —</span>
              </h1>
            </div>

            {/* Mobile: Static "JOHN" with higher z-index */}
            <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-screen flex justify-center z-30">
              <h1 className="text-bleed font-display font-black text-white/5 uppercase italic">
                JOHN
              </h1>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-20 w-full max-w-4xl flex justify-center">
            {/* Portrait Image */}
            <div className="relative w-72 md:w-96 lg:w-[450px] aspect-[3/4] shadow-2xl overflow-hidden group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBztZzLBcZjDx5WxUvrsZbCRe0NkSP5yu6xMCsM9q_qt-wvOSushrPynPdNTi0cgVzlJVHofwV5VDf4hn6fNQZj5C1-rmbQMn5DsO5k8tlTKFQqQvo7UE3d5F5O-2_7MCNV2fOR06BuDfGEupz1ZGbm_6nfuQb4U7z3fSVd4C2BB5pWnZp_HtBZ9k1QSu7i3VKje6oZQGUAmecRPijFxwBZJhrAhev6afL4GqW2hzsGS-43juIIXV37VO0PHoE7YIZLbwJfl18iLUTj"
                alt="Professional Portrait of the Architect"
                fill
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 masked-image"
                priority
                data-testid="portrait-image"
              />
              <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="h-12 w-px bg-white/30 mb-2"></div>
                <span className="text-[9px] tracking-superwidest uppercase text-white/80 font-light">
                  Full Dossier
                </span>
              </div>
            </div>

            {/* Left Content - Desktop */}
            <div className="hidden md:block absolute left-4 md:-left-24 top-1/2 -translate-y-1/2 z-30 max-w-xs md:max-w-sm">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[10px] tracking-widest uppercase text-primary font-semibold">
                    The Cover Story
                  </span>
                  <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">
                    The Anatomy <br /> of Scale
                  </h2>
                  <p className="text-[10px] tracking-widest uppercase text-slate-400 max-w-[280px] leading-relaxed">
                    Sales & Growth Architect based in Chennai. Engineering multi-crore revenue pipelines and orchestrating brand equity for market leaders including Titan and Maruti Suzuki.
                  </p>
                </div>

                <div className="pt-12 space-y-4">
                  <span className="text-[10px] tracking-widest uppercase text-primary font-semibold block">
                    The Bottom Line
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-8xl font-display text-white">₹5Cr+</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-slate-600"></div>
                    <span className="text-[9px] tracking-widest uppercase text-slate-400">
                      Direct Revenue Scaled / 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Desktop */}
            <div className="hidden md:block absolute right-4 md:-right-32 top-1/2 -translate-y-1/2 z-30 text-right max-w-xs md:max-w-sm">
              <div className="space-y-12">
                <div className="space-y-2 inline-block">
                  <span className="inline-block bg-primary text-background-dark px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                    Issue 042
                  </span>
                  <h3 className="text-xs italic font-serif text-slate-500 mt-2">
                    Global Excellence Report
                  </h3>
                  <p className="text-[9px] tracking-widest text-slate-400">$19.99 // VOL. XII</p>
                </div>

                <div className="pt-16 space-y-4">
                  <h2 className="text-3xl md:text-5xl font-serif italic text-white leading-tight">
                    Precision <br /> & Legacy
                  </h2>
                  <p className="text-[10px] tracking-widest uppercase text-primary italic max-w-[220px] ml-auto">
                    Architecting the future of enterprise closures.
                  </p>
                  <div className="w-20 h-px bg-slate-600 ml-auto mt-6"></div>
                </div>

                <div className="pt-12 space-y-4">
                  <span className="text-[10px] tracking-widest uppercase text-primary font-semibold block">
                    The Success Rate
                  </span>
                  <div className="flex items-center justify-end">
                    <span className="text-6xl md:text-8xl font-display text-white tracking-tighter">
                      800<span className="text-primary italic">+</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-3">
                    <span className="text-[9px] tracking-widest uppercase text-slate-400">
                      High-end strategic closures
                    </span>
                    <div className="h-px w-8 bg-slate-600"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Content - Below Image */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 z-20 w-full text-center space-y-6 px-4 pb-8">
              <div className="space-y-1">
                <h2 className="text-xs tracking-[0.6em] uppercase font-light text-slate-400">
                  THE ARCHITECT
                </h2>
                <div className="h-px w-12 bg-primary/40 mx-auto mt-3"></div>
              </div>
              <div className="space-y-3 pt-4">
                <h3 className="text-5xl font-serif italic text-white leading-tight">
                  The Anatomy <br /> of Scale
                </h3>
                <p className="text-[11px] tracking-widest uppercase text-primary/80 max-w-[280px] mx-auto leading-relaxed">
                  Sales & Growth Architect based in Chennai. Engineering multi-crore revenue pipelines and orchestrating brand equity for market leaders including Titan and Maruti Suzuki.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll indicator - Desktop */}
      <div className="hidden md:flex fixed left-8 bottom-12 z-50 flex-col items-center gap-4">
        <div className="h-24 w-px bg-gradient-to-t from-primary to-transparent"></div>
        <span className="vertical-text text-[9px] tracking-widest uppercase text-primary/60">
          Scroll to Explore
        </span>
      </div>

      {/* Mobile side text */}
      <div className="md:hidden fixed left-4 top-1/2 -translate-y-1/2 z-40">
        <div className="vertical-text text-[8px] uppercase tracking-superwidest text-slate-700">
          Business Mastery & Wealth Architectural Report
        </div>
      </div>
    </>
  )
}
