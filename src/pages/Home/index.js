import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Home() {
    return (
        <div className="index-container">
            <h1>SUA LOJA FAVORITA</h1>
            <h2>Entre ou cadastre-se para conferir os produtos</h2>

            <section className="index-buttons">

                <Link to="/login">
                    <button className="button">Já sou cliente, quero entrar!</button>
                </Link>

                <Link to="/cadastro">
                    <button className="button">Primeira vez aqui, vou me cadastrar (:</button>
                </Link>
            </section>

        </div>
    )
};