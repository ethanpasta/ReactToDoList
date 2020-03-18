import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import "../styles/bundle.scss";

const App = () => {
    useEffect(() => {
        // Adjust window height to always be 100% (fixes mobile issues)
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);
    return (
        <div className="container">
            <div className="background">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
            </div>
            <ToDoList />
            <div className="copyright">
                2020 Copyright &copy;{" "}
                <a href="http://eitanmayer.com" target="_blank">
                    Eitan Mayer
                </a>
            </div>
        </div>
    );
};

export default App;
