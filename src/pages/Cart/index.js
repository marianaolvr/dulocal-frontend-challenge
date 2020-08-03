import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart';
import Header from '../../components/Header';

import { BsArrowBarLeft } from 'react-icons/bs';

import cartImage from '../../assets/images/empt-shopping-cart.jpeg';
import './styles.css';

export default function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function removeItemCart(id) {
        dispatch(removeItem(id));
    };

    return (
        <div>{cart.length === 0 ? (
            <div className="emptCart">
                <div className="empt-cart-header">
                    <h1>SEU CARRINHO ESTÁ VAZIO</h1>
                    <Link className="btn-back" to="/lista-de-produtos"><BsArrowBarLeft />Voltar para o catálogo</Link>
                </div>
                <div className="empt-cart-img">
                    <img src={cartImage} alt="mulher com um carrinho de compras vazio" />
                </div>
            </div>)
            : (<React.Fragment>
                <Header />
                <div className="container">
                    <div className="product-cards">{cart.map((item) =>
                        <div className="card">
                            <img src={item.image} alt={item.name} />
                            <div className="card-content">
                                <h4 className="product-name">{item.name}</h4>
                                <p><strong>Valor: </strong>{item.price}</p>
                            </div>
                            <button className="btn" onClick={() => removeItemCart(item.id)}>Excluir produto</button>
                        </div>)}
                    </div>
                </div>
            </React.Fragment>)}</div>);
};