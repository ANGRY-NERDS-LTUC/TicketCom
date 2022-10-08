import React, { useState } from "react";
import axios from "axios";
import "./createPackage.scss";
import Cookies from "universal-cookie";
import Swal from "sweetalert2";
import video1 from "../assets/v3.mp4";
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
      <div className="videoDiv">
        <video src={video1} className="video" autoPlay muted loop></video>
      </div>
      <div className="formDiv">
        <form onSubmit={submitHandeler} className="createForm">
          <h1 className="createFormHeader">Create Package</h1>
          <label className="createLabel">Package Title</label>
          <input
            type="text"
            className="formInput"
            name="title"
            placeholder="Package Title"
            required
          ></input>
          <br />
          <label className="createLabel">Description</label>
          <textarea
            type="text"
            className="descriptionInput"
            name="description"
            placeholder="Description"
            required
          ></textarea>
          <br />
          <label className="createLabel">Price</label>
          <input
            type="number"
            min="0"
            name="price"
            placeholder="Price"
            required
          ></input>
          <label className="createLabel">Duration</label>
          <input
            type="number"
            min="0"
            name="duration"
            placeholder="Duration"
            required
          ></input>
          <br />
          <label className="createLabel">Category</label>
          <input
            type="text"
            className="formInput"
            name="category"
            placeholder="Category"
            required
          ></input>
          <br />
          <label className="createLabel">Image</label>
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
