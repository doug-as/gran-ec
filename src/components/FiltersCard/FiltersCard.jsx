import * as React from 'react';
import Radio from "../Radio/Radio";
import Checkbox from "../Checkbox/Checkbox";

import './styles.css';
import Range from "../Range/Range";

const FiltersCard = () => {

    return (
        <div className="filters-card-wrapper filters-card">
            <div className="filters-card__title mb-3">
                Filters
            </div>
            <div className="filters-card__card">
                <div className="filters-card__section-title">
                    Multi Range
                </div>
                <div>
                    <Radio
                        name="price-radio"
                        id="10"
                        label="$10"
                    />
                    <Radio
                        name="price-radio"
                        id="10-100"
                        label="$10-$100"
                    />
                    <Radio
                        name="price-radio"
                        id="100-500"
                        label="$100-$500"
                    />
                    <Radio
                        name="price-radio"
                        id="500"
                        label="$500"
                    />
                    <Radio
                        name="price-radio"
                        id="all"
                        label="All"
                    />
                </div>
                <hr className="filters-card__divider"/>
                <div className="filters-card__section-title d-flex justify-content-between">
                    <div>Slider</div><div>1.99 - 4098</div>
                </div>
                <div>
                    <Range id="price-range"/>
                </div>
                <hr className="filters-card__divider mt-3"/>
                <div className="filters-card__section-title">
                    Category
                </div>
                <div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="cellphones" value="cellphones" label="Cell Phones"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            1920
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="computers-tablets" value="computers-tablets" label="Computers & Tablets"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            1820
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="cellphone-accessories" value="" label="Cellphone Accessories"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            462
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Appliances"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            6556
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Audio"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            120
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="iPhone Accessories"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            353
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Cameras & Camcorders"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            45
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="iPhone Cases & Clips"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            456
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="TV & Home Theater"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            55
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Small Kitchen Appliances"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            10
                        </div>
                    </div>
                </div>
                <hr className="filters-card__divider"/>
                <div className="filters-card__section-title">
                    Brand
                </div>
                <div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="cellphones" value="cellphones" label="Insigni"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            220
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="computers-tablets" value="computers-tablets" label="Samsung"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            120
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="cellphone-accessories" value="" label="Apple"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            320
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="HP"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            32
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Sony"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            520
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Metra"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            55
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Dyne"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            120
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="LG"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            98
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Canon"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            99
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Checkbox id="" value="" label="Speck"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            575
                        </div>
                    </div>
                </div>
                <hr className="filters-card__divider"/>
                <div className="filters-card__section-title">
                    Rating
                </div>
                <div className="filters-card__ratings">
                    <div className="row">
                        <div className="col">
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            8500
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="far fa-star text-g-yellow-500"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            3250
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="fas fa-star text-g-yellow-500"/>
                            <i className="far fa-star text-g-yellow-500"/>
                            <i className="far fa-star text-g-yellow-500"/>
                        </div>
                        <div className="col-auto filters-card__total">
                            1120
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn bg-g-mid-900 text-g-light-100 filters-card__button" type="submit">
                CLEAR ALL FILTERS
            </button>
        </div>
    )
}

export default FiltersCard;
