import { ArrowUpRight, FolderKanban, Users } from 'lucide-react'

function ProjectCard({ project = { name: 'DevPulse Core SaaS', description: 'Enterprise agile analytics and DevOps telemetry integration platform.', status: 'Active', progress: 85, teamSize: 4 } }) {
  return (
      <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl relative group hover:border-indigo-500/50 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-indigo-600/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <FolderKanban className="w-5 h-5" />
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {project.status}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">{project.name}</h3>
        <p className="text-xs text-slate-400 leading-relaxed mb-6">{project.description}</p>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-800/80">
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs text-slate-400">
            <span>Progress</span>
            <span className="font-semibold text-white">{project.progress}%</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full transition-all" style={{ width: `${project.progress}%` }}></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center space-x-1.5">
            <Users className="w-3.5 h-3.5 text-slate-500" />
            <span>{project.teamSize} Members</span>
          </div>
          <button className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center space-x-1 transition-colors">
            <span>Manage</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard