import React from 'react';
import Task from './Task';
import '../styles/Input.scss';

const ListResults = ({ tasks, taskComplete }) => {
    return (
        <div>
            <hr />
            <div className="listResults">
                {
                    Object.keys(tasks).map((task, idx) => (
                        <Task key={task} label={task} onCheckboxClick={taskComplete} />
                    ))
                }
            </div>
        </div>
    )
}

export default ListResults;