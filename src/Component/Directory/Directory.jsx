import React from 'react';
import './Directory.style.scss'

import CategoryCart from '../Category/CategoryCart.jsx';

function Directory({ categories }) {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
                <CategoryCart key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Directory;