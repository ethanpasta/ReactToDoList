import React from 'react';
import ToDoInput from './ToDoInput';
import ToDoOutput from './ToDoOutput';
import { Card, Button } from 'react-bootstrap';
import '../styles/Main.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleButtonClick(newInput) {
        this.setState((prevState) => ({
            items: [...prevState.items, newInput]
        }));
    }
    render() {
        return (
            <div className="container">
                <div className="cardContainer">
                    <Card style={{ width: '60%' }}>
                        <Card.Header className="text-center">To Do List</Card.Header>
                        <Card.Body>
                            <Card.Text className="text-center">What do you need to add to your list?</Card.Text>
                            <br />
                            <ToDoInput callback={this.handleButtonClick} />
                            <ToDoOutput tasks={this.state.items} />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default App;