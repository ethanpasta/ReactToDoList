import React, { useState, useReducer, useEffect } from 'react';
import UserInput from './UserInput';
import ListResults from './ListResults';
import FilterButtons from './FilterButtons';

/**
 * Reducer functions - defines different actions and how they effect the state (list of tasks)
 * 
 * @param {Object} state The previous state
 * @param {String} action The action to execute
 */
function reducer(state, action) {
    return {
        // Adds a new task
        add: () => ({
            items: {
                ...state.items,
                [action.taskTxt]: false
            },
            checkAll: state.checkAll
        }),
        // marks a task as complete
        taskComplete: () => {
            let tmp = Object.assign({}, state.items);
            tmp[action.taskTxt] = !tmp[action.taskTxt];
            return {
                items: tmp,
                checkAll: state.checkAll
            };
        },
        // checks all tasks as complete
        checkAll: () => ({
            items: Object.assign({}, ...Object.keys(state.items).map(task => ({ [task]: state.checkAll }))),
            checkAll: !state.checkAll
        }),
        // removes all completed tasks
        removeCompleted: () => ({
            items: (Object.assign({}, ...Object.keys(state.items).filter(task => !state.items[task]).map(key => ({ [key]: state.items[key] })))),
            checkAll: state.checkAll
        })
    }[action.type]();
}

const ToDoList = () => {
    const [state, dispatch] = useReducer(reducer, {
        // If any tasks exist in the localStorage, use them
        items: JSON.parse(localStorage.getItem('items')) || {},
        checkAll: true
    });
    // Save automatically to the localStorage if the state changes
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(state.items));
    }, [state.items]);
    return (
        <div className="card">
            <div className="cardHeader">TO DO LIST</div>
            <div className="cardBody">
                <br />
                <div className="subtitle">
                    What do you need to get done today?
                    <span className="easterEgg"> *<span className="tooltiptext">All animations were manually crafted.<br />How many can you find?</span></span>
                </div>
                <br />
                <UserInput dispatch={dispatch} tasks={state.items} />
                <ListResults tasks={state.items} dispatch={dispatch} />
                {/* Display the filter buttons only if any tasks exist */}
                {(Object.keys(state.items).length > 0) && <FilterButtons dispatch={dispatch} />}
            </div>
        </div>
    );
};

export default ToDoList;