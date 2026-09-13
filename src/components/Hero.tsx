import banner from "../assets/banner-stack.png"

function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex min-h-[520px] max-w-[1200px] flex-col items-center justify-between gap-10 px-5 py-12 sm:gap-12 sm:py-16 lg:flex-row lg:gap-12">

        {/* Left side */}
        <div className="w-full max-w-[560px] text-center lg:text-left">

          <h1 className="text-4xl font-bold leading-tight text-[#0F172A] sm:text-5xl">
            Build Your Ideal
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[520px] text-sm leading-6 text-[#334155] sm:mt-6 sm:text-base lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">

            <button
              className="rounded-lg px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Explore Technologies
            </button>

            <button className="rounded-lg border border-[#E2E8F0] px-8 py-3 text-sm font-medium text-[#334155] hover:bg-[#F1F5F9]">
              Learn More
            </button>

          </div>
        </div>

        {/* Right side */}
        <div className="flex w-full shrink-0 justify-center lg:w-auto">
          <img
            src={banner}
            alt="Development stack illustration"
            className="w-full max-w-[300px] object-contain sm:max-w-[380px]"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero