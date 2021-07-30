import * as React from 'react';
import './styles.css';

const RatingBadge = ({className, rate}) => {

    return (
        <span className={`rating-badge-wrapper rating-badge ${className}`}>
            <span>{rate}</span> <i className="far fa-star"/>
        </span>
    )
}

export default RatingBadge;
