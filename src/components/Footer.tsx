function Footer() {
  return (
    <footer className="bg-white text-[#0F172A] border-t border-[#F1F5F9] pt-16 pb-12">
      <div className="mx-auto max-w-[1200px] px-5">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          
          <div className="lg:col-span-2">
            
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-[#D946EF] via-[#EC4899] to-[#8B5CF6] text-xs font-bold text-white">
                DS
              </span>
              <span className="text-xl font-bold text-[#0F172A]">
                Dev <span className="text-[#EC4899]">Stack</span>
              </span>
            </div>

          
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#64748B]">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            
            <div className="mt-6 flex items-center gap-5 text-sm font-semibold text-[#0F172A]">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#EC4899] transition">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#EC4899] transition">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#EC4899] transition">
                LinkedIn
              </a>
            </div>
          </div>

         
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#0F172A] uppercase">
              Product
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#64748B]">
              <li>
                <a href="#home" className="hover:text-[#0F172A] transition">Home</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-[#0F172A] transition">Technologies</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#0F172A] transition">Projects</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#0F172A] uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#64748B]">
              <li>
                <a href="#about" className="hover:text-[#0F172A] transition">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0F172A] transition">Contact</a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#0F172A] transition">Careers</a>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-xs font-bold tracking-wider text-[#0F172A] uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#64748B]">
              <li>
                <a href="#privacy" className="hover:text-[#0F172A] transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#0F172A] transition">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

  
        <div className="mt-14 border-t border-[#F1F5F9]"></div>

        
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-xs text-[#94A3B8] sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#64748B] transition">Privacy</a>
            <a href="#terms" className="hover:text-[#64748B] transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer