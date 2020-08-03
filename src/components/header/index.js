import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

import './styles.css';

export default function Header() {

    const length = useSelector(state => state.cart.length);

    return (
        <header className="container">
            <ul className="navbar">
                <li>
                    <Link to="/carrinho-de-compras">
                        <p><FiShoppingCart /> {length}</p>
                    </Link>
                </li>
            </ul>


        </header>
    )
}
