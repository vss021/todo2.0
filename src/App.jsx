import { useState } from 'react'
import AddTodo from './components/AddToDo'
import Todos from './components/Todoes'
import { Provider } from 'react-redux'
import {store} from './store-app/store'




function App() {
 
  
  
  return (
    <div className=' flex flex-col h-screen items-center bg-black text-white '>
      
      <div className=' bg-slate-900 mt-10 h-full m-5 text-center md:w-1/2 rounded-xl p-5'>

      <h1 className='text-5xl font-semibold p-2 '>My Todos</h1>
      <AddTodo />
      <Todos />
      </div>
    </div>
  )
}

export default App