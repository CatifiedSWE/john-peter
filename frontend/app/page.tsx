'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import BlurRotateReveal from './components/BlurRotateReveal'
import { SlideUpBlur, SimpleFadeIn } from './components/Animations'

export default function Home() {
  useEffect(() => {
    // Lock scroll on mount
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0) // Ensure starting at top

    // Unlock after animations complete (max delay ~2.6s + duration ~0.8s)
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset'
    }, 3500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      {/* Navbar - Desktop only */}
      <Navbar />

      <main className="relative w-full flex flex-col overflow-hidden">
        {/* FIXED BACKGROUND LAYER */}
        <div className="fixed inset-0 w-full h-full bg-gold-gradient z-0 pointer-events-none">
          {/* Additional animated blob moved to fixed background */}
          <div className="absolute top-1/2 left-1/2 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-full h-full rounded-full bg-gold-blob-3 animate-blob-movement-3"></div>
          </div>
        </div>

        {/* SECTION 1: HERO */}
        <section id="home" className="relative z-10 min-h-screen md:min-h-0 md:h-auto lg:min-h-screen w-full flex flex-col overflow-hidden bg-transparent">

          {/* Hero Section */}
          <div className="relative flex-grow flex items-center justify-center md:items-start lg:items-center px-4 md:px-8 md:pt-44 lg:pt-0 lg:px-12" data-testid="hero-section">
            {/* Background Text - Desktop: Marquee "JOHN PETER" | Mobile: Static "JOHN" above image */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
              {/* Desktop: Horizontal Marquee */}
              <div className="hidden md:flex items-center whitespace-nowrap md:mt-0 lg:mt-0">
                <h1 className="text-[30vw] lg:text-[25vw] xl:text-[22vw] 2xl:text-[20vw] font-display font-bold leading-none text-primary/20 opacity-80 flex animate-marquee">
                  <span className="inline-block px-3 lg:px-6">
                    <BlurRotateReveal text="JOHN PETER —" wordLevel={false} enableBlur={false} enableRotation={false} delay={0} />
                  </span>
                  <span className="inline-block px-3 lg:px-6">
                    <BlurRotateReveal text="JOHN PETER —" wordLevel={false} enableBlur={false} enableRotation={false} delay={0} />
                  </span>
                </h1>
              </div>

              {/* Mobile: Static "JOHN" with higher z-index */}
              <div className="md:hidden absolute top-24 left-1/2 -translate-x-1/2 w-screen flex justify-center z-30">
                <h1 className="text-bleed font-display font-black text-white/5 uppercase italic">
                  <BlurRotateReveal text="JOHN" delay={0.2} enableBlur={false} enableRotation={false} />
                </h1>
              </div>
            </div>

            {/* Main Content - Desktop Grid Layout */}
            <div className="relative z-20 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
              {/* Desktop 3-column grid layout - adjusted for all screen sizes */}
              <div className="hidden md:grid md:grid-cols-[1fr_minmax(220px,300px)_1fr] lg:grid-cols-[1fr_minmax(280px,380px)_1fr] xl:grid-cols-[minmax(240px,400px)_minmax(320px,420px)_minmax(240px,400px)] 2xl:grid-cols-[1fr_minmax(400px,500px)_1fr] gap-4 md:gap-8 lg:gap-12 items-center md:min-h-0 lg:min-h-[80vh]">

                {/* Left Content */}
                <div className="flex flex-col justify-center z-30 pr-2 md:pr-4 lg:pr-8 xl:pr-10 overflow-hidden">
                  <div className="space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-8">
                    <div className="space-y-1.5 md:space-y-2 lg:space-y-3 xl:space-y-4">
                      <div className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-widest uppercase text-primary font-semibold">
                        <SimpleFadeIn delay={2.6} className="inline-block">Feature Profile</SimpleFadeIn>
                      </div>
                      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif italic text-white leading-tight">
                        <BlurRotateReveal text="Sales" delay={1.8} enableBlur={false} enableRotation={false} /> <br />
                        <BlurRotateReveal text="Architect" delay={1.9} enableBlur={false} enableRotation={false} />
                      </h2>
                      <SimpleFadeIn delay={2.6}>
                        <p className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-widest uppercase text-slate-400 max-w-[140px] md:max-w-[180px] lg:max-w-[240px] xl:max-w-[300px] 2xl:max-w-[340px] leading-relaxed">
                          Building multi-crore pipelines. Closing enterprise deals.
                        </p>
                      </SimpleFadeIn>
                    </div>

                    <div className="pt-4 md:pt-6 lg:pt-10 xl:pt-12 2xl:pt-16 space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
                      <div className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-widest uppercase text-primary font-semibold block">
                        <SimpleFadeIn delay={2.6} className="inline-block">Revenue Impact</SimpleFadeIn>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-display text-white">
                          <BlurRotateReveal text="₹5Cr" delay={1.2} enableBlur={true} enableRotation={true} />
                          <SimpleFadeIn delay={1.7} className="inline-block text-primary">+</SimpleFadeIn>
                        </span>
                      </div>
                      <SimpleFadeIn delay={2.6} className="flex items-center gap-2 md:gap-3 lg:gap-4">
                        <div className="h-px w-4 md:w-6 lg:w-8 xl:w-10 bg-slate-600"></div>
                        <span className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] tracking-widest uppercase text-slate-400">
                          Direct Revenue Generated / 2026
                        </span>
                      </SimpleFadeIn>
                    </div>
                  </div>
                </div>

                {/* Center - Portrait Image */}
                <div className="flex justify-center items-center w-full">
                  <SlideUpBlur delay={0.6} duration={1.8} className="w-full max-w-[300px] md:max-w-full">
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
                  </SlideUpBlur>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center z-30 text-right pl-2 md:pl-4 lg:pl-8 xl:pl-10 overflow-hidden">
                  <div className="space-y-3 md:space-y-5 lg:space-y-6 xl:space-y-8">
                    <SimpleFadeIn delay={2.6} className="space-y-1.5 md:space-y-2 inline-block ml-auto">
                      <span className="inline-block bg-primary text-background-dark px-1.5 md:px-2 lg:px-3 xl:px-4 py-0.5 text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-xs font-bold tracking-widest uppercase">
                        Portfolio 2026
                      </span>
                      <h3 className="text-[9px] md:text-[10px] lg:text-[11px] xl:text-[13px] italic font-serif text-slate-500 mt-1.5 md:mt-2 lg:mt-2.5">
                        Enterprise Sales Record
                      </h3>
                      <p className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] tracking-widest text-slate-400">B2B // B2C // TIER-1</p>
                    </SimpleFadeIn>

                    <div className="pt-2 md:pt-4 lg:pt-6 xl:pt-8 space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
                      <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif italic text-white leading-tight">
                        <BlurRotateReveal text="Execution" delay={1.8} enableBlur={false} enableRotation={false} /> <br />
                        <BlurRotateReveal text="& Trust" delay={1.9} enableBlur={false} enableRotation={false} />
                      </h2>
                      <SimpleFadeIn delay={2.6}>
                        <p className="text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-xs tracking-widest uppercase text-primary italic max-w-[120px] md:max-w-[150px] lg:max-w-[200px] xl:max-w-[240px] 2xl:max-w-[280px] ml-auto">
                          Representing enterprise brands at the front line.
                        </p>
                        <div className="w-12 md:w-16 lg:w-20 xl:w-24 h-px bg-slate-600 ml-auto mt-2 md:mt-3 lg:mt-5 xl:mt-8"></div>
                      </SimpleFadeIn>
                    </div>

                    <div className="pt-1 md:pt-2 lg:pt-4 xl:pt-6 space-y-1.5 md:space-y-2 lg:space-y-3 xl:space-y-4">
                      <div className="text-[7px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] tracking-widest uppercase text-primary font-semibold block">
                        <SimpleFadeIn delay={2.6} className="inline-block">Deal Execution</SimpleFadeIn>
                      </div>
                      <div className="flex items-center justify-end">
                        <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display text-white tracking-tighter">
                          <BlurRotateReveal text="800" delay={1.2} enableBlur={true} enableRotation={true} />
                          <SimpleFadeIn delay={1.7} className="inline-block text-primary italic">+</SimpleFadeIn>
                        </span>
                      </div>
                      <SimpleFadeIn delay={2.6} className="flex items-center justify-end gap-1 md:gap-1.5 lg:gap-2 xl:gap-3">
                        <span className="text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px] 2xl:text-[10px] tracking-widest uppercase text-slate-400">
                          Enterprise Closures
                        </span>
                        <div className="h-px w-3 md:w-4 lg:w-6 xl:w-8 bg-slate-600"></div>
                      </SimpleFadeIn>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col items-center pt-24">
                {/* Portrait Image */}
                <SlideUpBlur delay={0.8} duration={1.5} className="w-auto">
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
                </SlideUpBlur>

                {/* Mobile Content - Below Image */}
                <div className="w-full text-center space-y-6 px-4 pt-8 pb-8">
                  <div className="space-y-1">
                    <SimpleFadeIn delay={2.0}>
                      <h2 className="text-xs tracking-[0.6em] uppercase font-light text-slate-400">
                        Sales Architect
                      </h2>
                      <div className="h-px w-12 bg-primary/40 mx-auto mt-3"></div>
                    </SimpleFadeIn>
                  </div>
                  <div className="space-y-3 pt-4">
                    <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black italic text-white leading-none uppercase tracking-tighter">
                      <BlurRotateReveal text="John Peter" delay={1.4} enableBlur={false} enableRotation={false} />
                    </h3>
                    <SimpleFadeIn delay={2.0}>
                      <p className="text-[11px] tracking-widest uppercase text-primary/80 max-w-[280px] mx-auto leading-relaxed">
                        Chennai-based. Building multi-crore revenue systems for Titan, Maruti Suzuki, and enterprise decision-makers.
                      </p>
                    </SimpleFadeIn>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator - Desktop */}
          <div className="hidden md:flex fixed left-4 lg:left-6 xl:left-8 bottom-8 lg:bottom-12 z-50 flex-col items-center gap-3 lg:gap-4">
            <div className="h-16 lg:h-24 w-px bg-gradient-to-t from-primary to-transparent"></div>
            <span className="vertical-text text-[8px] lg:text-[9px] tracking-widest uppercase text-primary/60">
              Scroll to Explore
            </span>
          </div>



          {/* Footer copyright - Desktop */}
          <div className="hidden md:block fixed bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 z-40">
            <p className="text-[8px] lg:text-[9px] tracking-widest uppercase text-slate-600">
              © 2026 John Peter. Confidential.
            </p>
          </div>

          {/* Right vertical text - Desktop */}
          <div className="hidden lg:flex fixed right-4 xl:right-6 2xl:right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
            <span className="vertical-text text-[8px] xl:text-[9px] tracking-widest uppercase text-slate-600">
              2026 // Consistent Performance // Proven Systems
            </span>
          </div>
        </section>

        {/* SECTION 2: BRAND MARQUEE */}
        <section className="relative z-10 w-full bg-white mt-12 md:mt-20 lg:mt-40 pt-16 md:pt-12 pb-12 md:pb-8 overflow-hidden min-h-[35vh] md:min-h-[20vh]">
          <div className="flex flex-col items-center justify-center h-full">
            {/* Section Label */}
            <div className="text-center mb-8 md:mb-12">
              <span className="text-[9px] md:text-[10px] lg:text-[11px] tracking-superwidest uppercase text-black font-semibold">
                Trusted By
              </span>
              <div className="h-px w-16 bg-primary/40 mx-auto mt-4"></div>
            </div>

            {/* Logo Marquee - Horizontal Scroll */}
            <div className="relative w-full overflow-hidden">
              <div className="flex items-center gap-16 md:gap-24 lg:gap-32 animate-logo-marquee">
                {/* First set of logos */}
                <div className="flex items-center gap-16 md:gap-24 lg:gap-32 flex-shrink-0">
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/titan-logo.png"
                      alt="Titan"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/lifestyle-logo.png"
                      alt="Lifestyle"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/kama-ayurveda-logo.png"
                      alt="Kama Ayurveda"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/maruti-suzuki-logo.png"
                      alt="Maruti Suzuki"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-16 md:gap-24 lg:gap-32 flex-shrink-0">
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/titan-logo.png"
                      alt="Titan"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/lifestyle-logo.png"
                      alt="Lifestyle"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/kama-ayurveda-logo.png"
                      alt="Kama Ayurveda"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                  <div className="relative w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center">
                    <Image
                      src="/maruti-suzuki-logo.png"
                      alt="Maruti Suzuki"
                      fill
                      className="object-contain opacity-70 grayscale"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: PORTFOLIO / SELECTED ENGAGEMENTS */}
        <section id="portfolio" className="relative z-10 w-full bg-transparent py-24 md:py-36 lg:py-48">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            {/* Section Header */}
            <div className="mb-20 md:mb-28 lg:mb-32">
              <div className="text-[9px] md:text-[10px] lg:text-[11px] tracking-superwidest uppercase text-primary font-semibold block">
                <SimpleFadeIn delay={0.2} className="inline-block">Portfolio</SimpleFadeIn>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif italic text-white mt-4 md:mt-6 leading-tight">
                <BlurRotateReveal text="Selected Engagements" delay={0.4} staggerDuration={0.025} />
              </h2>
              <SimpleFadeIn delay={0.6} className="h-px w-24 bg-primary/40 mt-6 md:mt-8"></SimpleFadeIn>

              {/* Brands List */}
              <SimpleFadeIn delay={0.8}>
                <p className="mt-8 text-sm md:text-base text-slate-400 font-light tracking-wide max-w-2xl">
                  Titan <span className="text-primary mx-2">·</span> Lifestyle <span className="text-primary mx-2">·</span> Kama Ayurveda <span className="text-primary mx-2">·</span> Maruti Suzuki <span className="text-primary mx-2">·</span> and more
                </p>
              </SimpleFadeIn>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 lg:gap-x-12">

              {/* Titan Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative border-t border-white/10 pt-8 transition-colors duration-500 hover:border-primary/50"
              >
                <span className="text-[9px] tracking-widest uppercase text-slate-500 mb-2 block group-hover:text-primary transition-colors">
                  High-Value Negotiation
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Titan</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light mb-6">
                  Managed premium customer requirements for high-ticket horology and accessories. Executed consultative sales strategies to close complex transactions, focusing on value articulation over price negotiation.
                </p>
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/40">
                  <span>Consumer Retail</span>
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>Premium</span>
                </div>
              </motion.div>

              {/* Kama Ayurveda Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative border-t border-white/10 pt-8 transition-colors duration-500 hover:border-primary/50"
              >
                <span className="text-[9px] tracking-widest uppercase text-slate-500 mb-2 block group-hover:text-primary transition-colors">
                  Brand Storytelling & Retention
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Kama Ayurveda</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light mb-6">
                  Translate ancient ayurvedic formulations into modern luxury lifestyle needs. Built long-term client retention through educational selling and personalized regimen curation for high-net-worth individuals.
                </p>
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/40">
                  <span>Luxury Wellness</span>
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>Retention</span>
                </div>
              </motion.div>

              {/* Maruti Suzuki Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative border-t border-white/10 pt-8 transition-colors duration-500 hover:border-primary/50"
              >
                <span className="text-[9px] tracking-widest uppercase text-slate-500 mb-2 block group-hover:text-primary transition-colors">
                  Objection Handling & Closing
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Maruti Suzuki</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light mb-6">
                  Navigated highly competitive automotive landscape. Specialized in overcoming feature-comparison objections and financing hurdles to drive volume sales while maintaining high customer satisfaction scores.
                </p>
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/40">
                  <span>Automotive</span>
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>Volume</span>
                </div>
              </motion.div>

              {/* Lifestyle Case Study */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative border-t border-white/10 pt-8 transition-colors duration-500 hover:border-primary/50"
              >
                <span className="text-[9px] tracking-widest uppercase text-slate-500 mb-2 block group-hover:text-primary transition-colors">
                  Cross-Selling & Portfolio Growth
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">Lifestyle</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light mb-6">
                  Optimized average transaction value through strategic cross-category pairing. Analyzed buying patterns to introduce complementary product lines, significantly increasing basket size per customer interaction.
                </p>
                <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-white/40">
                  <span>Retail Fashion</span>
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span>Growth</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* SECTION 4: ABOUT */}
        <section id="about" className="relative z-10 w-full bg-neutral-900/90 py-24 md:py-36 lg:py-48 backdrop-blur-sm">
          <div className="max-w-[900px] mx-auto px-6 md:px-12 lg:px-16">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <div className="text-[9px] md:text-[10px] lg:text-[11px] tracking-superwidest uppercase text-primary font-semibold block">
                <SimpleFadeIn className="inline-block">Profile</SimpleFadeIn>
              </div>
              <SimpleFadeIn delay={0.2} className="h-px w-16 bg-primary/40 mx-auto mt-4"></SimpleFadeIn>
            </div>

            {/* Profile Content */}
            <div className="space-y-12 md:space-y-16">
              {/* Name & Role */}
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6">
                  <BlurRotateReveal text="John Peter" delay={0.3} staggerDuration={0.025} />
                </h2>
                <div className="text-lg md:text-xl text-slate-300 font-light">
                  <BlurRotateReveal text="Sales & Growth Specialist" delay={0.5} wordLevel={true} enableRotation={false} staggerDuration={0.025} />
                </div>
                <SimpleFadeIn delay={0.7} className="flex items-center justify-center gap-4 mt-6 text-sm text-slate-400">
                  <span>Chennai, India</span>
                  <span className="text-primary">•</span>
                  <span>4+ Years</span>
                </SimpleFadeIn>
              </div>

              {/* Bio */}
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed text-center">
                  A sales professional with frontline brand representation experience across Titan, Lifestyle, Kama Ayurveda, and Maruti Suzuki. Specialized in high-value negotiation, customer acquisition and retention, and objection handling at the decision-maker level.
                </p>
              </div>

              {/* Core Strengths */}
              <div className="pt-8">
                <h3 className="text-sm md:text-base tracking-widest uppercase text-primary/80 mb-8 text-center">
                  Core Strengths
                </h3>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-1">—</span>
                      <span className="text-sm md:text-base text-slate-300">High-value negotiation and deal closure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-1">—</span>
                      <span className="text-sm md:text-base text-slate-300">Customer acquisition and retention</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-1">—</span>
                      <span className="text-sm md:text-base text-slate-300">Upselling and cross-selling with brand alignment</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-1">—</span>
                      <span className="text-sm md:text-base text-slate-300">Objection handling at decision-maker level</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-1">—</span>
                      <span className="text-sm md:text-base text-slate-300">Pipeline discipline and follow-up control</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-1">—</span>
                      <span className="text-sm md:text-base text-slate-300">Cross-functional coordination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: RESULTS */}
        <section className="relative z-10 w-full bg-transparent py-24 md:py-36 lg:py-48">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-16">
            {/* Section Header */}
            <div className="text-center mb-20 md:mb-32">
              <div className="text-[9px] md:text-[10px] lg:text-[11px] tracking-superwidest uppercase text-primary font-semibold block">
                <SimpleFadeIn className="inline-block">By The Numbers</SimpleFadeIn>
              </div>
              <SimpleFadeIn delay={0.2} className="h-px w-16 bg-primary/40 mx-auto mt-4"></SimpleFadeIn>
            </div>

            {/* Metrics Grid */}
            <div className="grid md:grid-cols-2 gap-16 md:gap-20 lg:gap-24">
              {/* Metric 1 */}
              <div className="text-center space-y-6">
                <div className="text-7xl md:text-8xl lg:text-9xl font-display text-white leading-none">
                  <BlurRotateReveal text="₹5Cr" delay={0.2} enableBlur={true} enableRotation={true} staggerDuration={0.025} />
                  <SimpleFadeIn delay={0.8} className="inline-block text-primary">+</SimpleFadeIn>
                </div>
                <SimpleFadeIn delay={0.4} className="h-px w-20 bg-slate-700 mx-auto"></SimpleFadeIn>
                <SimpleFadeIn delay={0.6}>
                  <p className="text-[10px] md:text-[11px] tracking-superwidest uppercase text-slate-500">
                    Revenue Generated
                  </p>
                </SimpleFadeIn>
              </div>

              {/* Metric 2 */}
              <div className="text-center space-y-6">
                <div className="text-7xl md:text-8xl lg:text-9xl font-display text-white leading-none">
                  <BlurRotateReveal text="800" delay={0.4} enableBlur={true} enableRotation={true} staggerDuration={0.025} />
                  <SimpleFadeIn delay={1.0} className="inline-block text-primary italic">+</SimpleFadeIn>
                </div>
                <div className="h-px w-20 bg-slate-700 mx-auto"></div>
                <p className="text-[10px] md:text-[11px] tracking-superwidest uppercase text-slate-500">
                  Deals Closed
                </p>
              </div>

              {/* Metric 3 */}
              <div className="text-center space-y-6">
                <div className="text-7xl md:text-8xl lg:text-9xl font-display text-white leading-none">
                  <BlurRotateReveal text="4" delay={0.6} enableBlur={true} enableRotation={true} staggerDuration={0.025} />
                  <SimpleFadeIn delay={1.2} className="inline-block text-primary">+</SimpleFadeIn>
                </div>
                <SimpleFadeIn delay={0.8} className="h-px w-20 bg-slate-700 mx-auto"></SimpleFadeIn>
                <SimpleFadeIn delay={1.0}>
                  <p className="text-[10px] md:text-[11px] tracking-superwidest uppercase text-slate-500">
                    Years Experience
                  </p>
                </SimpleFadeIn>
              </div>

              {/* Metric 4 */}
              <div className="text-center space-y-6">
                <div className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white leading-none pt-8">
                  <BlurRotateReveal text="Medium to Large" delay={0.8} staggerDuration={0.025} />
                </div>
                <SimpleFadeIn delay={1.0} className="h-px w-20 bg-slate-700 mx-auto"></SimpleFadeIn>
                <SimpleFadeIn delay={1.2}>
                  <p className="text-[10px] md:text-[11px] tracking-superwidest uppercase text-slate-500">
                    Average Deal Size
                  </p>
                </SimpleFadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT */}
        <section id="contact" className="relative z-10 w-full bg-black pt-24 md:pt-32 lg:pt-40 pb-10 md:pb-12">
          <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
            {/* Section Header */}
            <div className="mb-12 md:mb-16">
              <div className="text-[9px] md:text-[10px] lg:text-[11px] tracking-superwidest uppercase text-primary font-semibold block">
                <SimpleFadeIn className="inline-block">Get in Touch</SimpleFadeIn>
              </div>
              <SimpleFadeIn delay={0.2} className="h-px w-16 bg-primary/40 mx-auto mt-4"></SimpleFadeIn>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <SimpleFadeIn>
                <p className="text-lg md:text-xl text-slate-300 font-light">
                  For inquiries and opportunities
                </p>
              </SimpleFadeIn>
              <SlideUpBlur delay={0.2} className="inline-block">
                <a
                  href="mailto:kevinjohnpeter07@gmail.com"
                  className="inline-block text-2xl md:text-3xl lg:text-4xl font-serif italic text-white hover:text-primary transition-colors duration-300"
                >
                  kevinjohnpeter07@gmail.com
                </a>
              </SlideUpBlur>
            </div>
            <SlideUpBlur delay={0.4} className="mt-8 md:mt-10">
              <a
                href="https://www.linkedin.com/in/john-peter-32b886302/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden rounded-full border border-white/20 hover:border-white transition-colors duration-300"
              >
                {/* Fill Animation */}
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

                {/* Text */}
                <span className="relative z-10 text-xs md:text-sm tracking-widest uppercase text-slate-300 group-hover:text-black transition-colors duration-300">
                  Connect on LinkedIn
                </span>
              </a>
            </SlideUpBlur>

            {/* Footer */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-slate-700">
              <p className="text-[9px] md:text-[10px] tracking-widest uppercase text-slate-500">
                © 2026 John Peter. All Rights Reserved.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
