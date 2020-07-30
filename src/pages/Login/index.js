import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './styles.css';

export default function Login() {

    const { register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="login-container">
            <h1>Olá, que bom te ver de novo!</h1>
            <section className="login-form">
            <h2>Faça seu login:</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input type="email" name="email" id="" placeholder="E-mail" ref={register ({required: true}) }/>
                    <input type="password" name="password" id="" placeholder="Senha" ref={register ({required: "POR FAVOR, COLOQUE SUA SENHA"}) } />         
                
                    {errors.password && <p>{errors.password.message}</p>}
                   <input type="submit" />
                </form>

                    <Link to="/cadastro">Não tenho cadastro</Link>
               
            </section>
        </div>
    );
};