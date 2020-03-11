import React from 'react';

const ListResults = ({ tasks }) => {
    return (
        <div>
            <hr />
            <div class="listResults">
                {
                    tasks.map(task => (
                        <p key={task}>{task}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default ListResults;