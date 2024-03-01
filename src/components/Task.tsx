import { Trash, Circle, CheckCircle } from 'phosphor-react'
import { Task as ITask } from './TaskList'

interface TaskProps {
  task: ITask
  onToggleTaskFinished: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export function Task({ task, onToggleTaskFinished, onDeleteTask }: TaskProps) {
  return (
    <div
      key={task.id}
      className={`bg-zinc-800 w-full rounded-md px-4 py-2 flex gap-2 items-center justify-center ${task.isFinished ? 'line-through' : ''}`}
    >
      <div className="">
        <button
          type="button"
          onClick={() => {
            onToggleTaskFinished(task.id)
          }}
        >
          {task.isFinished ? (
            <CheckCircle weight="fill" className="h-4 w-4 text-blue-500" />
          ) : (
            <Circle className="h-4 w-4 text-blue-500" />
          )}
        </button>
      </div>
      <div className="flex-1">
        <h1>{task.title}</h1>
      </div>
      <button
        type="button"
        onClick={() => {
          onDeleteTask(task.id)
        }}
      >
        <Trash className="w-4 h-4" />
      </button>
    </div>
  )
}
