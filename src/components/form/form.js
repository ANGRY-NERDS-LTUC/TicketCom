import React, { useState } from "react";
import './form.css';
import File64 from 'react-file-base64';

function Form() {

    const [companyPackages, setCompanyPackages] = useState([]);
    const [checkBox, setCheckBox] = useState(false);
    const [image, setImage] = useState('');

    // const data = {
    //     "title":"Jarash",
    //     "description":"full trip three days",
    //     "price":"55",
    //     "image":"https://djdjdicioj;cl/sc,uhsknkdc",
    //     "category":"local trip",
    //     "duration":"3",
    //     "specialOffer": true
    //   }
    
    function submitHandeler(e) {
        e.preventDefault();
        let newPackage = {
            title: e.target.title.value, 
            description: e.target.description.value,
            price: e.target.price.value,
            category: e.target.category.value,
            duration: e.target.duration.value,
            specialOffer: checkBox,
            image: image.base64
        }
        console.log("111111111111111111", newPackage);
        setCompanyPackages([...companyPackages, newPackage]);
        console.log(companyPackages);
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
                <input type="text" className="formInput" name="title"></input><br/>
                <label>Description</label><br/>
                <input type="text" className="formInput" name="description"></input><br/>
                <label>Price</label><br/>
                <input type="text" className="formInput" name="price"></input><br/>
                <label>Category</label><br/>
                <input type="text" className="formInput" name="category"></input><br/>
                <label>Duration</label><br/>
                <input type="text" className="formInput" name="duration"></input><br/>
                <input type="checkbox" className="formCheck" name="specialOffer" value={ checkBox } onChange={ checkBoxHandeler }></input>
                <label>Special Offer</label><br/>
                <label>Image</label><br/>
                <File64 type="file" className="formInput" name="image" onDone={ (img) => setImage(img) }/><br/>
                
                <input type="Submit" value="Create Package" className="formSubmit"></input>
            </form>
            { companyPackages.map( (item) => { return <div>
                <p>{ item.title }</p>
                <p>{ item.description }</p>
                <p>{ item.price }</p>
                <p>{ item.category }</p>
                <p>{ item.duration }</p>
                <p>{ `${item.specialOffer}` }</p>
                <p>{ item.image }</p>
            </div> })}
        </div>
    )
}

export default Form;



