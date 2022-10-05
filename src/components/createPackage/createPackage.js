import React, { useState } from "react";
import axios from "axios";
import "./createPackage.scss";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import { render } from "react-dom";
import { useForm } from "react-cool-form";
const cookies = new Cookies();
const user = cookies.get("data");

function CreatePackage() {
  const [checkBox, setCheckBox] = useState(false);

  // const getToken = () => document.cookie.replace("token=", "");

  const createCompanyPackage = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/company/create?type=company`,
        data,
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

  function submitHandeler(e) {
    e.preventDefault();
    let newPackage = {
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
      category: e.target.category.value,
      duration: e.target.duration.value,
      specialOffer: checkBox,
      image: e.target.image.value,
    };
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Package create",
      showConfirmButton: false,
      timer: 1500,
    });
    createCompanyPackage(newPackage);
    e.target.reset();
  }

  function checkBoxHandeler(e) {
    if (e.target.value === "false") {
      setCheckBox(true);
    } else if (e.target.value === "true") {
      setCheckBox(false);
    }
  }

  return (
    <div className="createPage">
      <div className="formDiv">
        <form onSubmit={submitHandeler}>
          <h1>Create Package</h1>
          <label>Package Title</label>
          <input
            type="text"
            className="formInput"
            name="title"
            placeholder="Package Title"
            required
          ></input>
          <br />
          <label>Description</label>
          <textarea
            type="text"
            className="descriptionInput"
            name="description"
            placeholder="Description"
            required
          ></textarea>
          <br />
          <label>Price</label>
          <input
            type="number"
            className="numberInput"
            name="price"
            placeholder="Price"
            required
          ></input>
          <label>Duration</label>
          <input
            type="number"
            className="numberInput"
            name="duration"
            placeholder="Duration"
            required
          ></input>
          <br />
          <label>Category</label>
          <input
            type="text"
            className="formInput"
            name="category"
            placeholder="Category"
            required
          ></input>
          <br />
          <label>Image</label>
          <input
            type="text"
            className="formInput"
            name="image"
            placeholder="Image URL"
            required
          ></input>
          <br />
          <input
            type="checkbox"
            className="formCheck"
            name="specialOffer"
            required
            value={checkBox}
            onChange={checkBoxHandeler}
          ></input>
          <label className="checkLabel">Special Offer</label>
          <br />
          <input
            type="Submit"
            value="Create Package"
            className="formSubmit"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default CreatePackage;
