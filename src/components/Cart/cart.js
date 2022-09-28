import React, { useState, useEffect } from "react";
import axios from "axios";
import './cart.css';

function Cart() {

    const [cartPackages, setCartPackages] = useState([]);

    const cartPackagesHandeler = async() => {
        const data = await (await axios.get(`http://localhost:3001/client/cart?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDM2NTA3MH0.tdAqbx5amEvpf64Wk7ZuTsq2zfW5ZxF--ndIQ-cT9F0'
            }
        })).data.Carts;
        setCartPackages(data);
        console.log(cartPackages);
    }

    const deleteCart = async(id) => {
        try {
            const res = await axios.delete(`http://localhost:3001/client/cart/${id}?type=client`, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDM2NTA3MH0.tdAqbx5amEvpf64Wk7ZuTsq2zfW5ZxF--ndIQ-cT9F0'
                }
            });
            console.log(res.data)
        }
        catch(err) {
            console.log(err);
        } 
    }

    useEffect( () => {
        cartPackagesHandeler();
    }, [cartPackages]);

    function removeFromCart(id) {
        deleteCart(id);
    }

    return (
        <div className="cart">
            <h1>Cart Page</h1>
            { cartPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.category }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="packageButton" onClick={ () => removeFromCart(item.id) }>Remove from Cart</button>
                    </div>
                </div> } )}
        </div>
    );
}

export default Cart;