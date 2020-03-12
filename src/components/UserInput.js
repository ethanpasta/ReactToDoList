import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

const UserInput = (props) => {
    const [input, setInput] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        if (props.tasks.indexOf(input) != -1) {
            setErrMsg("This task already exists!");
            return;
        }
        setErrMsg("");
        props.callback(input);
    }
    return (
        <div>
            <Form onSubmit={formSubmit}>
                <Row>
                    <Col sm={9}>
                        <Form.Control
                            placeholder="item to add"
                            onChange={e => setInput(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Button
                            variant="outline-info"
                            type="submit"
                            disabled={input.length ? false : true}>
                            Add
                </Button>
                    </Col>
                </Row>
            </Form>
            <br />
            {errMsg && <Alert variant='danger'>{errMsg}</Alert>}
        </div>
    )
}


export default UserInput;