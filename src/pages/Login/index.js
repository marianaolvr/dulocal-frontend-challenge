import React from 'react';

import './styles.css';

export default function Login() {
    return (
        <div class="login-container">
            <h1>Bem-vindo de volta!</h1>
            <section className="form">
                <form action="">
                    <h2>Faça seu login:</h2>
                    <input type="email" name="" id="" placeholder="E-mail" />
                    <input type="password" name="" id="" placeholder="Senha" />
                    <button type="submit">Entrar</button>

                    <a href="/register">Não tenho cadastro</a>
                </form>
            </section>
        </div>
    );
};