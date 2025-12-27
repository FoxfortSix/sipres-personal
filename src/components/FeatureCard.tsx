import React from "react"

interface FeatureCardProps {
  icon: React.ReactNode; title: string; description: string; color: string;
}

export function FeatureCard({ icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow md:p-6 lg:flex lg:flex-col lg:items-center lg:text-center">
      <div className="flex gap-4 lg:flex-col lg:gap-3 items-center">
        <div className={`${color} text-white p-3 rounded-lg h-fit flex-shrink-0 md:p-4 lg:w-16 lg:h-16 lg:flex lg:items-center lg:justify-center`}>{icon}</div>
        <div className="flex-1">
          <h3 className="text-slate-800 mb-1 md:mb-2 font-semibold">{title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed md:text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}