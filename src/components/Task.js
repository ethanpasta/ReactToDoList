import React, { useState, useEffect } from 'react';

const Task = ({ isChecked, dispatch, label }) => {
    // Once task is checked, dispatch the appropriate action
    const handleCheckClick = () => {
        dispatch({ type: 'taskComplete', taskTxt: label });
    }
    return (
        <div
            className={"taskItem" + (isChecked ? " taskClicked" : "")}
            onClick={handleCheckClick}>
            <input
                type="checkbox"
                className={isChecked ? 'clicked' : null}
            />
            <div className="taskLabelContain">
                <span className="taskLabel">{label}</span>
            </div>
        </div>
    );
};

export default Task;