import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


export default function Register() {
    return (
        <div className="register-container">
            <h1>CADASTRE-SE PARA COMPRAR</h1>
            <form action="">
                <label htmlFor="">Nome completo</label>
                <input type="text" />

                <label htmlFor="">E-mail</label>
                <input type="email" name="" id="" />

                <label htmlFor="">Crie uma senha</label>
                <input type="password" name="" id="" />

                <label htmlFor="">Data de nascimento</label>
                <input type="date" name="" id="input-birth" />

                <label htmlFor="">CPF</label>
                <input type="text" name="" id="input-cpf" />

                <button type="submit" className="button">Cadastrar</button>
            </form>
        </div>
    )
};