import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

function Home() {
  const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
  const [homePackages, setHomePackages] = useState([]);

  const specialOfferPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/home/specialOffers`)
    ).data;
    setSpecialOfferPackages(data);
  };

  const homePackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/home/packages`)
    ).data;
    setHomePackages(data);
  };

  const createWishlist = (id) => {
    return fetch(`http://localhost:3001/client/wishlist/${id}?type=client`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDU3NjkxNX0.HhPyg_1wWXFGBXbgNGx4SrqXv6sxf5xSjy_UO9CZ2C8`,
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
    return fetch(`http://localhost:3001/client/cart/${id}?type=client`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDU3NjkxNX0.HhPyg_1wWXFGBXbgNGx4SrqXv6sxf5xSjy_UO9CZ2C8`,
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
    <div className="homePage">
      <div className="offersDiv">
        <h2 className="offersTitle">BEST TOURS</h2>
        <h4 className="offersTitle">CHECK OUT OUR TOP-RATED TOURS</h4>
        <br />
        <div className="specialOfferDiv">
          {specialOfferPackages.map((item) => {
            return (
              <div className="Card">
                <img src={item.image} alt="" className="image" />
                <div className="Data">
                  <h2 className="Title">{item.title}</h2>
                  <h3 className="Category">{item.createdBy}</h3>
                  <h3 className="Duration">{item.duration} days</h3>
                  <h3 className="Price">{item.price} $</h3>
                  <p className="Description">{item.description}</p>
                  <p
                    className="Wishlist"
                    onClick={() => addToWishlist(item.id)}
                  >
                    Add to Wishlist
                  </p>
                  <p className="Cart" onClick={() => addToCart(item.id)}>
                    Add to Cart
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="whyusDiv">
        <h2 className="offersTitle">WHY CHOOSE US?</h2>
        <h4 className="offersTitle">A BRAND NAME YOU CAN TRUST AND RELY ON</h4>
        <br />
        <div className="">
          <div>
            <img
              className="homeImage"
              src="https://www.flaticon.com/free-icon/hand_1077976?term=money%20symbol&page=1&position=1&page=1&position=1&related_id=1077976&origin=search"
              alt=""
            />
            <h3>AFFORDABLE PRICE GUARANTEE</h3>
          </div>
          <div>
            <img
              className="homeImage"
              src="https://www.flaticon.com/free-icon/earth-with-continents_44720?term=earth%20symbol&page=1&position=17&page=1&position=17&related_id=44720&origin=search"
              alt=""
            />
            <h3>WIDE VARIETY OF DESTINATIONS</h3>
          </div>
          <div>
            <img
              className="homeImage"
              src="https://www.flaticon.com/free-icon/thumbs-up-hand-symbol_25423?term=like%20symbol&page=1&position=27&page=1&position=27&related_id=25423&origin=search"
              alt=""
            />
            <h3>HIGHLY QUALIFIED SERVICE</h3>
          </div>
        </div>
      </div>
      {/* <h2>Home packages</h2>
      <br />
      <div className="homePackagesDiv">
        {homePackages.map((item) => {
          return (
            <div className="Card">
              <img src={item.image} alt="" className="image" />
              <div className="Data">
                <h2 className="Title">{item.title}</h2>
                <h3 className="Category">{item.createdBy}</h3>
                <h3 className="Duration">{item.duration} days</h3>
                <h3 className="Price">{item.price} $</h3>
                <p className="Description">{item.description}</p>
                <p className="Wishlist" onClick={() => addToWishlist(item.id)}>
                  Add to Wishlist
                </p>
                <p className="Cart" onClick={() => addToCart(item.id)}>
                  Add to Cart
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Home;
