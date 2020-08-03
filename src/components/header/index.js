import react from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
    return (
    <header>
        <ul className="navbar">
            <li><Link to="/carrinho-de-compras">CARRINHO</Link></li>
        </ul>

        <ul>
            <Link to="/carrinho-de-compras">
                <span>Quantidade</span>
            </Link>
        </ul>
    </header>
    )
}
