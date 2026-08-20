import { BarChart3 } from 'lucide-react';

function VelocityChart() {
      const sprints = [
    { name: 'Sprint 11', value: 28 },
    { name: 'Sprint 12', value: 32 },
    { name: 'Sprint 13', value: 30 },
    { name: 'Sprint 14', value: 36 },
  ];
  return (
     <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          <h3 className="text-base font-semibold text-white">Team Velocity Trend</h3>
        </div>
        <span className="text-xs text-slate-400">Avg: 31.5 pts</span>
      </div>
      <div className="h-40 flex items-end justify-between gap-4 pt-4 px-2 border-b border-slate-800 pb-2">
        {sprints.map((s) => (
          <div key={s.name} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <span className="text-[10px] text-slate-400 font-medium">{s.value}</span>
            <div 
              className="w-full bg-indigo-600/80 hover:bg-indigo-500 rounded-t-lg transition-all"
              style={{ height: `${(s.value / 40) * 100}%` }}
            ></div>
            <span className="text-[10px] text-slate-500">{s.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VelocityChart