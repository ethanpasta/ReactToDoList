import React from 'react';
import Task from './Task';
import '../styles/Input.scss';
import '../styles/ListResults.scss';

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