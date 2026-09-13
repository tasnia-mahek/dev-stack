import { useState } from "react"
import logo from "../assets/logo-text.png"
import hamburger from "../assets/hamburger.png"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-5">
        <div className="grid min-h-[72px] grid-cols-[auto_1fr_auto] items-center gap-2 lg:flex lg:justify-between">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-start lg:hidden"
            aria-label="Open menu"
          >
            <img
              src={hamburger}
              alt="Menu"
              className="h-6 w-6"
            />
          </button>

          <div className="justify-self-center lg:justify-self-auto">
            <img
              src={logo}
              alt="Dev Stack"
              className="h-8 w-auto sm:h-9"
            />
          </div>

          <div className="hidden items-center gap-5 text-sm font-medium lg:flex lg:gap-7">
            <a href="#" className="cursor-pointer text-[#DB2777]">
              Home
            </a>

            <a href="#technologies" className="cursor-pointer text-[#334155] hover:text-[#DB2777]">
              Technologies
            </a>

            <a href="#projects" className="cursor-pointer text-[#334155] hover:text-[#DB2777]">
              Projects
            </a>

            <a href="#about" className="cursor-pointer text-[#334155] hover:text-[#DB2777]">
              About
            </a>

            <a href="#contact" className="cursor-pointer text-[#334155] hover:text-[#DB2777]">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-[11px] font-medium text-[#334155] hover:text-[#DB2777] sm:text-sm">
              Sign In
            </button>

            <button
              className="rounded-full px-3 py-2 text-[11px] font-semibold text-white hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Sign Up
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="#" onClick={closeMenu} className="text-[#DB2777]">
                Home
              </a>

              <a href="#technologies" onClick={closeMenu} className="text-[#334155] hover:text-[#DB2777]">
                Technologies
              </a>

              <a href="#projects" onClick={closeMenu} className="text-[#334155] hover:text-[#DB2777]">
                Projects
              </a>

              <a href="#about" onClick={closeMenu} className="text-[#334155] hover:text-[#DB2777]">
                About
              </a>

              <a href="#contact" onClick={closeMenu} className="text-[#334155] hover:text-[#DB2777]">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar