import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Register} />

                <Route path="/produtos" component={Products} />
                <Route path="/carrinho-de-compras" component={Cart} />
           
            </Switch>
        </BrowserRouter>

    );
};