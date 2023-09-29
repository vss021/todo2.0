import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { endTask, selectTask } from '../store-app/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // State to track selected tasks for deletion
  const [selectedTasks, setSelectedTasks] = useState([]);

  // Function to toggle task selection
  const toggleTaskSelection = (id) => {
    if (selectedTasks.includes(id)) {
      // Task is already selected, so remove it from the list
      setSelectedTasks(selectedTasks.filter((taskId) => taskId !== id));
    } else {
      // Task is not selected, so add it to the list
      setSelectedTasks([...selectedTasks, id]);
    }
  };

  // Function to handle the "Delete" button click
  const handleDelete = () => {
    // Dispatch the "endTask" action for each selected task
    selectedTasks.forEach((taskId) => dispatch(endTask(taskId)));
    // Clear the selected tasks list
    setSelectedTasks([]);
  };

  return (
    <>
      <ul className="list-none p-3 mt-10 bg-slate-700 rounded-lg">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded`}
            key={todo.id}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                onChange={() => toggleTaskSelection(todo.id)}
                checked={selectedTasks.includes(todo.id)}
                className="mr-2"
              />
              <div className={`text-white ${todo.selected ? 'line-through' : ''}`}>{todo.text}</div>
            </div>
          </li>
        ))}
      </ul>
      {selectedTasks.length > 0 && (
        <div className="mt-4">
          <button
            onClick={handleDelete}
            className="text-white bg-red-500 px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}

export default Todos;
