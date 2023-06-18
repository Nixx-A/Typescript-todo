
export function Todo ({ task, completed }: { task: string, completed: boolean }): JSX.Element {
  console.log(task)

  return (
    <section>
      <ul className="flex gap-2 mx-2 bg-blue-200/20 p-1 justify-start items-cente">
        <input className="relative top-0.5" type="checkbox" name="complete" />
        <li>{task}</li>
      </ul>
    </section>
  )
}

interface todoObject {
  todos: []
}

interface list {
  id: string
  task: string
  completed: boolean
}

export function TodoList (todos: todoObject): JSX.Element {
  return (
    <div className="mt-4">
      {
        todos.todos.map((todo: list) => {
          return (
            <Todo key={todo.id} task={todo.task} completed={todo.completed} />
          )
        })
      }
    </div>
  )
}
