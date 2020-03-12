import React from 'react';
import '../styles/TaskItem.scss';

const Task = ({ isChecked, onCheckboxClick, label }) => {
    return (
        <div className="taskItem">
            <input
                type="checkbox"
                name={label}
                onChange={onCheckboxClick}
                id={label}
                value={label}
            />
            <label className="taskLabel" htmlFor="todo" data-content={label}>{label}</label>
        </div>
    )
}

export default Task;