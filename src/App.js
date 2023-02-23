import React from 'react';
import Navbar from './components/navbar/Navbar';
import Todo from './components/Todo/Todo';

function App() {
    return (
        <div className="App">
            <Navbar />

            <Todo />
        </div>
    );
}

export default App;
