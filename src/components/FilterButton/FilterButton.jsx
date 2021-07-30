import * as React from 'react';
import './styles.css';

const FilterButton = ({icon}) => {

    return (
        <div className="filter-button-wrapper">
            <i className={`far ${icon}`}/>
        </div>
    )
}

export default FilterButton;
