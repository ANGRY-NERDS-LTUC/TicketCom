import React, { useEffect, useState } from "react";
import axios from "axios";
import './home.css';

function Home() {

    const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
    const [homePackages, setHomePackages] = useState([]);

    const specialOfferPackagesHandeler = async() => {
        const data = await (await axios.get(`http://localhost:3001/home/specialOffers`)).data;
        setSpecialOfferPackages(data);
    }

    const homePackagesHandeler = async() => {
        const data = await (await axios.get(`http://localhost:3001/home/packages`)).data;
        setHomePackages(data);
    }

    const createWishlist = (id) => {
        return fetch(`http://localhost:3001/client/wishlist/${id}?type=client`, {
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
        specialOfferPackagesHandeler();
        homePackagesHandeler();
    }, []) 

    function addToCart(id) {
        createCart(id);
    }

    function addToWishlist(id) {
        createWishlist(id);
    }

    
    return (
        <div>
            <h1>Home</h1>
            <div className="specialOfferDiv">
                <h2>Special Offer packages</h2><br/>
                { specialOfferPackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="packageButton" onClick={ () => addToCart(item.id) }>Add to Cart</button>
                        <button className="packageButton" onClick={ () => addToWishlist(item.id) }>Add to Wishlist</button>
                    </div>
                </div> } )}
            </div>
            <div className="homePackagesDiv">
                <h2>Home packages</h2><br/>
                { homePackages.map( (item) => { return <div className="packageCard">
                    <img src={ item.image } alt="" width="350px" height="205px"/>
                    <div className="packageData">
                        <h3 className="packageCategory">{ item.createdBy }</h3>
                        <h3 className="packageDuration">{ item.duration } days</h3>
                        <h3 className="packagePrice">{ item.price } $</h3>
                        <h2 className="packageTitle">{ item.title }</h2>
                        <p className="packageDescription">{ item.description }</p>
                        <button className="packageButton" onClick={ () => addToCart(item.id) }>Add to Cart</button>
                        <button className="packageButton" onClick={ () => addToWishlist(item.id) }>Add to Wishlist</button>
                    </div>
                </div> } )}
            </div>
        </div>
    );

}

export default Home;