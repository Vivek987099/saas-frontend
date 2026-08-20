import React from 'react'

function DevOps() {
  return (
   <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white mb-2">DevOps CI/CD Telemetry</h1>
      <Pipeline />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Recent Builds</h3>
          <BuildCard />
          <BuildCard build={{ id: '#4820', branch: 'feature/auth', commitMsg: 'Add role-based login selection and token storage', status: 'Success', duration: '2m 10s', time: '1 hour ago' }} />
        </div>
        <div>
          <DeploymentHistory />
        </div>
      </div>
    </div>
  )
}

export default DevOps