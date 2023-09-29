import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },

        endTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        changeTask: (state, action) => {
            const { id, newText } = action.payload;
      
            // Find the task with the specified ID
            const taskToChange = state.todos.find((todo) => todo.id === id);
      
            // If the task exists, update its text
            if (taskToChange) {
              taskToChange.text = newText;
            }
          },
          selectTask: (state, action) => {
            const { id, selected } = action.payload;
      
            // Find the task with the specified ID
            const taskToSelect = state.todos.find((todo) => todo.id === id);
      
            // If the task exists, update its "selected" property
            if (taskToSelect) {
              taskToSelect.selected = selected;
            }
          },

    }
})

export const {addTask, endTask, changeTask, selectTask} = todoSlice.actions

export default todoSlice.reducer