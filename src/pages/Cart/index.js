import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart';
import Header from '../../components/Header';
// import PriceCalculator from '../../components/PriceCalculator';

import './styles.css';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function removeItemCart(id) {
        dispatch(removeItem(id));
    };



    function priceCalculator(price) {
        console.log(price);
        return price.reduce((subtotal, item) => subtotal + item.price);
    }

    return (
        <div>
            {cart.length === 0 ? (<h4>O carrinho está vazio</h4>)
                : (
                    <React.Fragment>
                        <Header />
                        <div className="container">
                            <div className="product-cards">
                                {cart.map((item) =>
                                    <div>
                                        <div className="card">
                                            <img src={item.image} alt={item.name} />

                                            <div className="card-content">
                                                <h4 className="product-name">{item.name}</h4>
                                                <p><strong>Valor: </strong>
                                                    {item.price}</p>
                                            </div>
                                            <button
                                                className="btn"
                                                onClick={() =>
                                                    removeItemCart(item.id)}>
                                                Excluir produto</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </React.Fragment>
                )}

        </div>);

}

// .reduce((subtotal, item) => subtotal + item.price)