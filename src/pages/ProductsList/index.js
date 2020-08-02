import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product';

export default function ProductList() {
    const products = useSelector((state) => state.products);
    // const dispatch = useDispatch();


    // useEffect(
    //     () => {
    //         dispatch(getAllProducts());
    //     },
    //     [ dispatch ]
    // );


        return(
            <div>
                <div>
                    {products.map((product, index) =>
                    <Product key={index} product={product}/>)}
                </div>
            </div>
        )

}