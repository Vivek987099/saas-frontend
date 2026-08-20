import { Bell, Search } from 'lucide-react'
import React from 'react'

function Topbar() {
  return (
    <header className="h-16 bg-slate-950/80 border-b border-slate-800 px-8 flex items-center justify-between sticky top-0 z-40 backdrop-blur-md">
      <div className="flex items-center space-x-3">
        <h2 className="text-lg font-bold text-white capitalize">Dashboard</h2>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search projects, sprints, metrics..."
            className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 pl-9 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-64 transition-all"
          />
        </div>

        {/* Notifications Icon */}
        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-xl transition-all relative border border-slate-800/60">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
        </button>
      </div>
    </header>
  )
}

export default Topbar