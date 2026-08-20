import { ArrowRight, Filter, Plus, Sparkles, X } from "lucide-react";
import ProjectCard from "../../componants/project/ProjectCard";
import { useGetAllProjectsQuery } from "../../feature/project/projectApi";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import CreateProjectModel from "../../componants/project/CreateProjectModel";

function Projects() {
  const { data = [], isLoading } = useGetAllProjectsQuery();
  const [open, setOpen] = useState(true);

  if (isLoading) {
    return (
      // skeleton for laoding
      <div className="space-y-6 animate-pulse">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="space-y-2">
            {/* Title */}
            <div className="h-7 w-56 bg-slate-800 rounded-lg" />

            {/* Description */}
            <div className="h-4 w-80 max-w-[80vw] bg-slate-800 rounded-md" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <div className="h-9 w-24 bg-slate-800 rounded-xl" />
            <div className="h-9 w-32 bg-slate-800 rounded-xl" />
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-5"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  {/* Project Icon */}
                  <div className="w-10 h-10 bg-slate-800 rounded-xl" />

                  <div className="space-y-2">
                    {/* Project Name */}
                    <div className="h-4 w-28 bg-slate-800 rounded-md" />

                    {/* Project Type */}
                    <div className="h-3 w-20 bg-slate-800 rounded-md" />
                  </div>
                </div>

                {/* Status */}
                <div className="h-6 w-16 bg-slate-800 rounded-full" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="h-3 w-full bg-slate-800 rounded-md" />
                <div className="h-3 w-4/5 bg-slate-800 rounded-md" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/60 rounded-xl p-3 space-y-2">
                  <div className="h-3 w-16 bg-slate-700 rounded" />
                  <div className="h-5 w-10 bg-slate-700 rounded" />
                </div>

                <div className="bg-slate-800/60 rounded-xl p-3 space-y-2">
                  <div className="h-3 w-16 bg-slate-700 rounded" />
                  <div className="h-5 w-10 bg-slate-700 rounded" />
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-3 w-20 bg-slate-800 rounded" />
                  <div className="h-3 w-8 bg-slate-800 rounded" />
                </div>

                <div className="h-2 w-full bg-slate-800 rounded-full" />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2">
                {/* Members */}
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-900" />
                  <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-900" />
                  <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-900" />
                </div>

                {/* View button */}
                <div className="h-8 w-20 bg-slate-800 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        {/* ================================= */}
        <CreateProjectModel open={open} setOpen={setOpen} ></CreateProjectModel>
        {/* =============================== */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Projects Workspace
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage all active software development & HAISDM research pipelines.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 px-4 py-2 rounded-xl text-xs font-medium flex items-center space-x-2 transition-all">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter</span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="bg-indigo-600 cursor-pointer hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-xs font-medium flex items-center space-x-2 shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Project</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
