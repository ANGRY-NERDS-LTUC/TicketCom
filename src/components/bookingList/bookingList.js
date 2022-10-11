import React, { useEffect, useState } from "react";
import "./bookingList.scss";
import axios from "axios";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const cookies = new Cookies();
const user = cookies.get("data");

function BookingList() {
  const [homePackages, setHomePackages] = useState([]);
  const [minDuration, setMinDuration] = useState("");
  const [maxDuration, setMaxDuration] = useState("");

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
    window.scrollTo(0, 0);
    homePackagesHandeler();
  }, []);

  const handleChange1 = (event) => {
    setMinDuration(event.target.value.replace(/\D/, ""));
  };
  const handleChange2 = (event) => {
    setMaxDuration(event.target.value.replace(/\D/, ""));
  };
  function addToCart(id) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your package Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
    createCart(id);
  }

  function addToWishlist(id) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Your package Added to Wishlist",
      showConfirmButton: false,
      timer: 1500,
    });
    createWishlist(id);
  }

  function durationFilterHandeler(e) {
    e.preventDefault();
    let minDuration = parseInt(e.target.minDuration.value);
    let maxDuration = parseInt(e.target.maxDuration.value);
    if (minDuration <= maxDuration) {
      setHomePackages(
        homePackages.filter((item) => {
          return item.duration >= minDuration && item.duration <= maxDuration;
        })
      );
      e.target.reset();
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "The min value should be smaller than max value",
        showConfirmButton: false,
        timer: 1500,
      });
      e.target.reset();
    }
  }

  function priceFilterHandeler(e) {
    e.preventDefault();
    let minPrice = parseInt(e.target.minPrice.value);
    let maxPrice = parseInt(e.target.maxPrice.value);
    if (minPrice <= maxPrice) {
      setHomePackages(
        homePackages.filter((item) => {
          return item.price >= minPrice && item.price <= maxPrice;
        })
      );
      e.target.reset();
    } else {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "The min value should be smaller than max value",
        showConfirmButton: false,
        timer: 2000,
      });
      e.target.reset();
    }
  }

  function resetHandeler(e) {
    e.preventDefault();
    homePackagesHandeler();
    setMinDuration("");
    setMaxDuration("");
  }

  return (
    <div className="bookingList">
      <div className="leftSide">
        <h1>Categories</h1>
        <form>
          <input type="reset" className="filterInput" onClick={resetHandeler} />
        </form>
        <form
          name="durationFilter"
          className="filterForm"
          onSubmit={durationFilterHandeler}
        >
          <label className="filterLabel">Duration(days)</label>
          <br />
          <input
            value={minDuration}
            onChange={handleChange1}
            className="numberInput"
            type="number"
            min="0"
            placeholder="min"
            name="minDuration"
            required
          />
          <input
            value={maxDuration}
            onChange={handleChange2}
            className="numberInput"
            type="number"
            min="0"
            placeholder="max"
            name="maxDuration"
            required
          />
          <br />
          <input type="submit" className="filterInput" />
        </form>
        <br />
        <form
          name="priceFilter"
          className="filterForm"
          onSubmit={priceFilterHandeler}
        >
          <label className="filterLabel">Price($)</label>
          <br />
          <input
            className="numberInput"
            type="number"
            min="0"
            step="10"
            placeholder="min"
            name="minPrice"
            required
          />
          <input
            className="numberInput"
            type="number"
            min="0"
            step="10"
            placeholder="max"
            name="maxPrice"
            required
          />
          <br />
          <input type="submit" className="filterInput" />
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
                  <button
                    className="Wishlist"
                    onClick={() => addToWishlist(item.id)}
                  >
                    Add to Wishlist
                  </button>
                  <button className="Cart" onClick={() => addToCart(item.id)}>
                    Add to Cart
                  </button>
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
