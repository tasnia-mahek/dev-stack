import banner from "../assets/banner-stack.png"

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[520px] max-w-[1200px] items-center justify-between gap-12 px-5 py-16">

        {/* Left side */}
        <div className="max-w-[560px]">

          <h1 className="text-5xl font-bold leading-tight text-[#0F172A]">
            Build Your Ideal
            <br />
            <span className="bg-clip-text text-transparent"
style={{ backgroundImage: "var(--brand-gradient)" }}>
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] text-base leading-6 text-[#334155]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center gap-3">

            <button className="rounded-lg px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
style={{ backgroundImage: "var(--brand-gradient)" }}>
              Explore Technologies
            </button>

            <button className="rounded-lg border border-[#E2E8F0] px-8 py-3 text-sm font-medium text-[#334155] hover:bg-[#F1F5F9]">
              Learn More
            </button>

          </div>
        </div>

        {/* Right side */}
        <div className="flex shrink-0 justify-center">
          <img
            src={banner}
            alt="Development stack illustration"
            className="w-[380px] object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero