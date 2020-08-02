import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get().then(response => {
            setProducts(response.data);
        })
    }, []);

    return (
        <div className="products-container">
            <header>
                <ul className="navbar">
                    <li>
                        <Link to="/carrinho-de-compras">CARRINHO</Link>
                    </li>
                </ul>
            </header>

            <h1>Confira nossos produtos disponíveis:</h1>
            <div className="product-cards">

                {products.map(product => (
                    <div key={product.id} className="card">                  
                    
                    
                        <img 
                        src={product.image}
                    
                    
                    
    value={product.image} alt="" />

                        <div className="card-content">
                            <h4 
                            value={product.name}>
                                {product.name}</h4>

                            <p
                            value="product.price"><strong>Valor: </strong>
                                {product.price}</p>

                            <button type="submit">COMPRAR</button>
                        </div>
                    </div>
                ))}

            </div>



        </div>
    );
};






{/* <div className="units">
                                <input 
                                type="number" 
                                name=""
                                placeholder="Quantidade"
                                // value={addCart}
                                // onChange={

                                //     function PutCard(quantidade){
                                //         setAddCart(quantidade.target.value);
                                //         console.log(quantidade.target.value);
                                //     }
                                    
                                    // ESTA PEGANDO O NUMERO \o/

                                    // function HandlerStock(value){
                                    // setstockControl(value.target.value);
                                // }
                             />
                            </div> */}





    // const [stockControl, setStockControl] = useState([])
    // function onChange(infosDoEvento) {
    //     setStock(product.taget.value);
    // }


    // const [addItemCart, setAddItemCart] = useState([]);
        // function onClick(infosDoEvento){
        //     console.log(infosDoEvento);
        // }
