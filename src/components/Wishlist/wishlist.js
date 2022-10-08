import React, { useState, useEffect } from "react";
import axios from "axios";
import "./wishlist.css";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
const cookies = new Cookies();
const user = cookies.get("data");

function Wishlist() {
  const [wishlistPackages, setWishlistPackages] = useState([]);

  const getToken = () => document.cookie.replace("token=", "");

  const wishlistPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/client/wishlist?type=client`, {
        headers: {
          Accept: "application/json",
          Authorization: `${user.token}`,
        },
      })
    ).data.wishLists;
    setWishlistPackages(data);
    // console.log(wishlistPackages);
  };

  const deleteWishlist = async (id) => {
    try {
      wishlistPackagesHandeler()
      const res = await axios.delete(
        `http://localhost:3001/client/wishlist/${id}?type=client`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `${user.token}`,
          },
        }
      );
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
  
  // useEffect(() => {
  //   wishlistPackagesHandeler();
  //   // eslint-disable-next-line
  // }, []);
  useEffect(() => {
    wishlistPackagesHandeler();
    // eslint-disable-next-line
  }, []);


  function removeFromWishlist(id) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Package removed",
      showConfirmButton: false,
      timer: 1500,
    });
    deleteWishlist(id);
  }

  function addToCart(id) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your package added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
    createCart(id);
  }

  return (
    <div className="wishlist">
      <div className="branchWishlist">
        <div className="wishlistSection">
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
                  <button
                    className="AddCart"
                    onClick={() => addToCart(item.package_Id)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="RemoveWishlist"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Remove
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

export default Wishlist;
