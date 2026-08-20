import { TrendingDown } from 'lucide-react';

function BurndownChart() {
     const dataPoints = [
    { day: 'Day 1', ideal: 32, actual: 32 },
    { day: 'Day 3', ideal: 24, actual: 26 },
    { day: 'Day 5', ideal: 16, actual: 18 },
    { day: 'Day 7', ideal: 8, actual: 10 },
    { day: 'Day 10', ideal: 0, actual: 4 },
  ];
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingDown className="w-5 h-5 text-indigo-400" />
          <h3 className="text-base font-semibold text-white">Sprint Burndown Analysis</h3>
        </div>
        <span className="text-xs text-slate-400">On Track</span>
      </div>
      <div className="h-44 flex items-end justify-between gap-4 pt-6 px-2 border-b border-slate-800 pb-2">
        {dataPoints.map((d) => (
          <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
            <div className="w-full flex items-end justify-center gap-1 h-full">
              {/* Ideal bar */}
              <div 
                className="w-2 bg-slate-700/60 rounded-t"
                style={{ height: `${(d.ideal / 35) * 100}%` }}
                title={`Ideal: ${d.ideal}`}
              ></div>
              {/* Actual bar */}
              <div 
                className="w-2 bg-indigo-600 rounded-t"
                style={{ height: `${(d.actual / 35) * 100}%` }}
                title={`Actual: ${d.actual}`}
              ></div>
            </div>
            <span className="text-[10px] text-slate-500">{d.day}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-6 mt-4 text-xs text-slate-400">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-slate-700 rounded-full"></span>
          <span>Ideal Burn</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></span>
          <span>Actual Remaining</span>
        </div>
      </div>
    </div>
  )
}

export default BurndownChart