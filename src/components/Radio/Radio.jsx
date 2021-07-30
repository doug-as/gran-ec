import * as React from 'react';
import './styles.css'

const Radio = ({name, id, label}) => {

    return (
        <div className="form-check radio-wrapper">
            <input className="form-check-input" type="radio" name={name} id={id}/>
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default Radio;
