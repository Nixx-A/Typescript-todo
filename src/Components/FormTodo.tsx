import { useRef } from 'react'

interface Form {
  handleErrorMessage: (message: string, time: number) => void
  addTodo: (task: string) => void
}

export function FormTodo ({ handleErrorMessage, addTodo }: Form): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (inputRef.current instanceof HTMLInputElement) {
      const task = inputRef.current.value
      if (task === '') {
        handleErrorMessage("You can't add empty todos", 2000)
        return
      }

      addTodo(task)
      inputRef.current.value = ''
      inputRef.current.focus()
    }
  }
  return (
    <form className="flex justify-center gap-3  mt-3" onSubmit={handleSubmit}>
      <input className='border border-slate-800 placeholder:p-0.5 text focus:ring-1 p-2 focus:outline-none focus:border-blue-500 rounded-md ' ref={inputRef} name="todo" placeholder='Buy Milk...' type='text' />
      <button className='text-white bg-blue-600 rounded-md p-2 w-20 hover:bg-blue-500 duration-200'>Create</button>
    </form>
  )
}
