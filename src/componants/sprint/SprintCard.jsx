import { Calendar } from 'lucide-react'

function SprintCard({ sprint = { name: 'Sprint 14 - AI Analytics Integration', goal: 'Deploy real-time velocity tracking and HAISDM charts.', startDate: 'Aug 10, 2026', endDate: 'Aug 24, 2026', status: 'Active' } }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl relative group hover:border-indigo-500/50 transition-all">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          {sprint.status}
        </span>
        <div className="flex items-center space-x-1.5 text-xs text-slate-400">
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          <span>{sprint.startDate} - {sprint.endDate}</span>
        </div>
      </div>
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{sprint.name}</h3>
      <p className="text-xs text-slate-400 leading-relaxed mb-6"><strong className="text-slate-300">Goal:</strong> {sprint.goal}</p>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
        <span className="text-slate-400">Backlog Items: 8 tasks</span>
        <button className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
          View Sprint Board &rarr;
        </button>
      </div>
    </div>
  )
}

export default SprintCard