import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const cookies = new Cookies();
const user = cookies.get("data");

function Cart() {
  const [cartPackages, setCartPackages] = useState([]);
  // const [price, setPrice] = useState(0);
  //
  // const getToken = () => document.cookie.replace("token=", "");

  const cartPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/client/cart?type=client`, {
        headers: {
          Accept: "application/json",
          Authorization: `${user.token}`,
        },
      })
    ).data.Carts;
    // data.forEach((e) => {
    //   setPrice(price + e.price);
    // });
    setCartPackages(data);
    // console.log(cartPackages);
  };

  const deleteCart = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/client/cart/${id}?type=client`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `${user.token}`,
          },
        }
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // const calculateTotalPrice=()=>{
  //   cartPackages.forEach(e=>{
  //     setPrice(price+e.price)
  //   })
  // }

  // console.log(price);
  useEffect(() => {
    cartPackagesHandeler();
    // calculateTotalPrice()
    //   eslint-disable-next-line
  }, [cartPackages]);

  function removeFromCart(id) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Package Removed",
      showConfirmButton: false,
      timer: 1500,
    });
    deleteCart(id);
  }

  return (
    <div className="cartPage">
      <div className="leftSide">
        <h1>Categories</h1>
      </div>
      <div className="rightSide">
        <div className="cartPackagesDiv">
          {/* <div className="branchCart">
        <div className="cardsSection"> */}
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
                  <p
                    className="RemoveCart"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
