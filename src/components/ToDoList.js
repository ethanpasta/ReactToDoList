import React from 'react';
import UserInput from './UserInput';
import ListResults from './ListResults';
import FilterButtons from './FilterButtons';
import '../styles/Base.scss';
import '../styles/Card.scss';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {},
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleTaskComplete = this.handleTaskComplete.bind(this);
    }
    handleButtonClick(newInput) {
        this.setState(({ items }) => ({
            items: {
                ...items,
                [newInput]: false
            }
        }));
    }
    handleTaskComplete(event) {
        event.persist();
        this.setState(({ items }) => ({
            items: {
                ...items,
                [event.target.value]: !items[event.target.value]
            }
        }));
    }
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="cardHeader">To Do List</div>
                    <div className="cardBody">
                        <div className="subtitle">What do you need to get done today?</div>
                        <br />
                        <UserInput callback={this.handleButtonClick} tasks={this.state.items} />
                        <ListResults tasks={this.state.items} taskComplete={this.handleTaskComplete} />
                        {(Object.keys(this.state.items).length > 0) && <FilterButtons />}
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoList;