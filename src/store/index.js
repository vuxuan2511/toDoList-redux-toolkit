import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

// Store
const store = configureStore({
    reducer: {
        todosReducer: todosReducer,
    },
});

export default store;
