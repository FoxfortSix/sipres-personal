interface StatsCardProps {
  value: string | number
  label: string
  color: string
}

export function StatsCard({ value, label, color }: StatsCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm text-center md:p-5 lg:p-6">
      <div className={`${color} text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:w-14 md:h-14 lg:w-16 lg:h-16`}>
        <span className="text-xl md:text-2xl lg:text-3xl font-bold">{value}</span>
      </div>
      <p className="text-xs text-slate-600 md:text-sm font-medium">{label}</p>
    </div>
  )
}