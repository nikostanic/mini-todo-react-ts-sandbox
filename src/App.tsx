import { TaskCard } from './components/taskCard';
import { useTasks } from './hooks/useTasks';

import './App.css';
import { Oval } from 'react-loader-spinner';


function App() {
  const { tasks, loading, error } = useTasks();

  return (
    <div className="App p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">Task List</h1>
      
      {loading && (
        <div className="flex justify-center my-8">
          <Oval 
            height={60} 
            width={60} 
            color="#3b82f6" 
            secondaryColor="#93c5fd" 
          />
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg my-4">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid gap-4 md:grid-cols-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
