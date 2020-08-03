import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart';

import './styles.css';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function removeItemCart(id) {
        dispatch(removeItem(id));
    };


    return (
        <div>{cart.length === 0 ? (<h4>O carrinho está vazio</h4>)
            : (
                <React.Fragment>
                    {cart.map((item) => (
<div className="container">
                        <div key={item.id} className="product-cards">
                            <div className="card">
                                <img src={item.image} alt={item.name} />

                                <div className="card-content">
                                    <h4 className="product-name">{item.name}</h4>
                                    <p><strong>Valor: </strong>
                                        {item.price}</p>
                                </div>

                                <button
                                    className="btn"
                                    onClick={() => removeItemCart(item.id)}>Excluir produto</button>
                            </div>
                        </div>
                        </div>

                    ))}
                </React.Fragment>
            )
        }
        </div>);

}