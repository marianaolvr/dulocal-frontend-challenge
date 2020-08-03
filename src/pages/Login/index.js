import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './styles.css';

export default function Login() {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {

        if (data.email === 'email@teste.com' && data.password === '123456789') {
            
            console.log(data);

            history.push('/lista-de-produtos');
        }else {
        alert('Usuário ou senha inválidos. Tente novamente!');
    }
}

    return (
        <div className="login-container">
            <h1>Olá, que bom te ver de novo!</h1>
            <section className="login-form">
                <h2>Faça seu login:</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        ref={register({
                            required: "Por favor, informe o seu e-mail cadastrado",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Formato de e-mail inválido"
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        ref={register({
                            required: "Por favor, coloque sua senha"
                        })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}

                    <button type="submit" className="button">Entrar</button>
                </form>

                <Link to="/cadastro">Não tenho cadastro</Link>

            </section>
        </div>
    );
};