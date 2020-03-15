import React from 'react';

const FilterButtons = ({ dispatch }) => {
    return (
        <div>
            <div className="filterButtonCont">
                <button className="filterButton" onClick={() => dispatch({ type: 'checkAll' })}>Check All</button>
                <button className="filterButton" onClick={() => dispatch({ type: 'removeCompleted' })}>Remove Completed Tasks</button>
            </div>
        </div>

    )
}

export default FilterButtons;