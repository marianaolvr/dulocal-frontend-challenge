import React from 'react';
import { Link } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

import './styles.css';

export default function Header() {

    const length = useSelector(state => state.cart.length);

    return (
    <header>
        <ul className="navbar">
            <li><Link to="/carrinho-de-compras">CARRINHO</Link></li>
        </ul>

        <ul>
            <Link to="/carrinho-de-compras">
                <p>Quantidade</p><span>{length}</span>
            </Link>
        </ul>
    </header>
    )
}
