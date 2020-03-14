import React, { useState } from 'react';
import UserInput from './UserInput';
import ListResults from './ListResults';
import FilterButtons from './FilterButtons';
import '../styles/Base.scss';
import '../styles/Card.scss';

function reducer(state = {}, action) {
    switch (action.type) {

    }
}

const ToDoList = () => {
    [items, setItems] = useState({});

    handleButtonClick(event) {
        event.persist();
        {

        } []
    }

    addTask(newInput) {
        setItems(({ items }) => ({
            items: {
                ...items,
                [newInput]: false
            }
        }));
    }
    taskComplete(event) {
        event.persist();
        setItems(({ items }) => ({
            items: {
                ...items,
                [event.target.value]: !items[event.target.value]
            }
        }));
    }
    removeCompleted() {

    }
    checkAll() {

    }
    unCheckAll() {

    }

    return (
        <div className="container">
            <div className="card">
                <div className="cardHeader">To Do List</div>
                <div className="cardBody">
                    <div className="subtitle">What do you need to get done today?</div>
                    <br />
                    <UserInput handleButtonClick={handleButtonClick} tasks={items} />
                    <ListResults tasks={items} taskComplete={handleTaskComplete} />
                    {(Object.keys(items).length > 0) && <FilterButtons handleButtonClick={handleButtonClick} />}
                </div>
            </div>
        </div>
    )

}

export default ToDoList;