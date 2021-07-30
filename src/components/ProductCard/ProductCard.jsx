import * as React from 'react';
import './styles.css';
import RatingBadge from "../RatingBadge/RatingBadge";

const ProductCard = ({name, vendor, description, price, className, rating}) => {

    function getRandomNumber() {
        return Math.floor(Math.random() * (230 - 210)) + 210;
    }

    return (
        <div className={`product-card-wrapper product-card row g-0 ${className}`}>
            <div className="col product-card__section align-self-center">
                <div className="row">
                    <div className="col-auto">
                        <img width="210" height="210" src={`https://www.placecage.com/${getRandomNumber()}/${getRandomNumber()}`} alt="produto"/>
                    </div>
                    <div className="col">
                        <div className="fs-6">
                            {name}
                        </div>
                        <div className="product-card__subtitle">
                            By <strong>{vendor}</strong>
                        </div>
                        <div className="product-card__description">
                            {description}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="d-sm-none d-md-block d-xl-none mb-0"/>
            <div className="product-card__divider d-none d-sm-block d-md-none d-xl-block"/>
            <div className="col-12 col-sm-3 col-md-12 col-xl-3 col-xxl-2 d-flex align-items-end product-card__info">
                <div className="row g-0 flex-fill align-items-center">
                    <div className="col-5 col-sm-12 col-md-5 col-xl-12">
                        {
                            rating &&
                            <div className="text-center text-sm-end text-md-center text-xl-end mb-3">
                                <RatingBadge
                                    rate={rating}
                                    className="mb-3"
                                />
                            </div>
                        }
                        <div className="product-card__price text-center mb-1">{price}</div>
                        <div className="c-fs-7 fw-light text-center mb-0 mb-sm-3 mb-md-0 mb-xl-3"><i
                            className="far fa-shopping-cart"/> Free Shipping
                        </div>
                    </div>
                    <div className="col-7 col-sm-12 col-md-7 col-xl-12 text-center">
                        <div>
                            <button
                                className="btn bg-g-purple-500 text-g-light-100 product-card__button product-card__button--wishlist c-fs-7 fw-bold"
                                type="submit">
                                <i className="far fa-heart me-2"/>WISHLIST
                            </button>
                        </div>
                        <div>
                            <button
                                className="btn bg-g-blue-600 text-g-light-100 product-card__button product-card__button--add-cart c-fs-7 fw-bold"
                                type="submit">
                                <i className="far fa-cart-plus me-2"/>ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
