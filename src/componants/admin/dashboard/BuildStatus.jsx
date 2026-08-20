import { CheckCircle2, GitCommit } from 'lucide-react';

export default function BuildStatus() {
  return (
    <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-white">CI/CD Build Status</h3>
        <span className="inline-flex items-center space-x-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Passing</span>
        </span>
      </div>
      <div className="space-y-3 bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl">
        <div className="flex items-center space-x-2 text-xs text-slate-400">
          <GitCommit className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-mono text-slate-300">git commit #8f92a1c</span>
        </div>
        <p className="text-xs text-slate-300 font-medium">Refactor frontend layout components and sidebar navigation links.</p>
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 text-[11px] text-slate-500">
          <span>Branch: main</span>
          <span>2 mins ago</span>
        </div>
      </div>
    </div>
  );
}