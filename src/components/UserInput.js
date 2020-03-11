import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class UserInput extends React.Component {
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
                    <Col sm={9}>
                        <Form.Control
                            placeholder="item to add"
                            onChange={(e) => this.setState({ input: e.target.value })}
                        />
                    </Col>
                    <Col>
                        <Button
                            variant="outline-info"
                            type="submit"
                            disabled={this.state.input.length ? false : true}>
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }
}

export default UserInput;