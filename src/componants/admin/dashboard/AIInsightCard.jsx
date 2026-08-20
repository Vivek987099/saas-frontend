import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AIInsightCard() {
  return (
    <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-purple-950/40 border border-indigo-500/30 p-6 rounded-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
        <Sparkles className="w-24 h-24 text-indigo-400" />
      </div>
      <div className="flex items-center space-x-2 text-indigo-400 mb-3">
        <Sparkles className="w-5 h-5" />
        <span className="text-xs font-semibold tracking-wider uppercase">HAISDM AI Insight</span>
      </div>
      <h3 className="text-base font-semibold text-white mb-2">Velocity Optimization Recommended</h3>
      <p className="text-xs text-slate-300 leading-relaxed mb-4">
        Based on current sprint burn-down rates, your team has extra capacity to pull 2 backlog items from the upcoming milestone without risking quality metrics.
      </p>
      <button className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2 rounded-xl transition-all shadow-md shadow-indigo-600/30">
        Apply Suggestion
      </button>
    </div>
  );
}