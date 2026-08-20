import React from 'react'
import KanbanBoard from '../../componants/admin/kanban/KanbanBoard'

function Kanban() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Agile Kanban Board</h1>
          <p className="text-slate-400 text-sm">Drag and track tasks across sprint stages.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-lg shadow-indigo-600/30 transition-all">
          + Add Task
        </button>
      </div>
      <KanbanBoard />
    </div>
  )
}

export default Kanban