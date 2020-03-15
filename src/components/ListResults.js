import React from 'react';
import Task from './Task';

const ListResults = ({ tasks, dispatch }) => {
    return (
        <div>
            <div className="listResults">
                {
                    Object.keys(tasks).map((task) => (
                        <Task key={task} label={task} dispatch={dispatch} isChecked={tasks[task]} />
                    ))
                }
            </div>
        </div>
    )
}

export default ListResults;