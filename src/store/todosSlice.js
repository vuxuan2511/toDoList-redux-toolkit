import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// Reducer Thunk
export const getTodos = createAsyncThunk('todos/todosFetched', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return response.data;
});
export const addTodo = createAsyncThunk('todos/todosAdd', async (title) => {
    const newTodo = {
        id: nanoid(),
        title,
        completed: false,
    };
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
    return newTodo;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (todoId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    return todoId;
});
const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [],
    },
    reducers: {
        // addTodo: {
        //     reducer(state, action) {
        //         state.allTodos.unshift(action.payload);
        //     },
        //     prepare(title) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title,
        //                 completed: false,
        //             },
        //         };
        //     },
        // },

        // deleteTodo(state, action) {
        //     const todoId = action.payload;
        //     state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
        // },
        markCompleted(state, action) {
            const todoId = action.payload;
            state.allTodos = state.allTodos.map((todo) => {
                if (todoId === todo.id) todo.completed = !todo.completed;
                return todo;
            });
        },
    },
    extraReducers: {
        [getTodos.pending]: (state, action) => {
            console.log('fetching todo from backend...');
        },
        [getTodos.fulfilled]: (state, action) => {
            state.allTodos = action.payload;
        },
        [getTodos.rejected]: (state, action) => {
            console.log('Something wrong!');
        },

        // add todo
        [addTodo.fulfilled]: (state, action) => {
            state.allTodos.unshift(action.payload);
        },

        //delete todo
        [deleteTodo.fulfilled]: (state, action) => {
            const todoId = action.payload;
            state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
        },
    },
});

//Reduce
const todosReducer = todosSlice.reducer;

//Selector
export const todosSelector = (state) => state.todosReducer.allTodos;

// export action
export const { markCompleted } = todosSlice.actions;

export default todosReducer;
