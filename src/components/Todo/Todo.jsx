import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector, markCompleted, deleteTodo, getTodos } from '../../store/todosSlice';

import TodoForm from '../TodoForm/TodoForm';
import './Todo.scss';
const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todosSelector);
    const handleChecked = (todoId) => {
        dispatch(markCompleted(todoId));
    };
    const deleteToDo = (todoId) => {
        dispatch(deleteTodo(todoId));
    };
    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);
    return (
        <>
            <TodoForm />
            <div className="todo-list">
                <ul>
                    {todos.map((todo) => {
                        return (
                            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                                {todo.title}
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={handleChecked.bind(this, todo.id)}
                                    />
                                    <button onClick={deleteToDo.bind(this, todo.id)}>Delete</button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Todo;
