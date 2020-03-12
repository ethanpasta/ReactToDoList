import React from 'react';

const ListResults = ({ tasks }) => {
    return (
        <div>
            <hr />
            <div className="listResults">
                {
                    tasks.map(task => (
                        <div className="task" key={task}>{task}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListResults;