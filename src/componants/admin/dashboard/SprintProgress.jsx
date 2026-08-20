import React from 'react';

export default function SprintProgress() {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-white">Sprint 14 Progress</h3>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Active</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Completed: 24 / 32 Story Points</span>
          <span className="font-semibold text-white">75%</span>
        </div>
        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
          <div className="bg-indigo-600 h-full rounded-full transition-all duration-500" style={{ width: '75%' }}></div>
        </div>
      </div>
      <p className="text-xs text-slate-500 mt-4">4 days remaining in current sprint cycle.</p>
    </div>
  );
}