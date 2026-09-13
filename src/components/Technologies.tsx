import technologies from "../data/technologies.json"
import TechnologyCard from "./TechnologyCard"

function Technologies() {
  return (
    <section className="bg-white px-5 py-16">
      {/* Heading */}
      <div className="mb-8 text-left">
        <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#0F172A] lg:text-[44px]">
          Explore{" "}
          <span className="bg-gradient-to-r from-[#D946EF] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-[15px] font-normal text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards + Your Stack */}
      <div className="grid gap-5 lg:grid-cols-4">

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

        {/* Your Stack */}
        <aside className="rounded-xl border border-[#E2E8F0] bg-white p-4">
          <h3 className="font-semibold text-[#0F172A]">
            Your Stack
          </h3>

          <p className="mt-1 text-xs text-[#94A3B8]">
            No technologies selected yet.
          </p>

          <div className="mt-5 flex min-h-[120px] items-center justify-center rounded-lg border border-dashed border-[#E2E8F0]">
            <p className="text-xs text-[#94A3B8]">
              Your stack is empty.
            </p>
          </div>
        </aside>

      </div>
    </section>
  )
}

export default Technologies