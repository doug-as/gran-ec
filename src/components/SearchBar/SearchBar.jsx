import * as React from 'react';
import './styles.css';

const SearchBar = () => {

    return (
        <div className="row g-0 search-bar-wrapper search-bar align-items-center">
            <div className="col">
                <input type="text" className="search-bar__input" placeholder="Search here"/>
            </div>
            <div className="col-auto">
                <i className="far fa-search"/>
            </div>
        </div>
    )
}

export default SearchBar;
