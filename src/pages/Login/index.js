import React from 'react';

import './styles.css';

export default function Login() {
    return (
        <div class="login-container">
            <h1>BEM-VINDO DE VOLTA!</h1>
            <section className="login-form">
                <form action="">
                    <h2>Faça seu login:</h2>
                    <input type="email" name="" id="" placeholder="E-mail" />
                    <input type="password" name="" id="" placeholder="Senha" />
                    <button type="submit" class="button">Entrar</button>

                    <a href="/register">Não tenho cadastro</a>
                </form>
            </section>
        </div>
    );
};