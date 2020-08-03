import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calcTotal } from '../../store/cart';
// import { createSelector } from 'reselect';

import './styles.css';

export default function PriceCalculator() {

    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    function calculeTotal(price) {
        dispatch(calcTotal(price));


        return (
            <div>
                <div className="total">{product.map((item) =>
                    <p>O VALOR TOTAL É: {() => calculeTotal(item.price)}</p>
                )}
                </div>
            </div>)
    }
}