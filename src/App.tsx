/* eslint-disable array-callback-return */
import { useState } from 'react'
import { Header } from './Components/Header'
import { FormTodo } from './Components/FormTodo'
import { TodoList } from './Components/Todo'

function App (): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [todos, setTodos] = useState<object[]>([])

  const handleErrorMessage = (message: string, duration: number): void => {
    setTimeout(() => {
      setErrorMessage('')
    }, duration)

    setErrorMessage(message)
  }

  const addTodo = (task: string): void => {
    setTodos([
      ...todos,
      { id: self.crypto.randomUUID(), task, completed: false }
    ])
  }

  return (
    <main className='bg-gray-200 h-screen w-screen text-white '>
      <Header />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 m-auto my-auto h-4/6 shad bg-white text-black overflow-y-scroll'>
        <h2 className='text-center text-3xl mt-5'>Todos List</h2>
        {(errorMessage !== '') && <h1 className='text-center  text-red-500 m-auto w-1/3 bg-red-200 rounded-md p-1'>{errorMessage}</h1>}
        <FormTodo handleErrorMessage={handleErrorMessage} addTodo={addTodo} />
        <TodoList todos={todos} />

      </div>
    </main>
  )
}

export default App

// eslint-disable-next-line no-lone-blocks
{ /*   {
  todos.map((todo, index) => {
    console.log(todo.id)
// la concha de la loraaaaaaaaa, no me sale un simple map, no se que estoy haciendo mal, no se si es por ts o por algo de react o sintaxis, estoy muy estresado, nico del futuro espero que valores todo lo que estoy aprendiendo para que tengamos un buen futuro y vivamos bien
    return (

      <div key={index}>
        <Todo task={todo.task} />
      </div>
    )
  }
  )
} */ }
