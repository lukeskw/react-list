import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './TaskList'

interface AddFormTaskProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

export function AddFormTask({ tasks, setTasks }: AddFormTaskProps) {
  const [newTaskInput, setNewTaskInput] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskInput(event.target.value)
  }

  function handleTaskCreation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (newTaskInput === '') {
      return
    }
    const newTask = {
      id: String(tasks.length + 1),
      title: newTaskInput,
      isFinished: false,
    }
    setTasks([...tasks, newTask])
    setNewTaskInput('')
  }

  return (
    <form
      onSubmit={handleTaskCreation}
      className="w-full flex gap-4 -mt-7"
      action=""
    >
      <input
        type="text"
        className="px-4 py-2 flex-1 rounded-md bg-zinc-800 outline-none focus:ring-1 ring-zinc-700"
        placeholder="Add a new task"
        name="task"
        value={newTaskInput}
        onChange={handleNewTaskChange}
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 rounded-md p-4 flex items-center justify-center"
      >
        Add +
      </button>
    </form>
  )
}
