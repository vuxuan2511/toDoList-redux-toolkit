import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodos: [
            {
                id: 1,
                title: 'viec 1',
                completed: true,
            },
            {
                id: 2,
                title: 'viec 2',
                completed: false,
            },
            {
                id: 3,
                title: 'viec 3',
                completed: false,
            },
            {
                id: 4,
                title: 'viec 4',
                completed: false,
            },
        ],
    },
    reducers: {
        addTodo: {
            reducer(state, action) {
                state.allTodos.unshift(action.payload);
            },
            prepare(title) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false,
                    },
                };
            },
        },
        markCompleted(state, action) {
            const todoId = action.payload;
            state.allTodos = state.allTodos.map((todo) => {
                if (todoId === todo.id) todo.completed = !todo.completed;
                return todo;
            });
        },
        deleteTodo(state, action) {
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
export const { addTodo, markCompleted, deleteTodo } = todosSlice.actions;

export default todosReducer;
