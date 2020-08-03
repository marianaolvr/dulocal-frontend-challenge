import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product';

import { getAllProducts } from '../../store/fetchActions';
import { addItem } from '../../store/cart'

export default function ProductList() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(getAllProducts());
        },
        [ dispatch ]
        );


    function addItemCart(product) {
        dispatch(addItem(product));
    }

        return(
            <div>
                <div>
                    {products.map((product, index) =>
                    <Product 
                    key={index} 
                    product={product}
                    addItemCart={addItemCart} />)}
                </div>
            </div>
        )

}