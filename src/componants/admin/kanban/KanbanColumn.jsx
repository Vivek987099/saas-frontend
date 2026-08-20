import { Plus } from 'lucide-react'
import React from 'react'
import TaskCard from './TaskCard'

function KanbanColumn({ title = 'In Progress', tasks = [{ title: 'Design Sidebar Layout', tag: 'UI', points: 3 }, { title: 'Setup Tailwind Config', tag: 'Core', points: 2 }] }) {
  return (
     <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col min-w-[280px] flex-1">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center space-x-2">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">{title}</h3>
          <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-semibold flex items-center justify-center">
            {tasks.length}
          </span>
        </div>
        <button className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors">
          <Plus className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto">
        {tasks.map((task, idx) => (
          <TaskCard key={idx} task={task} />
        ))}
      </div>
    </div>
  )
}

export default KanbanColumn