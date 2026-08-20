import {
  BarChart3,
  CheckSquare,
  Cpu,
  FolderKanban,
  Home,
  Kanban,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Sidebar({data}) {

  const menuItems = [
    { path: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { path: "/admin/projects", label: "Projects", icon: FolderKanban },
    { path: "/admin/kanban", label: "Kanban Board", icon: Kanban },
    { path: "/admin/devops", label: "DevOps CI/CD", icon: Cpu },
    { path: "/admin/analytics", label: "HAISDM Analytics", icon: BarChart3 },
    { path: "/admin/settings", label: "Settings", icon: Settings },
  ];
  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800 flex flex-col h-screen sticky top-0">
      {/* Brand Header */}
      <div className="h-16 px-6 flex items-center space-x-3 border-b border-slate-800">
        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight text-white">
          DevPulse AI
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
        {/* Home Button Added at the Top */}
        <Link to={"/"} className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all text-indigo-400 bg-indigo-950/40 border border-indigo-900/50 hover:bg-indigo-900/60 mb-4 shadow-sm">
          <Home className="w-5 h-5" />
          <span>Home Page</span>
        </Link>

        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/60"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* User Footnote / Info */}
      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-900/60 border border-slate-800 p-3 rounded-xl flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 font-bold flex items-center justify-center text-xs">
            { data?.email?.charAt(0)?.toUpperCase() }
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-semibold text-white truncate">
              {data?.email}
            </p>
            <p className="text-[10px] text-slate-400 truncate">
              {data?.role}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
