import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SVGIcons from './SVGIcons';

const UserInput = ({ dispatch, tasks }) => {

    const [input, setInput] = useState({
        txt: "",
        isDenied: false
    });

    const [isClicked, setisClicked] = useState(false);
    const animate = useRef({
        green: false,
        red: false
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setisClicked(true);
        animate.current.green = true;
        setTimeout(() => {
            animate.current.green = false;
            setInput({ txt: "", isDenied: false });
        }, 600);
        dispatch({ type: 'add', taskTxt: input.txt });
    }

    useEffect(() => {
        setisClicked(false);
    }, [isClicked]);

    return (
        <div>
            <form onSubmit={handleFormSubmit} className="inputForm">
                <input
                    className="inputText"
                    onChange={e => {
                        e.persist();
                        console.log("changin");
                        setInput(({ txt, isDenied }) => {
                            let newTxt = e.target.value;
                            let deniedTmp = (tasks[newTxt] != undefined) || (newTxt.length && !newTxt.trim().length);
                            animate.current.red = deniedTmp;
                            return {
                                txt: e.target.value,
                                isDenied: deniedTmp
                            }
                        });

                    }}
                    value={input.txt}
                />
                <button
                    variant="outline-info"
                    type="submit"
                    disabled={(input.isDenied || !input.txt.length) ? true : false}
                    className={input.isDenied ? 'inputButton inputDenied' : 'inputButton'}
                >
                    <SVGIcons isClicked={isClicked} isDenied={input.isDenied} />
                </button>
                <span className={"cool-line" + (animate.current.green ? " animate-green" : "") + (animate.current.red ? " animate-red" : "")} />

            </form>
        </div >
    )
}


export default UserInput;