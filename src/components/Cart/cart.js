import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";

const cookies = new Cookies();
const user = cookies.get("data");

function Cart() {
  const [cartPackages, setCartPackages] = useState([]);
  const [price, setPrice] = useState(0);
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
    const total = data.reduce((prev, curr) => {
      return prev + curr.price;
    }, 0);
    setPrice(total);
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

  const deleteAllCart = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3001/client/cart?type=client`,
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

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  function checkoutHandeler() {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          //true =yes
          deleteAllCart();
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
        } else if (
          //false cancel
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: "Package Removed",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    // deleteAllCart();
  }

  return (
    <div className="cartPage">
      <div className="leftSide">
        <h1 className="cartTitle">CART</h1>
        <div>
          <div className="totalDiv">
            <h5 className="categoryTitle">Subtotal</h5>
            <h5 className="categoryPrice">${price}</h5>
          </div>
          <div className="totalDiv">
            <h5 className="categoryTitle">Discount</h5>
            <h5 className="categoryPrice">$0 -</h5>
          </div>
          <div className="totalLastDiv">
            <h5 className="totalTitle">total</h5>
            <h5 className="totalPrice">${price}</h5>
          </div>
        </div>
        <button className="checkOutButton" onClick={checkoutHandeler}>
          Check Out
        </button>
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
                  <button
                    className="RemoveCart"
                    onClick={() => removeFromCart(item.id)}
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

export default Cart;
