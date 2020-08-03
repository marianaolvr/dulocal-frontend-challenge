import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Product from '../../components/Product';
import Header from '../../components/Header';


import { getAllProducts } from '../../store/fetchActions';
import { addItem } from '../../store/cart'

import './styles.css';

export default function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    },
        [dispatch]
    );


    function addItemCart(product) {
        dispatch(addItem(product));
    }

    return (
        <div>
            <Header />
            
            <div className="products-container">
            
            <Link to="/carrinho-de-compras">IR PARA O CARRINHO</Link>
                <div className="product-cards">
                    {products.map((product, index) =>
                        <Product
                            key={index}
                            product={product}
                            addItemCart={addItemCart} />)}
                </div>
            </div>
        </div>
    )

}