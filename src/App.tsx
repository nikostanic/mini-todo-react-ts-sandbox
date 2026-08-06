import { TaskCard } from './components/taskCard';
import { tasksMock } from './mock/tasksMock';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Task List</h1>
      <div className="task-list">
        {tasksMock.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default App
