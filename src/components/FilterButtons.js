import React from 'react';
import '../styles/FilterButtons.css';

const FilterButtons = () => {
    return (
        <div>
            <hr />
            <div className="filterButtonCont">
                <button className="filterButton">Check All</button>
                <button className="filterButton">Remove Checked Items</button>
                <button className="filterButton">Uncheck All</button>
            </div>
        </div>

    )
}

export default FilterButtons;