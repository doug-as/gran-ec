import * as React from 'react';
import TopBar from "../../components/TopBar/TopBar";
import PageTitle from "../../components/PageTitle/PageTitle";
import FiltersCard from "../../components/FiltersCard/FiltersCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import Select from "../../components/Select/Select";
import FilterButton from "../../components/FilterButton/FilterButton";
import Pagination from "../../components/Pagination/Pagination";

import productsData from "../../data/products";

import './styles.css';

class ECommerce extends React.Component {

    renderProducts = () => {
        return productsData.map((product, index) => {
            return (
                <ProductCard
                    key={index}
                    className="page__product"
                    name={product.name}
                    vendor={product.vendor}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                />
            )
        })
    }

    render() {
        return (
            <div className="ecommerce-wrapper page">
                <TopBar toggleSidenav={this.props.toggleSidenav}/>
                <PageTitle
                    className="page__page-title"
                    breadcrumbs={['eCommerce', 'Electronics']}
                />
                <div className="row">
                    <div className="col-12 col-md-5 col-lg-4 col-xxl-3 page__page-filters">
                        <FiltersCard/>
                    </div>
                    <div className="col mt-4 mt-md-0">
                        <div className="mb-4">
                            <div className="row g-2 align-items-end page__search-actions">
                                <div className="col page__section-title">
                                    7,618 results found in 5ms
                                </div>
                                <div className="col-auto">
                                    <Select
                                        name="category-select"
                                        id="category-select"
                                        options={[
                                            {
                                                label: 'Default',
                                                value: 'default',
                                            }
                                        ]}
                                    />
                                </div>
                                <div className="col-auto">
                                    <FilterButton icon="fa-grip-horizontal"/>
                                </div>
                                <div className="col-auto">
                                    <FilterButton icon="fa-bars"/>
                                </div>
                            </div>
                            <SearchBar/>
                        </div>
                        {this.renderProducts()}
                        <Pagination className="justify-content-center page__pagination"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ECommerce;
