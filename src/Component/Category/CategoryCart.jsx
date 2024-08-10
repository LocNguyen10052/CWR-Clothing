import React from 'react';
import PropTypes from 'prop-types';
import './Categories.style.scss'
CategoryCart.propTypes = {

};

function CategoryCart({ category }) {
    return (
        <div className='category-container'>
            <div className='background-image'
                style={{ backgroundImage: `url(${category.imageUrl})` }}
            >
            </div>
            <div className='category-body-container'>
                <h2>{category.title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    );
}

export default CategoryCart;