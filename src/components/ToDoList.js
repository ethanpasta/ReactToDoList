import React, { useState, useReducer } from 'react';
import UserInput from './UserInput';
import ListResults from './ListResults';
import FilterButtons from './FilterButtons';

function reducer(state, action) {
    return {
        add: () => ({
            items: {
                ...state.items,
                [action.taskTxt]: false
            },
            checkAll: state.checkAll
        }),
        taskComplete: () => ({
            items: {
                ...state.items,
                [action.taskTxt]: !state[action.taskTxt]
            },
            checkAll: state.checkAll
        }),
        checkAll: () => ({
            items: Object.assign({}, ...Object.keys(state.items).map(task => ({ [task]: state.checkAll }))),
            checkAll: !state.checkAll
        }),
        removeCompleted: () => ({
            items: (Object.assign({}, ...Object.keys(state.items).filter(task => !state.items[task]).map(key => ({ [key]: state.items[key] })))),
            checkAll: state.checkAll
        })
    }[action.type]();
}

const ToDoList = () => {
    const [state, dispatch] = useReducer(reducer, {
        items: {},
        checkAll: true
    });

    return (
        <div className="card">
            <div className="cardHeader">TO DO LIST</div>
            <div className="cardBody">
                <br />
                <div className="subtitle">What do you need to get done today?</div>
                <br />
                <UserInput dispatch={dispatch} tasks={state.items} />
                <ListResults tasks={state.items} dispatch={dispatch} />
                {(Object.keys(state.items).length > 0) && <FilterButtons dispatch={dispatch} />}
            </div>
        </div>
    )
}

export default ToDoList;