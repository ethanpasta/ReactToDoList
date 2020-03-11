import React from 'react';

const ToDoOutput = ({ tasks }) => {
    return (
        <div>
            {
                tasks.map(task => (
                    <p key={task} style={{ border: '1px solid black' }}>{task}</p>
                ))
            }
        </div>
    )
}

export default ToDoOutput;