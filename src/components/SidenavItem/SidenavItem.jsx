import * as React from 'react';

import './styles.css';

const SidenavItem = ({icon, label, isActive, hasSubmenu, hasDropdown}) => {

    return (
        <div className={`sidenav-item-wrapper sidenav-item d-flex align-items-center ${isActive ? 'bg-g-light-200' : ''}`}>
            <i className={`far sidenav-item__icon text-g-dark-900 ${icon}`}/>
            <span className="sidenav-item__label flex-fill text-g-mid-900">{label}</span>
            {
                hasSubmenu &&
                <i className="far fa-chevron-right sidenav-item__arrow"/>
            }
            {
                hasDropdown &&
                <i className="far fa-chevron-down sidenav-item__arrow"/>
            }
        </div>
    )
}

export default SidenavItem;
