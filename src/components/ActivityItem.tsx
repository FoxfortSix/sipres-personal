import { CheckCircle, XCircle } from 'lucide-react'

interface ActivityItemProps {
  title: string
  date: string
  status: 'success' | 'missed' | 'pending' | 'warning' | string
  icon: React.ReactNode
}

export function ActivityItem({ title, date, status, icon }: ActivityItemProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm md:p-5 border border-slate-100">
      <div className="flex items-center gap-3 md:gap-4">
        <div className={`${status === 'success' ? 'bg-blue-500' : 'bg-slate-400'} text-white p-2 rounded-lg flex-shrink-0 md:p-3`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-slate-800 text-sm mb-1 md:text-base font-medium">{title}</p>
          <p className="text-xs text-slate-500 md:text-sm">{date}</p>
        </div>
        <div className="flex-shrink-0">
          {status === 'success' ? (
            <CheckCircle className="w-5 h-5 text-green-500 md:w-6 md:h-6" />
          ) : (
            <XCircle className="w-5 h-5 text-red-500 md:w-6 md:h-6" />
          )}
        </div>
      </div>
    </div>
  )
}