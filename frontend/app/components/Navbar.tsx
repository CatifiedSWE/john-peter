'use client'

export default function Navbar() {
  return (
    <nav className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="glass-nav px-8 py-4 rounded-full shadow-2xl">
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="#home"
              className="text-sm tracking-widest uppercase text-white/90 hover:text-primary transition-colors duration-300"
              data-testid="nav-home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-sm tracking-widest uppercase text-white/90 hover:text-primary transition-colors duration-300"
              data-testid="nav-about"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="text-sm tracking-widest uppercase text-white/90 hover:text-primary transition-colors duration-300"
              data-testid="nav-work"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm tracking-widest uppercase text-white/90 hover:text-primary transition-colors duration-300"
              data-testid="nav-contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
