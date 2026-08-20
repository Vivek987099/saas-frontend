import React from 'react'
import SprintCard from '../../componants/sprint/SprintCard'
import BurndownChart from '../../componants/sprint/BurndownChart'

function Sprints() {
  return (
     <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold text-white">Sprint Management</h1>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-lg shadow-indigo-600/30 transition-all">
          + Plan New Sprint
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          <SprintCard />
        </div>
        <div className="lg:col-span-2">
          <BurndownChart />
        </div>
      </div>
    </div>
  )
}

export default Sprints