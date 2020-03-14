import React, { useState, useReducer } from 'react';
import UserInput from './UserInput';
import ListResults from './ListResults';
import FilterButtons from './FilterButtons';
import '../styles/Base.scss';
import '../styles/Card.scss';

function reducer(state, action) {
    return {
        add: () => ({
            ...state,
            [action.taskTxt]: false
        }),
        taskComplete: () => ({
            ...state,
            [action.taskTxt]: !state[action.taskTxt]
        }),
        checkAll: () => (Object.assign({}, ...Object.keys(state).map(task => ({ [task]: true })))),
        removeCompleted: () => (Object.assign({}, ...Object.keys(state).filter(task => !state[task]).map(key => ({ [key]: state[key] }))))
    }[action.type]();
}

const ToDoList = () => {
    const [items, dispatch] = useReducer(reducer, {});

    return (
        <div className="container">
            <div className="card">
                <div className="cardHeader">To Do List</div>
                <div className="cardBody">
                    <div className="subtitle">What do you need to get done today?</div>
                    <br />
                    <UserInput dispatch={dispatch} tasks={items} />
                    <ListResults tasks={items} dispatch={dispatch} />
                    {(Object.keys(items).length > 0) && <FilterButtons dispatch={dispatch} />}
                </div>
            </div>
        </div>
    )

}

export default ToDoList;