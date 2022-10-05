import React, { useEffect, useState } from "react";
import "./bookingList.scss";
import axios from "axios";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const cookies = new Cookies();
const user = cookies.get("data");

function BookingList() {
  const [homePackages, setHomePackages] = useState([]);

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
        Authorization: `${user.token}`,
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
        Authorization: `${user.token}`,
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
    homePackagesHandeler();
  }, [homePackages]);

  function addToCart(id) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your package Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
    createCart(id);
  }

  function addToWishlist(id) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your package Added to Wishlist",
      showConfirmButton: false,
      timer: 1500,
    });
    createWishlist(id);
  }

  return (
    <div className="bookingList">
      <div className="leftSide">
        <h1>Categories</h1>
        <form className="filterForm">
          <label>Duration</label>
          <input type="number" ></input>
          <label>Price</label>
          <input type="range"></input>
          <input type="submit"></input>
        </form>
      </div>
      <div className="rightSide">
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
    </div>
  );
}

export default BookingList;