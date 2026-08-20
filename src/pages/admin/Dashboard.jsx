import MetricCard from '../../componants/admin/dashboard/MetricCard'
import { Activity, CheckSquare, GitCommit, ShieldCheck } from 'lucide-react'
import VelocityChart from '../../componants/admin/dashboard/VelocityChart'
import SprintProgress from '../../componants/admin/dashboard/SprintProgress'
import BuildStatus from '../../componants/admin/dashboard/BuildStatus'
import AIInsightCard from '../../componants/admin/dashboard/AIInsightCard'

function Dashboard() {
  return (
     <div className="space-y-6">
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Sprint Velocity" value="36 pts" change="+12%" isPositive={true} icon={Activity} />
        <MetricCard title="Open Bugs" value="3" change="-2" isPositive={true} icon={ShieldCheck} />
        <MetricCard title="Tasks Completed" value="24/32" change="+8%" isPositive={true} icon={CheckSquare} />
        <MetricCard title="CI/CD Success" value="99.4%" change="+0.2%" isPositive={true} icon={GitCommit} />
      </div>

      {/* Charts & Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <VelocityChart />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SprintProgress />
            <BuildStatus />
          </div>
        </div>
        <div>
          <AIInsightCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard