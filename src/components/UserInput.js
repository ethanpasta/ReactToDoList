import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const UserInput = (props) => {
    const [input, setInput] = useState("");
    const [alert, setAlert] = useState({
        msg: '',
        variant: ''
    });
    const appear = useSpring({ opacity: 0, opacity: 1 });
    const formSubmit = (e) => {
        e.preventDefault();
        if (props.tasks[input] != undefined) {
            setAlert({ msg: "This task already exists!", variant: "warning" });
            return;
        }
        setAlert({ msg: "Added!", variant: "success" });
        props.callback(input);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert({ msg: '', variant: '' });
        }, 1000);
    }, [alert.msg]);
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
            {
                <animated.div style={appear}>
                    <Alert style={{ display: 'inline' }} variant={alert.variant}>
                        {alert.msg}</Alert>
                </animated.div>
            }
        </div >
    )
}


export default UserInput;