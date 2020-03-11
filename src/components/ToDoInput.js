import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }
    render() {
        return (
            <Form onSubmit={(e) => {
                e.preventDefault();
                this.props.callback(this.state.input);
            }}>
                <Row>
                    <Col sm={8}>
                        <Form.Control
                            placeholder="item to add"
                            onChange={(e) => this.setState({ input: e.target.value })}
                        />
                    </Col>
                    <Col sm={2}>
                        <Button type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default ToDoInput;