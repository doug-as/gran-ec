import * as React from 'react';
import './styles.css';

const Select = ({name, id, options}) => {

    return (
        <select
            className="form-select select-wrapper"
            name={name}
            id={id}
        >
            {
                options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))
            }
        </select>
    )
}

export default Select;
