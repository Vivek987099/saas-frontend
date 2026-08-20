import KanbanColumn from "./KanbanColumn";

function KanbanBoard() {

     const columns = [
    {
      title: 'Backlog',
      tasks: [
        { title: 'Configure HAISDM database schemas', tag: 'Backend', points: 8 },
        { title: 'Write unit tests for authentication', tag: 'QA', points: 3 }
      ]
    },
    {
      title: 'In Progress',
      tasks: [
        { title: 'Build component-based architecture', tag: 'Frontend', points: 5 },
        { title: 'Integrate telemetry metrics API', tag: 'DevOps', points: 5 }
      ]
    },
    {
      title: 'Review',
      tasks: [
        { title: 'Refactor login screen & role selection', tag: 'Frontend', points: 3 }
      ]
    },
    {
      title: 'Done',
      tasks: [
        { title: 'Initialize Vite React project structure', tag: 'Setup', points: 2 },
        { title: 'Configure Tailwind CSS and Lucide icons', tag: 'Setup', points: 2 }
      ]
    }
  ];
  return (
     <div className="flex items-start gap-6 overflow-x-auto pb-4">
      {columns.map((col, idx) => (
        <KanbanColumn key={idx} title={col.title} tasks={col.tasks} />
      ))}
    </div>
  )
}

export default KanbanBoard