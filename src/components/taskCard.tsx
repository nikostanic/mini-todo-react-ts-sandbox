import type { Task, TaskStatus } from "../types/task";

const statusStyles: Record<TaskStatus, string> = {
    'todo': 'bg-slate-100 text-slate-700 border-slate-300',
    'in-progress':  'bg-blue-100 text-blue-800 border-blue-300',
    'done': 'bg-emerald-100 text-emerald-800 border-emerald-300',
}

interface TaskCardProps {
    task: Task;
}

// TaskCard component to display individual task details
export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-slate-800">{task.title}</h3>
        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${statusStyles[task.status]}`}>
          {task.status}
        </span>
      </div>
      
      <p className="text-slate-600 text-sm mb-4">
        { task.description || "No description provided."}
      </p>

      <div className="text-xs text-slate-400">
        Created: {task.createdAt.toLocaleDateString()}
      </div>
    </div>
  );
};