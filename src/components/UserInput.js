import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SVGIcons from './SVGIcons';

const UserInput = (props) => {
    const [input, setInput] = useState({
        txt: "",
        isDenied: false
    });
    const [isClicked, setisClicked] = useState(false);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setisClicked(true);
        setTimeout(() => setInput(({ txt, isDenied }) => ({
            txt: "", isDenied: false
        })), 600);
        props.callback(input.txt);
    }
    useEffect(() => {
        setisClicked(false);
    }, [isClicked])
    return (
        <div>
            <form onSubmit={handleFormSubmit} className="inputForm">
                <input
                    className="inputText"
                    onChange={e => {
                        e.persist();
                        setInput(({ txt, isDenied }) => ({
                            txt: e.target.value,
                            isDenied: (e.target.value.length && (props.tasks[e.target.value] != undefined)) ? true : false
                        }))
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
            </form>
        </div >
    )
}


export default UserInput;