import React from 'react';
import '../styles/FilterButtons.css';

const FilterButtons = ({ dispatch }) => {
    return (
        <div>
            <hr />
            <div className="filterButtonCont">
                <button className="filterButton" onClick={() => dispatch({ type: 'checkAll' })}>Check All</button>
                <button className="filterButton" onClick={() => dispatch({ type: 'removeCompleted' })}>Remove Completed Tasks</button>
            </div>
        </div>

    )
}

export default FilterButtons;