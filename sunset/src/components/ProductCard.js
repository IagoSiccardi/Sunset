import React from 'react';
import DefaultImage from '../assets/images/products/default-img.png'

const ProductCard = () => {
    return (
      <div className="buzo">
        <div className="img-container">
          <a href="/products/detail/1">
            <img src={DefaultImage} alt="Product" />
          </a>
          <span className="price">$3999 </span>
          <p>Hoddie Sunset</p>
        </div>
        {/* <div className="carrito">
          <a href="/">Añadir al carrito</a>
        </div> */}
      </div>
    );
}

export default ProductCard;
