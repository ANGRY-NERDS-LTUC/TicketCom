import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";

function Cart() {
  const [cartPackages, setCartPackages] = useState([]);

  const cartPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/client/cart?type=client`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDU3NjkxNX0.HhPyg_1wWXFGBXbgNGx4SrqXv6sxf5xSjy_UO9CZ2C8",
        },
      })
    ).data.Carts;
    setCartPackages(data);
    console.log(cartPackages);
  };

  const deleteCart = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/client/cart/${id}?type=client`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDU3NjkxNX0.HhPyg_1wWXFGBXbgNGx4SrqXv6sxf5xSjy_UO9CZ2C8",
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    cartPackagesHandeler();
    //   eslint-disable-next-line
  }, [cartPackages]);

  function removeFromCart(id) {
    deleteCart(id);
  }

  return (
    <div className="cart">
      {cartPackages.map((item) => {
        return (
          <div className="Card">
            <img src={item.image} alt="" className="image" />
            <div className="Data">
              <h2 className="Title">{item.title}</h2>
              <h3 className="Category">{item.createdBy}</h3>
              <h3 className="Duration">{item.duration} days</h3>
              <h3 className="Price">{item.price} $</h3>
              <p className="Description">{item.description}</p>
              <p className="purchase">Purchase</p>
              <p className="RemoveCart" onClick={() => removeFromCart(item.id)}>
                Remove
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
