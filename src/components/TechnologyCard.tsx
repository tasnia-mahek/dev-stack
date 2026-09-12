type Technology = {
  id: number
  name: string
  category: string
  description: string
  icon: string
  rating: number
  difficulty: string
  badge: string
}

type TechnologyCardProps = {
  technology: Technology
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <div className="flex min-h-[220px] flex-col rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm">

      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-7 w-7"
        />

        <span className="rounded-full bg-pink-50 px-2 py-1 text-[9px] font-medium text-[#DB2777]">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-3 text-sm font-semibold text-[#0F172A]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-1 flex-1 text-[10px] leading-4 text-[#64748B]">
        {technology.description}
      </p>

      {/* Info */}
      <div className="mt-3 flex items-center justify-between text-[9px] text-[#64748B]">
        <span className="rounded bg-[#F1F5F9] px-2 py-1">
          {technology.category}
        </span>

        <span>{technology.difficulty}</span>

        <span className="text-[#DB2777]">
          ★ {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button className="mt-3 w-full rounded-md bg-[#0F172A] py-2 text-[10px] font-medium text-white hover:bg-[#334155]">
        Add to Stack
      </button>

    </div>
  )
}

export default TechnologyCard