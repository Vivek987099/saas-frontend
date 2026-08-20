import {
  ArrowRight,
  BarChart3,
  Cpu,
  Server,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Activity } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col justify-between selection:bg-indigo-500 selection:text-white font-sans scroll-smooth">
        {/* 1. NAVBAR */}
        <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800/80 sticky top-0 bg-[#0b0f19]/90 backdrop-blur-md z-50">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-600/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-wide">DevPulse AI</span>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#product" className="hover:text-white transition">
              Product
            </a>
            <a href="#how-it-works" className="hover:text-white transition">
              How It Works
            </a>
            <a href="#haisdm" className="hover:text-white transition">
              HAISDM
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </div>

          {/* Right Buttons */}
          <div className="space-x-4 flex items-center">
            <Link to={"/login"} className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition">
              Login
            </Link>
            <button className="px-5 py-2.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 rounded-xl transition shadow-lg shadow-indigo-600/30">
              Get Started
            </button>
          </div>
        </nav>

        {/* MAIN CONTAINER */}
        <main className="flex-1 max-w-6xl mx-auto px-6 py-16 w-full">
          {/* 2. HERO SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-32">
            <div className="md:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-800 text-indigo-400 text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" /> ALL-IN-ONE SOFTWARE
                DEVELOPMENT WORKSPACE
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight mb-6">
                Stop Switching Tools. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  Start Building Smarter.
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
                Agile planning, DevOps monitoring and AI-powered software
                insights — connected in one intelligent workspace.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 px-7 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-semibold text-base transition shadow-xl shadow-indigo-600/30">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-7 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-2xl font-semibold text-base text-gray-300 hover:text-white transition">
                  Explore Platform
                </button>
              </div>
            </div>

            {/* Hero Mini Card Preview */}
            <div className="md:col-span-5 flex justify-center">
              <div className="bg-gray-950 border border-gray-800 p-6 rounded-3xl shadow-2xl w-full max-w-sm relative">
                <div className="absolute -top-3 -right-3 bg-indigo-600 text-xs px-3 py-1 rounded-full font-bold shadow-md">
                  Live Preview
                </div>
                <div className="flex items-center space-x-2 mb-6 border-b border-gray-900 pb-3">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs text-gray-500 ml-2 font-mono">
                    devpulse.ai/workspace
                  </span>
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between bg-gray-900/60 p-3 rounded-xl border border-gray-800/60">
                    <span className="text-gray-400">Quality</span>
                    <span className="text-indigo-400 font-bold">9.1/10</span>
                  </div>
                  <div className="flex justify-between bg-gray-900/60 p-3 rounded-xl border border-gray-800/60">
                    <span className="text-gray-400">Sprint Progress</span>
                    <span className="text-emerald-400 font-bold">82%</span>
                  </div>
                  <div className="flex justify-between bg-gray-900/60 p-3 rounded-xl border border-gray-800/60">
                    <span className="text-gray-400">CI/CD Status</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      ✓ PASS
                    </span>
                  </div>
                  <div className="flex justify-between bg-gray-900/60 p-3 rounded-xl border border-gray-800/60">
                    <span className="text-gray-400">AI Telemetry</span>
                    <span className="text-purple-400 font-bold">3 Tips</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. PROBLEM SECTION */}
          <section className="mb-32 text-center bg-gray-950/40 border border-gray-900 rounded-3xl p-10">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-rose-400 mb-3">
              THE FRAGMENTATION PROBLEM
            </h2>
            <p className="text-3xl font-bold mb-12">
              Modern Development Is Too Fragmented
            </p>

            <div className="max-w-md mx-auto space-y-4 mb-8">
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl flex items-center justify-between">
                <span className="font-semibold text-gray-300">TASKS</span>
                <span className="text-xs text-gray-500 bg-gray-950 px-3 py-1 rounded-lg">
                  Jira etc.
                </span>
              </div>
              <div className="text-indigo-400 font-bold">↓</div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl flex items-center justify-between">
                <span className="font-semibold text-gray-300">
                  CI/CD PIPELINE
                </span>
                <span className="text-xs text-gray-500 bg-gray-950 px-3 py-1 rounded-lg">
                  Jenkins / GitHub
                </span>
              </div>
              <div className="text-indigo-400 font-bold">↓</div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-2xl flex items-center justify-between">
                <span className="font-semibold text-gray-300">
                  CODE QUALITY & AUDIT
                </span>
                <span className="text-xs text-gray-500 bg-gray-950 px-3 py-1 rounded-lg">
                  SonarQube
                </span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-gray-400">
              <span className="bg-rose-950/40 border border-rose-900/60 text-rose-300 px-4 py-2 rounded-xl">
                🔄 TOO MANY TABS
              </span>
              <span className="bg-rose-950/40 border border-rose-900/60 text-rose-300 px-4 py-2 rounded-xl">
                ⏱ LOST TIME
              </span>
              <span className="bg-rose-950/40 border border-rose-900/60 text-rose-300 px-4 py-2 rounded-xl">
                📉 LESS VISIBILITY
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-8 max-w-xl mx-auto">
              Too many tools. Too many dashboards. Too much context switching.
            </p>
          </section>

          {/* 4. SOLUTION SECTION */}
          <section id="product" className="mb-32 scroll-mt-28 text-center">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              THE UNIFIED SOLUTION
            </h2>
            <p className="text-3xl md:text-4xl font-bold mb-12">
              One Workspace. Everything Connected.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl hover:border-indigo-500 transition">
                <div className="bg-indigo-950 p-3.5 w-fit rounded-2xl text-indigo-400 mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">AGILE WORKSPACE</h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li>• Sprints Management</li>
                  <li>• Backlogs & Epics</li>
                  <li>• Kanban Boards</li>
                  <li>• Velocity Tracking</li>
                </ul>
              </div>

              <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl hover:border-indigo-500 transition">
                <div className="bg-indigo-950 p-3.5 w-fit rounded-2xl text-indigo-400 mb-6">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">DEVOPS TELEMETRY</h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li>• Real-time Builds</li>
                  <li>• CI/CD Pipeline Tracking</li>
                  <li>• Deployment Status</li>
                  <li>• System Monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-950 border border-gray-800 p-8 rounded-3xl hover:border-indigo-500 transition">
                <div className="bg-indigo-950 p-3.5 w-fit rounded-2xl text-indigo-400 mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI COPILOT</h3>
                <ul className="space-y-2.5 text-sm text-gray-400">
                  <li>• Code Quality Audits</li>
                  <li>• Smart AI Insights</li>
                  <li>• Automated Task Suggestions</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. HOW IT WORKS */}
          <section
            id="how-it-works"
            className="mb-32 bg-gray-950/60 border border-gray-800/80 rounded-3xl p-10 text-center scroll-mt-28"
          >
            <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              WORKFLOW ARCHITECTURE
            </h2>
            <p className="text-3xl font-bold mb-12">
              From Planning to Production — In One Flow
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
              <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl">
                <span className="text-indigo-400 font-mono text-xs font-bold">
                  01
                </span>
                <h4 className="text-xl font-bold mt-2 mb-3">PLAN</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• Sprints Planning</li>
                  <li>• Kanban Setup</li>
                  <li>• Backlog Grooming</li>
                </ul>
              </div>

              <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl">
                <span className="text-indigo-400 font-mono text-xs font-bold">
                  02
                </span>
                <h4 className="text-xl font-bold mt-2 mb-3">BUILD</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• CI/CD Integration</li>
                  <li>• Automated Builds</li>
                  <li>• Staging Deployments</li>
                </ul>
              </div>

              <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-2xl">
                <span className="text-indigo-400 font-mono text-xs font-bold">
                  03
                </span>
                <h4 className="text-xl font-bold mt-2 mb-3">IMPROVE</h4>
                <ul className="space-y-1.5 text-sm text-gray-400">
                  <li>• AI Insights Engine</li>
                  <li>• Quality Metrics</li>
                  <li>• Velocity Boosts</li>
                </ul>
              </div>
            </div>
            <div className="inline-block bg-indigo-950 border border-indigo-800 px-6 py-2.5 rounded-full text-indigo-300 font-bold text-sm">
              ↓ BETTER SOFTWARE DELIVERY
            </div>
          </section>

          {/* 6. PLATFORM PREVIEW */}
          <section className="mb-32 text-center">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              LIVE DEMONSTRATION
            </h2>
            <p className="text-3xl md:text-4xl font-bold mb-10">
              See DevPulse AI in Action
            </p>

            <div className="bg-gray-950 border border-gray-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden text-left max-w-4xl mx-auto mb-8">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <BarChart3 className="w-72 h-72 text-indigo-400" />
              </div>
              <div className="flex justify-between items-center mb-6 border-b border-gray-900 pb-4">
                <span className="text-sm font-bold text-gray-300">
                  YOUR ACTUAL WORKSPACE DASHBOARD
                </span>
                <span className="text-xs bg-indigo-950 text-indigo-400 px-3 py-1 rounded-full border border-indigo-800">
                  Telemetry Active
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900/60 p-4 rounded-2xl border border-gray-800">
                  <p className="text-xs text-gray-400">KPI Performance</p>
                  <p className="text-xl font-bold text-indigo-400 mt-1">
                    98.2% Efficiency
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-2xl border border-gray-800">
                  <p className="text-xs text-gray-400">Sprint Burndown</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">
                    On Track (42 pts)
                  </p>
                </div>
                <div className="bg-gray-900/60 p-4 rounded-2xl border border-gray-800">
                  <p className="text-xs text-gray-400">CI/CD Status</p>
                  <p className="text-xl font-bold text-emerald-400 mt-1">
                    All Builds Green
                  </p>
                </div>
              </div>
              <div className="bg-indigo-950/30 border border-indigo-900/50 p-4 rounded-2xl flex justify-between items-center">
                <div>
                  <p className="text-xs text-indigo-300 font-semibold">
                    Active AI Recommendation
                  </p>
                  <p className="text-sm text-gray-300 mt-0.5">
                    "Refactor memory pooling in authentication service to reduce
                    latency by 18%."
                  </p>
                </div>
                <span className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-xl font-semibold">
                  HAISDM Score: 94.8
                </span>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-gray-900 hover:bg-gray-800 border border-gray-700 rounded-2xl font-semibold transition">
              Explore Dashboard{" "}
              <ArrowRight className="w-4 h-4 text-indigo-400" />
            </button>
          </section>

          {/* 7. HAISDM - USP SECTION */}
          <section
            id="haisdm"
            className="mb-32 bg-gradient-to-b from-indigo-950/30 to-gray-950/60 border border-indigo-900/40 rounded-3xl p-10 text-center scroll-mt-28"
          >
            <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              RESEARCH USP
            </h2>
            <p className="text-3xl md:text-4xl font-bold mb-4">
              Powered by the HAISDM Approach
            </p>
            <p className="text-gray-400 max-w-xl mx-auto mb-12 text-sm">
              Combining structured Agile methodologies with advanced
              technological innovations for sustained SaaS success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12 text-left">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center">
                <p className="font-bold text-white mb-1">AGILE PRACTICES</p>
                <p className="text-xs text-gray-400">
                  Iterative delivery & sprints
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center">
                <p className="font-bold text-white mb-1">NOVEL APPROACHES</p>
                <p className="text-xs text-gray-400">
                  AI telemetry & automation
                </p>
              </div>
            </div>

            <div className="mb-12">
              <div className="inline-block bg-indigo-600 font-bold px-8 py-3 rounded-2xl shadow-lg shadow-indigo-600/30 text-white text-base">
                HAISDM ENGINE (Agile + Innovation)
              </div>
            </div>

            <div className="text-sm font-semibold text-indigo-300 mb-8">
              ↓ DRIVING 5 CORE OUTCOMES
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
                <p className="font-bold text-white text-sm">Software Quality</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
                <p className="font-bold text-white text-sm">Time-to-Market</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
                <p className="font-bold text-white text-sm">Scalability</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center">
                <p className="font-bold text-white text-sm">Reliability</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-4 rounded-xl text-center col-span-2 md:col-span-1">
                <p className="font-bold text-white text-sm">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </section>

          {/* 8. WHY DEVPULSE AI? */}
          <section className="mb-32 text-center">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-3">
              ADVANTAGE
            </h2>
            <p className="text-3xl font-bold mb-12">Why DevPulse AI?</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="bg-gray-950 border border-gray-800 p-6 rounded-2xl">
                <Zap className="w-6 h-6 text-indigo-400 mb-4" />
                <h4 className="font-bold text-base mb-2">Faster Development</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Reduce unnecessary tool switching and accelerate team
                  execution.
                </p>
              </div>

              <div className="bg-gray-950 border border-gray-800 p-6 rounded-2xl">
                <Activity className="w-6 h-6 text-indigo-400 mb-4" />
                <h4 className="font-bold text-base mb-2">Unified Visibility</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  See development health, code quality, and builds in one place.
                </p>
              </div>

              <div className="bg-gray-950 border border-gray-800 p-6 rounded-2xl">
                <Cpu className="w-6 h-6 text-indigo-400 mb-4" />
                <h4 className="font-bold text-base mb-2">
                  AI-Powered Insights
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Turn raw development telemetry into actionable engineering
                  insights.
                </p>
              </div>

              <div className="bg-gray-950 border border-gray-800 p-6 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-indigo-400 mb-4" />
                <h4 className="font-bold text-base mb-2">
                  Research-Driven Analytics
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Measure software success using the robust HAISDM framework.
                </p>
              </div>
            </div>
          </section>

          {/* 9. FINAL CTA */}
          <section
            id="about"
            className="bg-gradient-to-r from-indigo-950/80 via-purple-950/50 to-indigo-950/80 border border-indigo-500/40 rounded-3xl p-12 text-center shadow-2xl mb-16 scroll-mt-28"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Smarter Software?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Bring Agile, DevOps and AI together in one powerful workspace.
            </p>
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-semibold text-base transition shadow-xl shadow-indigo-600/30 inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
          </section>
        </main>

        {/* 10. FOOTER */}
        <footer
          id="footer"
          className="bg-[#080b13] border-t border-gray-800/80 pt-16 pb-10 px-8 text-left"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-3">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <span className="text-lg font-bold tracking-wide text-white">
                  DevPulse AI
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                AI-powered Agile & DevOps workspace for high-performing
                engineering teams. Developed by Saurav Kumar.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-300 mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <button className="hover:text-white transition">
                    Dashboard
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Sprints
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-300 mb-4">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <button className="hover:text-white transition">
                    Documentation
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Support
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-wider uppercase text-gray-300 mb-4">
                Research
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <button className="hover:text-white transition">
                    HAISDM Framework
                  </button>
                </li>
                <li>
                  <button className="hover:text-white transition">
                    Analytics
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-6xl mx-auto pt-8 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2026 DevPulse AI. All rights reserved.</p>
            <div className="space-x-4 mt-4 sm:mt-0">
              <span className="hover:text-gray-300 cursor-pointer">
                Privacy
              </span>
              <span>|</span>
              <span className="hover:text-gray-300 cursor-pointer">Terms</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
