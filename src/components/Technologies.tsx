import TechnologyCard from "./TechnologyCard"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"

function Technologies() {
  const [technologies, setTechnologies] = useState([])
  const [loading, setLoading] = useState(true)
  const [stack, setStack] = useState([])

  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
  setTechnologies(data)

  setTimeout(() => {
    setLoading(false)
  }, 1000)
})
  }, [])

  const handleAdd = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setStack([...stack, technology])
    toast.success(`${technology.name} added to your stack!`)
  }

  const handleRemove = (technology) => {
    setStack(stack.filter((item) => item.id !== technology.id))
    toast.info(`${technology.name} removed from your stack.`)
  }

  const handleRemoveAll = () => {
    setStack([])
    toast.info("All technologies removed from your stack.")
  }

  return (
    <section className="bg-white px-5 py-16">
      {/* Heading */}
      <div className="mb-8 text-left">
        <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#0F172A] lg:text-[44px]">
          Explore{" "}
          <span
  className="bg-clip-text text-transparent"
  style={{ backgroundImage: "var(--brand-gradient)" }}
>
  Technologies
</span>
        </h2>

        <p className="mt-2 text-[15px] font-normal text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Cards + Your Stack */}
      <div className="grid items-start gap-5 lg:grid-cols-4">

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
          {loading ? (
            <p className="col-span-full text-center text-slate-500">
              Loading technologies...
            </p>
          ) : (
            technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isAdded={stack.some((item) => item.id === technology.id)}
              />
            ))
          )}
        </div>

        {/* Your Stack */}
        <aside className="rounded-xl border border-[#E2E8F0] bg-white p-4">
          <h3 className="font-semibold text-[#0F172A]">
            Your Stack
          </h3>

          <p className="mt-1 text-xs text-[#94A3B8]">
            {stack.length} Technology{stack.length !== 1 ? "ies" : ""} Selected
          </p>

          {stack.length === 0 && (
            <div className="mt-5 flex min-h-[120px] items-center justify-center rounded-lg border border-dashed border-[#E2E8F0]">
              <p className="text-xs text-[#94A3B8]">
                Your stack is empty.
              </p>
            </div>
          )}

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 border-b border-[#E2E8F0] py-3"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8"
              />

              <div className="flex-1">
                <p className="text-sm font-semibold text-[#0F172A]">
                  {technology.name}
                </p>

                <p className="text-xs text-[#64748B]">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => handleRemove(technology)}
                className="text-sm text-[#94A3B8]"
              >
                ✕
              </button>
            </div>
          ))}

          {stack.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="mt-4 w-full rounded-md border border-red-200 py-2 text-xs font-bold text-red-500 hover:bg-red-50"
            >
              Remove All
            </button>
          )}
        </aside>

      </div>
    </section>
  )
}

export default Technologies