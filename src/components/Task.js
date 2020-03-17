import React, { useState, useEffect } from 'react';

const Task = ({ isChecked, dispatch, label }) => {
    const handleCheckClick = () => {
        dispatch({ type: 'taskComplete', taskTxt: label });
    }
    return (
        <div
            className={"taskItem" + (isChecked ? " taskClicked" : "")}
            onClick={handleCheckClick}
        >
            <input
                type="checkbox"
                name={label}
                className={isChecked ? 'clicked' : null}
                id={label}
                value={label}
            />
            <div className="taskLabelContain">
                <span className="taskLabel">{label}</span>
            </div>
        </div>
    )
}

export default Task;