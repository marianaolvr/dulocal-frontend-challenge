import React from 'react';
import './styles.css';

export default function Home() {
    return (
        <div className="index-container">
            <h1>SUA LOJA FAVORITA</h1>
            <h2>Entre ou cadastre-se para conferir os produtos</h2>
            <section className="index-buttons">
                <button className="button" type="submit">Já sou cliente, quero entrar!</button>
                <button className="button" type="submit">Primeira vez aqui, vou me cadastrar (:</button>
            </section>
        </div>
    )
};