import React, { useState } from "react";
import axios from "axios";
import './createPackage.css';

function CreatePackage() {

    const [checkBox, setCheckBox] = useState(false);
    
    const createCompanyPackage = async(data) => {
        try {
            const res = await axios.post(`http://localhost:3001/company/create?type=company`, data, {
                headers: {
                    Accept: 'application/json',
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjQxOTMxMjJ9.EG_OxJwBVvXtr95lyM-rev5Fk6TUx7aazzPTNIHmR9I'
                }
            });
            console.log(res.data)
        }
        catch(err) {
            console.log(err);
        } 
    }

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
        }
        createCompanyPackage(newPackage);
        e.target.reset();
    }

    function checkBoxHandeler(e) {
        if (e.target.value === 'false') {
            setCheckBox(true);
        } else if (e.target.value === 'true') {
            setCheckBox(false);
        }
    }

    return (
        <div className="formDiv">
            <h1>form</h1>
            <form onSubmit={ submitHandeler }>
                <label>Title</label><br/>
                <input type="text" className="formInput" name="title" placeholder="Input package title"></input><br/>
                <label>Description</label><br/>
                <input type="text" className="formInput" name="description" placeholder="Input a description"></input><br/>
                <label>Price</label><br/>
                <input type="text" className="formInput" name="price" placeholder="Input the price of package"></input><br/>
                <label>Category</label><br/>
                <input type="text" className="formInput" name="category" placeholder="Input package category"></input><br/>
                <label>Duration</label><br/>
                <input type="text" className="formInput" name="duration" placeholder="Input package duration"></input><br/>
                <label>Image</label><br/>
                <input type="text" className="formInput" name="image" placeholder="Input image url"></input><br/>
                <input type="checkbox" className="formCheck" name="specialOffer" value={ checkBox } onChange={ checkBoxHandeler }></input>
                <label>Special Offer</label><br/>

                <input type="Submit" value="Create Package" className="formSubmit"></input>
            </form>
        </div>
    )
}

export default CreatePackage;



