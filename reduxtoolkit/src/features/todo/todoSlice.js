import {createSlice , nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            /* or
            state.todos.concat(todo)
            */
            /* or
            const newTodos = [...state.todos, todo]
            state.todos = newTodos 
            */
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            const newTodo = {
                id: action.payload.id,
                text: action.payload.text
            }
            state.todos[index] = newTodo;
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer