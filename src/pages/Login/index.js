import React from 'react';

import './styles.css';

export default function Login() {
    return (
        <div className="login-container">
            <h1>Olá, que bom te ver de novo!</h1>
            <section className="login-form">
                <form action="">
                    <h2>Faça seu login:</h2>
                    <input type="email" name="" id="" placeholder="E-mail" />
                    <input type="password" name="" id="" placeholder="Senha" />
                    <button type="submit" className="button">Entrar</button>

                    <a href="/register">Não tenho cadastro</a>
                </form>
            </section>
        </div>
    );
};