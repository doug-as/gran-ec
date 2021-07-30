import * as React from 'react';
import './styles.css';

const Range = ({id, label}) => {

    return (
        <div className="range-wrapper range">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type="range" className="form-range" id={id}/>
        </div>
    )
}

export default Range;
