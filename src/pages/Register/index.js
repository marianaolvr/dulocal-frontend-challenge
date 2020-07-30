import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import './styles.css';


export default function Register() {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="register-container">
            <h1>CADASTRE-SE PARA COMPRAR</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Nome</label>
                <input
                    type="text"
                    name="name"
                    id="inputName"
                    ref={register({
                        required: "Informe o seu nome"
                    })}
                />
                {errors.name
                    &&
                    <p className="error">
                        {errors.name.message}
                    </p>
                }


                <label>E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="inputEmail"
                    ref={register({
                        required: "Informe o seu e-mail"
                    })}
                />
                {errors.email
                    &&
                    <p className="error">
                        {errors.email.message}
                    </p>
                }

                <label>Senha</label>
                <input
                    type="password"
                    name="password"
                    id="inputPassword"
                    ref={register({
                        required: "Crie uma senha com no mínimo 8 caracteres",
                        minLength: {
                            value: 8,
                            message: "Senha muito curta. Mínimo de 8 caracteres"
                        },
                    })}
                />
                {errors.password
                    &&
                    <p className="error">
                        {errors.password.message}
                    </p>
                }

                <label>Data de nascimento</label>
                <input
                    type="date"
                    name="date"
                    id="inputBirth"
                    ref={register({
                        required: "Informe sua data de nascimento"
                    })}
                />
                {errors.date
                    &&
                    <p className="error">
                        {errors.date.message}
                    </p>}

                <label>CPF</label>
                <input
                    type="text"
                    name="cpf"
                    id="inputCpf"
                    ref={register({
                        required: "Informe seu CPF"
                    })}
                />
                {errors.cpf
                    &&
                    <p className="error">
                        {errors.cpf.message}
                    </p>
                }


                <button
                    type="submit"
                    className="button">
                    Cadastrar</button>

            </form>
        </div>
    )
};