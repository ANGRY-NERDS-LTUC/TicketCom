import React, { useState, useEffect } from "react";
import axios from "axios";
import './wishlist.css';

function Wishlist() {

    const [wishlistPackages, setWishlistPackages] = useState([]);

    const wishlistPackagesHandeler = async() => {
        const data = await (await axios.get(`http://localhost:3001/client/wishlist?type=client`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDM2NTA3MH0.tdAqbx5amEvpf64Wk7ZuTsq2zfW5ZxF--ndIQ-cT9F0'
            }
        })).data.wishLists;
        setWishlistPackages(data);
        console.log(wishlistPackages);
    }

    const deleteWishlist = async(id) => {
        try {
            const res = await axios.delete(`http://localhost:3001/client/wishlist/${id}?type=client`, {
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

    const createCart = (id) => {
        return fetch(`http://localhost:3001/client/cart/${id}?type=client`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDM2NTA3MH0.tdAqbx5amEvpf64Wk7ZuTsq2zfW5ZxF--ndIQ-cT9F0`
            }
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };

    useEffect( () => {
        wishlistPackagesHandeler();
    }, [wishlistPackages]);

    function removeFromWishlist(id) {
        deleteWishlist(id);
    } 

    function addToCart(id) {
        createCart(id);
    }

    return (
        <div className="wishlist">
            <h1>Wishlist Page</h1>
            { wishlistPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.category }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="packageButton" onClick={ () => addToCart(item.package_Id) }>Add to Cart</button>
                        <button className="packageButton" onClick={ () => removeFromWishlist(item.id) }>Remove from Wishlist</button>
                    </div>
                </div> } )}
        </div>
    );
}

export default Wishlist;