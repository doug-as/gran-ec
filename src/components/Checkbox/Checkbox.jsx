import * as React from 'react';
import './styles.css';

const Checkbox = ({id, value, label}) => {

    return (
        <div className="form-check checkbox-wrapper">
            <input className="form-check-input" type="checkbox" value={value} id={id}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {label}
            </label>
        </div>
    )
}

export default Checkbox;
