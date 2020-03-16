import React from 'react';
import ToDoList from './ToDoList';
import "../styles/bundle.scss";

const App = () => {
    return (
        <div className="container">
            <div className="background">
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
            <ToDoList />
        </div>

    )
}

export default App;