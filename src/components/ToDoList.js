import React from 'react';
import UserInput from './UserInput';
import ListResults from './ListResults';
import { Card, Button } from 'react-bootstrap';
import '../styles/Main.scss';

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
                <Card style={{ width: '40%' }}>
                    <Card.Header className="text-center">To Do List</Card.Header>
                    <Card.Body className="text-center">
                        <Card.Text className="text-center">What do you need to add to your list?</Card.Text>
                        <br />
                        <UserInput callback={this.handleButtonClick} tasks={this.state.items} />
                        <ListResults tasks={this.state.items} taskComplete={this.handleTaskComplete} />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default ToDoList;