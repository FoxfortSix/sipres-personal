import React from "react"

interface QuickActionProps {
  icon: React.ReactNode
  label: string
  color: string
}

export function QuickAction({ icon, label, color }: QuickActionProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all active:scale-95 md:p-5 lg:p-6 w-full cursor-pointer h-full flex flex-col items-center justify-center">
      <div className={`${color} text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 md:w-14 md:h-14 lg:w-16 lg:h-16`}>
        {icon}
      </div>
      <p className="text-sm text-slate-700 text-center md:text-base font-medium">{label}</p>
    </div>
  )
}