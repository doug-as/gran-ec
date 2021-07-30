import * as React from 'react';
import './styles.css';

const PageTitle = ({className, breadcrumbs}) => {

    function renderBreadcrumbs() {
        if (!breadcrumbs) {
            return null
        }

        return breadcrumbs.map((breadcrumb, index) => {
            return (
                <span key={index}>
                    <i className="far fa-chevron-double-right page-title__breadcrumb-divider"/>
                    <span className="page-title__breadcrumb-text">{breadcrumb}</span>
                </span>
            )
        })
    }

    return (
        <div className={`page-title-wrapper ${className} row g-0 align-items-center`}>
            <span className="col-auto fs-4">
                Card Actions
            </span>
            <div className="page-title__divider col-auto"/>
            <div className="page-title__breadcrumb col">
                <i className="far fa-home"/>
                {renderBreadcrumbs()}
            </div>
            <div className="col-auto">
                <div className="page-title__config-btn">
                    <i className="far fa-cog"/>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;
