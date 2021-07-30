import * as React from 'react';
import './styles.css';
import UserInfo from "../UserInfo/UserInfo";

const TopBar = ({className, toggleSidenav}) => {

    return (
        <div className="top-bar-wrapper d-flex align-items-center">
            <div className="btn toggle-menu me-3 d-flex d-xl-none" onClick={toggleSidenav}>
                <i className="far fa-bars fs-4 text-g-red-500"/>
            </div>
            <div className={`d-flex flex-fill align-items-center top-bar ${className}`}>
                <div className="d-flex">
                    <i className="far fa-check-square fs-4 me-3 top-bar__icon text-g-mid-900"/>
                    <i className="far fa-comment fs-4 me-3 top-bar__icon text-g-mid-900"/>
                    <i className="far fa-envelope fs-4 me-3 top-bar__icon text-g-mid-900"/>
                    <i className="far fa-calendar fs-4 me-3 top-bar__icon text-g-mid-900"/>
                    <i className="far fa-star fs-4 me-3 top-bar__icon top-bar__icon--disabled"/>
                </div>
                <div className="d-flex flex-fill align-items-center justify-content-end">
                    <div className="d-flex">
                        <span className="top-bar__language me-3 d-none d-sm-block">English</span>
                        <i className="far fa-bell fs-4 me-3 top-bar__icon text-g-mid-900"/>
                        <i className="far fa-search fs-4 me-3 top-bar__icon text-g-mid-900"/>
                    </div>
                    <div className="col-auto">
                        <UserInfo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;
