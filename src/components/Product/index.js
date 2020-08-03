import React from 'react';


import './styles.css';

export default function Product({ product }) {
    return (
        <div className="product-cards">
            <div className="card">
                <img src={product.image} alt={product.name} />

                <div className="card-content">
                    <h4 className="product-name">{product.name}</h4>
                    <p><strong>Valor: </strong>
                        {product.price}</p>
                    <button>COMPRAR</button>
                </div>
            </div>
        </div>
    )
}