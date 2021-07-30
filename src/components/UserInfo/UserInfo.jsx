import * as React from 'react';
import './styles.css'

const UserInfo = () => {

    return (
        <div className="row g-0 align-items-center user-info-wrapper user-info">
            <div className="col-auto user-info__data d-none d-md-block">
                <div className="user-info__username">John Doe</div>
                <div className="user-info__status text-g-green-500">Available</div>
            </div>
            <div className="col-auto user-info__avatar">
                <img src="https://i.pravatar.cc/36" alt="John Doe"/>
            </div>
        </div>
    )
}

export default UserInfo;
