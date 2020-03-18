import React from 'react';
import Task from './Task';

const ListResults = ({ tasks, dispatch }) => {
    // Render a list of tasks
    return (
        <div className="listResults">
            {
                Object.keys(tasks).map((task) => (
                    <Task key={task} label={task} dispatch={dispatch} isChecked={tasks[task]} />
                ))
            }
        </div>
    );
};

export default ListResults;