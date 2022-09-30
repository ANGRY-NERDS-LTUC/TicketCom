import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';

function Home() {
  const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
  const [homePackages, setHomePackages] = useState([]);

  const specialOfferPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:5000/home/specialOffers`)
    ).data;
    setSpecialOfferPackages(data);
  };

  const homePackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:5000/home/packages`)
    ).data;
    setHomePackages(data);
  };

  const createWishlist = (id) => {
    return fetch(`http://localhost:5000/client/wishlist/${id}?type=client`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImJhaGFhIiwiaWF0IjoxNjY0NTUxNTg2fQ.ZiAMO25q7jxXCsufgItTuYg7N43UyNYFMXqlO8oy6Aw`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createCart = (id) => {
    return fetch(`http://localhost:5000/client/cart/${id}?type=client`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImJhaGFhIiwiaWF0IjoxNjY0NTUxNTg2fQ.ZiAMO25q7jxXCsufgItTuYg7N43UyNYFMXqlO8oy6Aw`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    specialOfferPackagesHandeler();
    homePackagesHandeler();
  }, []);

  function addToCart(id) {
    createCart(id);
    // alert("Card added to Cart!");
  }

  function addToWishlist(id) {
    createWishlist(id);
    // alert("Card added to Wishlist!")
  }

  return (
    <div className='homePage'>
      <h1>Home</h1>
      <h2>Special Offer packages</h2>
      <br />
      <div className='specialOfferDiv'>
        {specialOfferPackages.map((item) => {
          return (
            <div className='Card'>
              <img
                src={item.image}
                alt=''
                className='image'
              />
              <div className='Data'>
                <h2 className='Title'>{item.title}</h2>
                <h3 className='Category'>{item.createdBy}</h3>
                {/* <h3 className="Duration">{ item.duration } days</h3> */}
                <h3 className='Price'>{item.price} $</h3>
                <p className='Description'>{item.description}</p>
                <p
                  className='Wishlist'
                  onClick={() => addToWishlist(item.id)}>
                  Add to Wishlist
                </p>
                <p
                  className='Cart'
                  onClick={() => addToCart(item.id)}>
                  Add to Cart
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Home packages</h2>
      <br />
      <div className='homePackagesDiv'>
        {homePackages.map((item) => {
          return (
            <div className='Card'>
              <img
                src={item.image}
                alt=''
                className='image'
              />
              <div className='Data'>
                <h2 className='Title'>{item.title}</h2>
                <h3 className='Category'>{item.createdBy}</h3>
                {/* <h3 className="Duration">{ item.duration } days</h3> */}
                <h3 className='Price'>{item.price} $</h3>
                <p className='Description'>{item.description}</p>
                <p
                  className='Wishlist'
                  onClick={() => addToWishlist(item.id)}>
                  Add to Wishlist
                </p>
                <p
                  className='Cart'
                  onClick={() => addToCart(item.id)}>
                  Add to Cart
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
