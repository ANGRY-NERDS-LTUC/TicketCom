import React, { useState } from "react";
import axios from "axios";
import "./createPackage.css";

function CreatePackage() {
  const [checkBox, setCheckBox] = useState(false);

  const getToken = () => document.cookie.replace("token=", "");

  const createCompanyPackage = async (data) => {
    try {
      const res = await axios.post(
        `http://localhost:3001/company/create?type=company`,
        data,
        {
          headers: {
            Accept: "application/json",
            Authorization: `${getToken}`,
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
        <h1>form</h1>
        <form onSubmit={submitHandeler}>
          <input
            type="text"
            className="formInput"
            name="title"
            placeholder="Package Title"
          ></input>
          <br />
          <input
            type="text"
            className="descriptionInput"
            name="description"
            placeholder="Description"
          ></input>
          <br />
          <input
            type="text"
            className="numberInput"
            name="price"
            placeholder="Price"
          ></input>
          <input
            type="text"
            className="numberInput"
            name="duration"
            placeholder="Duration"
          ></input>
          <br />
          <input
            type="text"
            className="formInput"
            name="category"
            placeholder="Category"
          ></input>
          <br />
          <input
            type="text"
            className="formInput"
            name="image"
            placeholder="Image URL"
          ></input>
          <br />
          <input
            type="checkbox"
            className="formCheck"
            name="specialOffer"
            value={checkBox}
            onChange={checkBoxHandeler}
          ></input>
          <label>Special Offer</label>
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
