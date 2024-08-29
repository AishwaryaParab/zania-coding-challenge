import { useState } from 'react'
import './App.css'
import Task from './components/task/Task'
import { tasksData } from './utils/tasks'
import { TaskItem } from './utils/model';

function App() {
  const [tasks, setTasks] = useState<TaskItem[]>(tasksData);

  const handleDelete = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const handleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) => (
      task.id === id ? {...task, status: "completed"} : task
    ))
    setTasks(updatedTasks);

    // For add tasks
    // setTasks((prevTasks) => [...prevTasks, {id, title, desc, category, status}])
  }


  return (
    <>
      <button className='add-task'>Add Task</button>

      <input placeholder='Search by category' />
      <button className='search'>Search</button>
      <button className='cancel'>Cancel</button>

      <div className="tasks">
        {tasks?.map((task) => (
          <Task
            key={task.id}
            {...task}
            onDelete={handleDelete}
            onComplete={handleComplete}
          />
        ))}
      </div>
    </>
  )
}

export default App
