import React, { useState, useEffect, useRef } from 'react';
import SVGIcons from './SVGIcons';

const UserInput = ({ dispatch, tasks }) => {
    const [input, setInput] = useState({
        txt: "",
        isDenied: false,
        isTypingDisabled: false
    });
    // State for button click (submit)
    const [isClicked, setisClicked] = useState(false);
    // Variables for "sliding border" on input
    const animate = useRef({
        green: false,
        red: false
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Trigger new svg animation
        setisClicked(true);
        // Temporary disable input until its reset (600 ms)
        setInput((input) => ({ ...input, isTypingDisabled: true }));
        // Trigger border slide to "passed"
        animate.current.green = true;
        setTimeout(() => {
            // Reset input, and trigger border slide to normal
            animate.current.green = false;
            setInput({ txt: "", isDenied: false, isTypingDisabled: false });
            setisClicked(false);
        }, 600);
        // Add new item to base state
        dispatch({ type: 'add', taskTxt: input.txt });
    }
    // This resets the click in order to reset the svg animation
    useEffect(() => {
        setisClicked(false);
    }, [isClicked]);
    return (
        <div>
            <form onSubmit={handleFormSubmit} className="inputForm">
                <input
                    className="inputText"
                    autoFocus
                    onChange={e => {
                        e.persist();
                        let newTxt = e.target.value.trim();
                        // Text is denied if it already exists, or if it has a length and it's only spaces, or if more than 100 characters
                        let deniedTmp = (tasks[newTxt] != undefined) || (e.target.value.length && !newTxt.length) || newTxt.length > 100;
                        animate.current.red = deniedTmp;
                        // Only set input if text is not disabled
                        !input.isTypingDisabled && setInput({ txt: e.target.value, isDenied: deniedTmp, isTypingDisabled: false });
                    }}
                    value={input.txt}
                />
                <button
                    variant="outline-info"
                    type="submit"
                    // Disable button if text is denied (exists in tasks), or if no text was entered
                    disabled={(input.isDenied || !input.txt.length) ? true : false}
                    // Different classes to change color of button based on its state
                    className={input.isDenied ? "inputButton inputDenied" : "inputButton"}
                >
                    <SVGIcons isEmpty={input.txt.length == 0} isClicked={isClicked} isDenied={input.isDenied} />
                </button>
                <span className={"cool-line" + (animate.current.green ? " animate-green" : "") + (animate.current.red ? " animate-red" : "")} />
            </form>
        </div >
    );
};

export default UserInput;