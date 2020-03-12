import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const UserInput = (props) => {
    const [input, setInput] = useState("");
    const [alert, setAlert] = useState({
        msg: '',
        variant: '',
        show: false
    });
    const appear = useSpring({ opacity: alert.show ? 1 : 0 });
    const formSubmit = (e) => {
        e.preventDefault();
        if (props.tasks[input] != undefined) {
            setAlert({ show: true, msg: "This task already exists!", variant: "warning" });
            return;
        }
        setAlert({ show: true, msg: "Added!", variant: "success" });
        props.callback(input);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert({ show: false });
        }, 1000);
    }, [alert.msg]);
    return (
        <div>
            <form onSubmit={formSubmit} className="inputForm">
                <input
                    placeholder="item to add"
                    onChange={e => setInput(e.target.value)}
                    className="inputBox"
                />
                <button
                    variant="outline-info"
                    type="submit"
                    disabled={input.length ? false : true}
                    className="inputButton"
                >
                    Add
                </button>
            </form>
            <br />
            {
                <animated.div style={appear}>
                    <div style={{ display: 'inline' }} variant={alert.variant}>
                        {alert.msg}</div>
                </animated.div>
            }
        </div >
    )
}


export default UserInput;