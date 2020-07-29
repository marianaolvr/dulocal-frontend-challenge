import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import './styles.css';
import axios from 'axios';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get().then(response => {
            setProducts(response.data);
        })
    }, []);

    return (
        <div className="products-container">
            <h1>Confira nossos produtos disponíveis:</h1>
            <div className="product-cards">
                <ul>
                    {products.map(product => (
                        <li key={product.id} className="product">
                            <img src={product.image} alt="" />
                            <h3>{product.name}</h3>
                            <strong>Valor</strong>
                            <p>{product.price}</p>
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    );
};