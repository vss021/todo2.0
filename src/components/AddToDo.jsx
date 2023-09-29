import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTask} from '../store-app/todoSlice'
// import {addTask} from '../features/todo/todoSlice' 

function addToDo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTaskHandler = (e) => {
        e.preventDefault()

        if(input.length > 0)
        {

          dispatch(addTask(input))
          setInput('')
        }
    }

  return (

    <form onSubmit={addTaskHandler} className="space-x-3 mt-12 flex justify-center ">

      <input
        type="text"
        className="xl:w-full
        bg-gray-800 rounded border border-gray-700 focus:border-indigo-500
         focus:ring-2 focus:ring-indigo-900 text-base outline-none
         text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="
        md:w-36 
        text-white bg-indigo-500 border-0
         py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded md:text-lg"
      >
        Add 
      </button>
    </form>
  )
}

export default addToDo;