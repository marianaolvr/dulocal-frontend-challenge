import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/cart';

import Header from '../../components/Header';

import { BsArrowBarLeft } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';

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

                <div className="container-cart">
                    <Header />

                    <div className="resume">
                        <h2>O TOTAL É: </h2>
                        <div className="btns">
                            <button className="btn-resume">
                                <Link to="/lista-de-produtos">COMPRAR MAIS</Link>
                            </button>
                            <button className="btn-resume">
                                <Link to="/compra-concluida">FINALIZAR</Link></button>
                        </div>
                    </div>
                    <div className="product-cards-cart">{cart.map((item) =>
                        <div className="card-cart">
                            <img src={item.image} alt={item.name} />
                            <div className="card-content-cart">
                                <h4 className="product-name">{item.name}</h4>
                                <p><strong>Valor: </strong>{item.price}</p>
                            
                            <button className="btn-delete" onClick={() => removeItemCart(item.id)}><FiTrash2/></button>
                            </div>
                            </div>)}
                    </div>

                </div>
            </React.Fragment>)}</div>);
};