import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import './styles.css';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get().then(response => {
            setProducts(response.data);
        })
    }, []);

    return (


        <div className="products-container">

            <header>
                <ul className="navbar">
                    <li><a href="">CARRINHO</a></li>
                </ul>
            </header>

            <h1>Confira nossos produtos disponíveis:</h1>
            <div className="product-cards">

                {products.map(product => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt="" />

                        <div className="card-content">
                            <h4>{product.name}</h4>
                            <p><strong>Valor: </strong>{product.price}</p>

                            <div className="units">
                                <input type="number" name="" id="" placeholder="Quantidade" />
                            </div>
                            <button type="submit" className="btn">COMPRAR</button>
                        </div>
                    </div>
                ))}

            </div>



        </div>
    );
};