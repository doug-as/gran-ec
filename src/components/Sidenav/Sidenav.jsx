import * as React from 'react';
import SidenavItem from "../SidenavItem/SidenavItem";

import './styles.css';

const Sidenav = ({menuGroups, isOpen, toggleSidenav}) => {

    function renderItems() {
        return menuGroups.map((group, iGroup) => {

            let menuGroup = [];

            if (group.header) {
                menuGroup.push(
                    <div key={`h-${iGroup}`} className="sidenav__header text-g-red-500">
                        {group.header}
                    </div>
                );
            }

            group.items.forEach(({icon, label, submenu, dropMenu}, iItem) => {
                menuGroup.push(
                    <SidenavItem
                        key={`i-${iItem}`}
                        icon={icon}
                        label={label}
                        isActive={label === 'Dashboard'}
                        hasSubmenu={submenu}
                        hasDropdown={dropMenu}
                    />
                )
            });

            return menuGroup;
        })
    }

    const renderContent = () => {
        return (
            <>
                <div className="sidenav__logo">
                    <img src="https://cloudfront.grancursosonline.com.br/assets/site/img/logo/logo.svg"
                         alt="Gran Cursos Online"
                         width="162"
                    />
                </div>
                {renderItems()}
            </>
        )
    }

    return (
        <div className="sidenav-wrapper">
            <div className="sidenav d-none d-xl-block">
                {renderContent()}
            </div>
            {
                isOpen &&
                <>
                    <div className="sidenav__backdrop d-xl-none" onClick={toggleSidenav}/>
                    <div className="sidenav d-xl-none sidenav--floating">
                        {renderContent()}
                    </div>
                </>
            }
        </div>
    )
}

export default Sidenav;
