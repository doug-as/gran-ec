import * as React from 'react';
import ECommerce from "../../pages/ECommerce/ECommerce";
import Sidenav from "../Sidenav/Sidenav";
import {useState} from "react";

import menuItems from "../../data/menu";

const Layout = () => {

    let [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const toggleSidenav = () => {
        setIsSidenavOpen(!isSidenavOpen);
    }

    return (
        <div className="row g-0">
            <div className="col-auto">
                <Sidenav
                    menuGroups={menuItems}
                    isOpen={isSidenavOpen}
                    toggleSidenav={toggleSidenav}
                />
            </div>
            <div className="col">
                <ECommerce toggleSidenav={toggleSidenav}/>
            </div>
        </div>
    )
}

export default Layout;
