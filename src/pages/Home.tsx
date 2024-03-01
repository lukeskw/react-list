import { useState } from 'react'
import { AddFormTask } from '../components/AddTaskForm'
import { Header } from '../components/Header'
import { TaskList, Task } from '../components/TaskList'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleToggleTaskFinished(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isFinished: !task.isFinished,
        }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function handleTaskDelete(taskId: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks)
  }

  return (
    <main className="w-screen h-screen bg-zinc-900 text-white flex flex-col items-center pb-6">
      <Header />
      <div className="max-w-xl w-full flex flex-col items-center gap-16">
        <AddFormTask tasks={tasks} setTasks={setTasks} />
        <TaskList
          tasks={tasks}
          onToggleTaskFinished={handleToggleTaskFinished}
          onDeleteTask={handleTaskDelete}
        />
      </div>
    </main>
  )
}
