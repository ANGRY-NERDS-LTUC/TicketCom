import React, { useState } from "react";
import axios from "axios";
import { getSpecialOffer } from '../../api/user-api';
import './home.css';

function Home() {

    // const data = getSpecialOffer();
    // console.log("6666666666666666", data);

    const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
    // setSpecialOfferPackages(getSpecialOffer());
    // console.log("55555555555555555", setSpecialOfferPackages);

    const clickHandeler = async() => {
        const data = await (await axios.get(`http://localhost:3001/home/specialOffers`)).data[0]
        setSpecialOfferPackages([...specialOfferPackages, data]);

        // await getSpecialOffer().then((data) => {
        //     if (data.error) {
        //         console.log(data.error);;
        //     } else {
        //         setSpecialOfferPackages([...specialOfferPackages, data]);
        //     }
        // })
        console.log("99999999999999", specialOfferPackages);
    }

    // let packages = getSpecialOffer();
    // console.log("0000000000000", packages);
    
    return (
        <div>
            <h1>Home</h1>
            <button onClick={ clickHandeler }>button</button>
            { specialOfferPackages.map( (item) => { return <div className="packageCard">
                <img src="" alt=""></img>
                <div className="packageData">
                    <h3 className="packageCategory">{ item.category }</h3>
                    <h3 className="packageDuration">{ item.duration }</h3>
                    <h3 className="packagePrice">{ item.price }</h3>
                    <h2 className="packageTitle">{ item.title }</h2>
                    <p className="packageDescription">{ item.description }</p>
                    <button className="packageButton">Add to Cart</button>
                    <button className="packageButton">Add to Wishlist</button>
                </div>
            </div> } )}
            {/* <div className="packageCard">
                <img src="" alt=""></img>
                <div className="packageData">
                    <h3 className="packageCategory">category</h3>
                    <h3 className="packageDuration">duration</h3>
                    <h3 className="packagePrice">price</h3>
                    <h2 className="packageTitle">title</h2>
                    <p className="packageDescription">description</p>
                    <button className="packageButton">Add to Cart</button>
                    <button className="packageButton">Add to Wishlist</button>
                </div>
            </div> */}
        </div>
    );

}

export default Home;