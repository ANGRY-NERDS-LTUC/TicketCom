import React, { useState, useEffect } from "react";
import axios from "axios";
import "./wishlist.css";

function Wishlist() {
  const [wishlistPackages, setWishlistPackages] = useState([]);

  const getToken = () => document.cookie.replace("token=", "");

  const wishlistPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/client/wishlist?type=client`, {
        headers: {
          Accept: "application/json",
          Authorization: `${getToken()}`,
        },
      })
    ).data.wishLists;
    setWishlistPackages(data);
    console.log(wishlistPackages);
  };

  const deleteWishlist = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/client/wishlist/${id}?type=client`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `${getToken()}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const createCart = (id) => {
    return fetch(`http://localhost:3001/client/cart/${id}?type=client`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `${getToken()}`,
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
    wishlistPackagesHandeler();
    // eslint-disable-next-line
  }, [wishlistPackages]);

  function removeFromWishlist(id) {
    deleteWishlist(id);
  }

  function addToCart(id) {
    createCart(id);
  }

  return (
    <div className="wishlist">
      {wishlistPackages.map((item) => {
        return (
          <div className="Card">
            <img src={item.image} alt="" className="image" />
            <div className="Data">
              <h2 className="Title">{item.title}</h2>
              <h3 className="Category">{item.createdBy}</h3>
              <h3 className="Duration">{item.duration} days</h3>
              <h3 className="Price">{item.price} $</h3>
              <p className="Description">{item.description}</p>
              <p className="AddCart" onClick={() => addToCart(item.package_Id)}>
                Add to Cart
              </p>
              <p
                className="RemoveWishlist"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wishlist;
