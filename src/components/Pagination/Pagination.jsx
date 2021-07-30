import * as React from 'react';
import './styles.css';

const Pagination = ({className}) => {

    return (
        <div className={`pagination-wrapper pagination row ${className}`}>
            <div className="col-auto pagination__block pagination__arrow bg-g-light-300">
                <i className="far fa-chevron-left"/>
            </div>
            <div className="col-auto pagination__block pagination__pages bg-g-light-300">
                <span className="pagination__page">1</span>
                <span className="pagination__page">2</span>
                <span className="pagination__page">3</span>
                <span className="pagination__page">4</span>
                <span className="pagination__page">5</span>
                <span className="pagination__page pagination__page--active">6</span>
                <span className="pagination__page">7</span>
                <span className="pagination__page">8</span>
                <span className="pagination__page">9</span>
                <span className="pagination__page">10</span>
            </div>
            <div className="col-auto pagination__block pagination__arrow bg-g-light-300">
                <i className="far fa-chevron-right"/>
            </div>
        </div>
    )
}

export default Pagination;
