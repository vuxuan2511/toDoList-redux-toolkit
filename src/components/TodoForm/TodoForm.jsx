import React, { useState } from 'react';
import { addTodo } from '../../store/todosSlice';
import { useDispatch } from 'react-redux';
import './TodoForm.scss';
const TodoForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(title));
        setTitle('');
    };
    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" value={title} onChange={changeTitle} />
                <input type="submit" value="Add" className="submit" />
            </form>
        </div>
    );
};

export default TodoForm;
