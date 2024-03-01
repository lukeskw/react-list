import { Task as TaskComponent } from './Task'

export interface Task {
  id: string
  title: string
  isFinished: boolean
}

interface TaskListProps {
  tasks: Task[]
  onToggleTaskFinished: (taskId: string) => void
  onDeleteTask: (taskId: string) => void
}

export function TaskList({
  tasks,
  onToggleTaskFinished,
  onDeleteTask,
}: TaskListProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between text-blue-600 font-bold py-4">
        <h1 className="flex gap-2 items-center justify-center">
          Tasks created
          <span className="py-1 px-2 bg-zinc-800 rounded-xl text-white">
            {tasks.length}
          </span>
        </h1>
        <h1 className="flex gap-2 items-center justify-center">
          Finished
          <span className="py-1 px-2 bg-zinc-800 rounded-xl text-white">
            {tasks.filter((task) => task.isFinished).length} of {tasks.length}
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {tasks.map((task) => (
          <TaskComponent
            key={task.id}
            task={task}
            onToggleTaskFinished={onToggleTaskFinished}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  )
}
