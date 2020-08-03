import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calcTotal } from '../../store/cart';
import { createSelector } from 'reselect';

import './styles.css';

export default function PriceCalculator() {

    // const product = useSelector((state) => state.product);

    const calculeTotal = createSelector(
        state => state.items,
        items => {
            console.log("CALCULOU");
            return items.reduce(
                (subtotal, item) => subtotal + item.price, 0
            )
        }
    );

    return (
        <div>
            <div className="total">
               <p>O total é: {calculeTotal}</p> 
            </div>
        </div>);

}