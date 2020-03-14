import React from 'react';
import '../styles/FilterButtons.css';

const FilterButtons = ({ }) => {
    return (
        <div>
            <hr />
            <div className="filterButtonCont">
                <button className="filterButton" data-action="checkAll">Check All</button>
                <button className="filterButton" data-action="removeChecked">Remove Checked Items</button>
            </div>
        </div>

    )
}

export default FilterButtons;