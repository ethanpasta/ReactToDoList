import React, { useState, useEffect } from 'react';

const Task = ({ isChecked, dispatch, label }) => {
    const handleCheckClick = () => {
        dispatch({ type: 'taskComplete', taskTxt: label });
    }
    return (
        <div className="taskItem">
            <input
                type="checkbox"
                name={label}
                onChange={handleCheckClick}
                className={isChecked ? 'clicked' : null}
                id={label}
                value={label}
            />
            <label className="taskLabel" htmlFor="todo" data-content={label}>{label}</label>
        </div>
    )
}

export default Task;