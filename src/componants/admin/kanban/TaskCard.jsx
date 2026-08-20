import { CheckSquare, MoreHorizontal } from 'lucide-react'

function TaskCard({ task = { title: 'Implement AI Analytics UI', tag: 'Frontend', points: 5 }} ) {
  return (
      <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl hover:border-indigo-500/50 transition-all cursor-grab active:cursor-grabbing">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
          {task.tag}
        </span>
        <button className="text-slate-500 hover:text-slate-300">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      <h4 className="text-xs font-semibold text-white mb-3 leading-relaxed">{task.title}</h4>
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] text-slate-400">
        <span className="flex items-center space-x-1">
          <CheckSquare className="w-3 h-3 text-slate-500" />
          <span>{task.points} pts</span>
        </span>
        <div className="w-5 h-5 rounded-full bg-indigo-600/30 text-indigo-300 font-bold flex items-center justify-center text-[9px]">
          SK
        </div>
      </div>
    </div>
  )
}

export default TaskCard