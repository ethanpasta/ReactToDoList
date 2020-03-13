import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SVGIcons from './SVGIcons';

const UserInput = (props) => {
    const [input, setInput] = useState("");
    const [alert, setAlert] = useState({
        msg: '',
        variant: '',
        show: false
    });
    const [buttonClick, setButtonClick] = useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (props.tasks[input] != undefined) {
            setAlert({ show: true, msg: "This task already exists!", variant: "warning" });
            return;
        }
        setButtonClick(true);
        setAlert({ show: true, msg: "Added!", variant: "success" });
        setTimeout(() => setInput(""), 1000);
        props.callback(input);
    }
    useEffect(() => {
        setButtonClick(false);
    }, [buttonClick])
    return (
        <div>
            <form onSubmit={handleFormSubmit} className="inputForm">
                <input
                    className="inputText"
                    onChange={e => setInput(e.target.value)}
                    value={input}
                />
                <button
                    variant="outline-info"
                    type="submit"
                    disabled={input.length ? false : true}
                    className="inputButton"
                >
                    <SVGIcons buttonState={buttonClick} />
                </button>
            </form>
        </div >
    )
}


export default UserInput;