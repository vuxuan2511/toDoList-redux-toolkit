import React from 'react';
import { useSelector } from 'react-redux';
import { todosSelector } from '../../store/todosSlice';
import './Navbar.scss';
const Navbar = () => {
    const todos = useSelector(todosSelector);
    return (
        <div className="nav-bar">
            <h1>My Redux App Todos</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Total todo : {todos.length}</li>
            </ul>
        </div>
    );
};

export default Navbar;
