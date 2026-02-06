'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    const handleScroll = () => {
      // Always show navbar on mobile and tablet (< 1024px)
      if (window.innerWidth < 1024) {
        setIsVisible(true)
        return
      }
      const threshold = window.innerHeight * 0.8
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    handleResize()
    handleScroll()

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Active section tracking
  useEffect(() => {
    const sections = ['home', 'portfolio', 'about', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '-20% 0px -35% 0px' // Offset to center detection
      }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <AnimatePresence>
        {(isVisible || isMenuOpen) && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed top-6 left-0 right-0 flex justify-center z-50 pointer-events-none"
          >
            <div className="pointer-events-auto w-[90%] md:w-[80%] max-w-[1600px] flex items-center justify-between px-6 md:px-8 py-3 md:py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:border-white/20 transition-colors duration-300">

              {/* Left Side: Logo */}
              <div className="flex items-center gap-4 md:gap-6">
                <a href="#home" className="flex items-center group" onClick={() => setIsMenuOpen(false)}>
                  <span className="font-serif italic text-white text-xl md:text-2xl group-hover:text-primary transition-colors">JP</span>
                </a>
                <div className="hidden md:block w-px h-5 bg-white/20"></div>
                <span className="text-[10px] tracking-widest uppercase text-white/50 hidden lg:block">Sales Architect</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <div className="flex items-center gap-8">
                  {['Home', 'Portfolio', 'About', 'Contact'].map((item) => {
                    const id = item.toLowerCase()
                    const isActive = activeSection === id
                    return (
                      <a
                        key={item}
                        href={`#${id}`}
                        className={`relative text-[11px] tracking-widest uppercase transition-colors duration-300 hover:tracking-[0.15em] ${isActive ? 'text-primary font-bold' : 'text-slate-300 hover:text-white'}`}
                        data-testid={`nav-${id}`}
                      >
                        {item}
                        {isActive && (
                          <motion.div
                            layoutId="active-nav-underline"
                            className="absolute -bottom-1 left-0 right-0 h-px bg-primary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </a>
                    )
                  })}
                </div>
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary group transition-all duration-300">
                  <span className="block w-4 h-[1px] bg-white group-hover:bg-black transition-colors"></span>
                </button>
              </div>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                <motion.span
                  animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-px bg-white origin-center transition-transform"
                ></motion.span>
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-px bg-white transition-opacity"
                ></motion.span>
                <motion.span
                  animate={isMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-px bg-white origin-center transition-transform"
                ></motion.span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Full Page Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {['Home', 'Portfolio', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-4xl font-serif italic hover:text-primary transition-colors ${activeSection === item.toLowerCase() ? 'text-primary' : 'text-white'}`}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-[10px] tracking-widest uppercase text-white/30"
            >
              John Peter — Sales Architect
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

