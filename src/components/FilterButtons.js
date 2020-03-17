import React from 'react';

const FilterButtons = ({ dispatch }) => {
    return (
        <React.Fragment>
            <button className="buttonOneClicker" onClick={() => dispatch({ type: 'checkAll' })}>
                <div className="buttonOneSquare"></div>
                <a className="filterButtons filterButtonOne">
                    <div className="squareBorder"></div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 700 512">
                        <path className="checkmark" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                    </svg>
                </a>
            </button>

            <button className="buttonTwoClicker" onClick={() => dispatch({ type: 'removeCompleted' })}>
                <div className="buttonTwoSquare"></div>
                {/* <div className="garbageTitle">Remove Completed</div> */}
                <a className="filterButtons filterButtonTwo">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 700 700">
                        <path fill="currentColor" d="M163.25 647.203a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V311.203H163.25zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0z">
                        </path>
                        <path fill="currentColor" id="filterButtonThree" d="M563.25 215.203H443.25l-9.4-18.7A24 24 0 0 0 412.35 183.203H298.05a23.72 23.72 0 0 0-21.4 13.3L267.25 215.203H147.25A16 16 0 0 0 131.25 231.203v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V231.203a16 16 0 0 0-16-16z"></path>
                    </svg>
                </a>
            </button>

        </React.Fragment>

    )
}

export default FilterButtons;