import React from 'react'

function MetricCard({ title, value, change, isPositive, icon: Icon }) {
  return (
     <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl relative group hover:border-indigo-500/50 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-slate-400">{title}</span>
        {Icon && (
          <div className="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        {change && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  )
}

export default MetricCard