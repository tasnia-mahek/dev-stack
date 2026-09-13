import logo from "../assets/logo-text.png"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex min-h-[72px] max-w-[1200px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">

        {/* Logo */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Dev Stack"
            className="h-8 w-auto sm:h-9"
          />
        </div>

        {/* Navigation */}
        <div className="order-3 flex w-full items-center justify-center gap-4 overflow-x-auto text-xs font-medium sm:order-none sm:w-auto sm:gap-5 sm:text-sm lg:gap-7">

          <a className="shrink-0 cursor-pointer text-[#334155] hover:text-[#DB2777]">
            Home
          </a>

          <a className="shrink-0 cursor-pointer text-[#334155] hover:text-[#DB2777]">
            Technologies
          </a>

          <a className="shrink-0 cursor-pointer text-gray-600 hover:text-pink-500">
            Projects
          </a>

          <a className="shrink-0 cursor-pointer text-gray-600 hover:text-pink-500">
            About
          </a>

          <a className="shrink-0 cursor-pointer text-gray-600 hover:text-pink-500">
            Contact
          </a>

        </div>

        {/* Authentication */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">

          <button className="text-xs font-medium text-[#334155] hover:text-[#DB2777] sm:text-sm">
            Sign In
          </button>

          <button
            className="rounded-full px-4 py-2 text-xs font-semibold text-white hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
            style={{ backgroundImage: "var(--brand-gradient)" }}
          >
            Sign Up
          </button>

        </div>

      </div>
    </nav>
  )
}

export default Navbar