import technologies from "../data/technologies.json"
import TechnologyCard from "./TechnologyCard"

function Technologies() {
  return (
    <section className="bg-white px-5 py-16">
      <div className="mx-auto max-w-[1200px]">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-[#0F172A]">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-sm text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>


        {/* Cards + Stack */}
        <div className="grid gap-5 lg:grid-cols-4">

          {/* Technology cards */}
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
      </div>
    </section>
  )
}

export default Technologies