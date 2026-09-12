import logo from "../assets/logo-text.png"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5">

        {/* Logo */}
        <div className="shrink-0">
          <img
            src={logo}
            alt="Dev Stack"
            className="h-9 w-auto"
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-7 text-sm font-medium">
          <a className="cursor-pointer  text-[#334155] hover:text-[#DB2777]">
            Home
          </a>

          <a className="cursor-pointer text-[#334155] hover:text-[#DB2777]">
            Technologies
          </a>

          <a className="cursor-pointer text-gray-600 hover:text-pink-500">
            Projects
          </a>

          <a className="cursor-pointer text-gray-600 hover:text-pink-500">
            About
          </a>

          <a className="cursor-pointer text-gray-600 hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex shrink-0 items-center gap-5">
          <button className="text-sm font-medium text-[#334155] hover:text-[#DB2777]">
            Sign In
          </button>

          <button className="rounded-full bg-[#DB2777] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
  Sign Up
</button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar