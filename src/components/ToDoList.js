import React from 'react';
import UserInput from './UserInput';
import ListResults from './ListResults';
import { Card, Button } from 'react-bootstrap';
import '../styles/Main.css';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(newInput) {
        if (this.state.items.indexOf(newInput) != -1) {
            this.setState({ errorMsg: "This task exists already!" });
            return;
        }
        this.setState((prevState) => ({
            items: [...prevState.items, newInput]
        }));
    }
    render() {
        return (
            <div className="container">
                <div className="cardContainer">
                    <Card bg="light" style={{ width: '60%' }}>
                        <Card.Header className="text-center">To Do List</Card.Header>
                        <Card.Body className="text-center">
                            <Card.Text className="text-center">What do you need to add to your list?</Card.Text>
                            <br />
                            <UserInput callback={this.handleButtonClick} />
                            <ListResults tasks={this.state.items} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ToDoList;