import React, { useEffect, useState } from "react";
// eslint-disable-next-line
import { AiTwotoneLike } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import "../assets/style.css"

import { Container, Row, UncontrolledCarousel, Spinner } from "reactstrap";

import icon1 from "./category/icon1.png"
import icon2 from "./category/icon2.png"
import icon3 from "./category/icon3.png"
import icon4 from "./category/icon4.png"
import shape from "./category/shape.svg"

import axios from "axios";
import "./home.css";

function Home() {
  const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
  // eslint-disable-next-line
  const [homePackages, setHomePackages] = useState([]);
  const [counter, setCounter] = useState(1);
  const [background, setBackground] = useState(true);
  const [background2, setBackground2] = useState(false);
  const [background3, setBackground3] = useState(false);
  const [background4, setBackground4] = useState(false);
  const [squareColor, setSquareColor] = useState('red');
  const [squareColor2, setSquareColor2] = useState('none');
  const [squareColor3, setSquareColor3] = useState('none');
  const [squareColor4, setSquareColor4] = useState('none');


  function rightHandeler() {
    if (counter === 1) {
      setBackground(false);
      setBackground2(true);
      setBackground3(false);
      setBackground4(false);
      setSquareColor('none');
      setSquareColor2('red');
      setSquareColor3('none');
      setSquareColor4('none');
      setCounter(2);
    } else if (counter === 2) {
      setBackground(false);
      setBackground2(false);
      setBackground3(true);
      setBackground4(false);
      setSquareColor('none');
      setSquareColor2('none');
      setSquareColor3('none');
      setSquareColor4('red');
      setCounter(3);
    } else if (counter === 3) {
      setBackground(false);
      setBackground2(false);
      setBackground3(false);
      setBackground4(true);
      setSquareColor('none');
      setSquareColor2('none');
      setSquareColor3('red');
      setSquareColor4('none');
      setCounter(4);
    } else if (counter === 4) {
      setBackground(true);
      setBackground2(false);
      setBackground3(false);
      setBackground4(false);
      setSquareColor('red');
      setSquareColor2('none');
      setSquareColor3('none');
      setSquareColor4('none');
      setCounter(1);
    }
  }

  function leftHandeler() {
    if (counter === 1) {
      setBackground(false);
      setBackground2(false);
      setBackground3(false);
      setBackground4(true);
      setSquareColor('none');
      setSquareColor2('none');
      setSquareColor3('red');
      setSquareColor4('none');
      setCounter(4);
    } else if (counter === 4) {
      setBackground(false);
      setBackground2(false);
      setBackground3(true);
      setBackground4(false);
      setSquareColor('none');
      setSquareColor2('none');
      setSquareColor3('none');
      setSquareColor4('red');
      setCounter(3);
    } else if (counter === 3) {
      setBackground(false);
      setBackground2(true);
      setBackground3(false);
      setBackground4(false);
      setSquareColor('none');
      setSquareColor2('red');
      setSquareColor3('none');
      setSquareColor4('none');
      setCounter(2);
    } else if (counter === 2) {
      setBackground(true);
      setBackground2(false);
      setBackground3(false);
      setBackground4(false);
      setSquareColor('red');
      setSquareColor2('none');
      setSquareColor3('none');
      setSquareColor4('none');
      setCounter(1);
    }
  }

  const specialOfferPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/home/specialOffers`)
    ).data;
    setSpecialOfferPackages(data);
  };

  const homePackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/home/packages`)
    ).data;
    setHomePackages(data);
  };

  const createWishlist = (id) => {
    return fetch(`http://localhost:3001/client/wishlist/${id}?type=client`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDU3NjkxNX0.HhPyg_1wWXFGBXbgNGx4SrqXv6sxf5xSjy_UO9CZ2C8`,
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
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6ImNsaWVudCIsImlhdCI6MTY2NDU3NjkxNX0.HhPyg_1wWXFGBXbgNGx4SrqXv6sxf5xSjy_UO9CZ2C8`,
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
    specialOfferPackagesHandeler();
    homePackagesHandeler();
    const timer = setTimeout(() => {
      rightHandeler();
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [counter]);

  function addToCart(id) {
    createCart(id);
    // alert("Card added to Cart!");
  }

  function addToWishlist(id) {
    createWishlist(id);
    // alert("Card added to Wishlist!")
  }

  return (
    <div className="homePage">

      <div className="offersDiv">
        <div className="offersDivBranch">
          <h1 className="offersTitle">BEST TOURS</h1>
          <h3 className="offersTitle">CHECK OUT OUR TOP-RATED TOURS</h3>
          <br />
          <div className="specialOfferDiv">
            {specialOfferPackages.map((item) => {
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

      <section class="p-5 pt-md-9" id="service">

        <div class="container">
          <div class="position-absolute z-index--1 end-0 d-none d-lg-block"><img src={`${shape}`} style={{
            maxWidth: "200px"
          }} alt="service" /></div>
          <div class="mb-7 text-center">
            <h5 class="text-secondary">CATEGORY </h5>
            <h3 class="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">We Offer Best Services</h3>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src={`${icon1}`} width="75" alt="Service" />
                  <h4 class="mb-3">Calculated</h4>
                  <p class="mb-0 fw-medium">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src={`${icon2}`} width="75" alt="Service" />
                  <h4 class="mb-3">Best Flights</h4>
                  <p class="mb-0 fw-medium">Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src={`${icon3}`} width="75" alt="Service" />
                  <h4 class="mb-3">Local Events</h4>
                  <p class="mb-0 fw-medium">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 mb-6">
              <div class="card service-card shadow-hover rounded-3 text-center align-items-center">
                <div class="card-body p-xxl-5 p-4"> <img src={`${icon4}`} width="75" alt="Service" />
                  <h4 class="mb-3">Customization</h4>
                  <p class="mb-0 fw-medium">We deliver outsourced aviation services for military customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* <div className="infoDiv">
        {background && (
          <div className='infoDivBranch'>
            <div className='info'>
              <h1>TRAVEL TIME</h1>
              <p>DISCOVER THE WORLD IN A NEW WAY</p>
            </div>
          </div>
        )}
        {background2 && (
          <div className='infoDivBranch2'>
            <div className='info'>
              <p>A LOT OF BRILLIANT VIEWS AND SITES ARE</p>
              <h1>WAITING FOR YOU</h1>
            </div>
          </div>
        )}
        {background3 && (
          <div className='infoDivBranch3'>
            <div className='info'>
              <p>LET US TAKE YOU TO YOUR</p>
              <h1>DREAM DESTINATIONS</h1>
            </div>
          </div>
        )}
        {background4 && (
          <div className='infoDivBranch4'>
            <div className='info'>
              <p>THERE ARE MANY AMAZING RESORTS AND HOTELS</p>
              <h1>BUILT SPECIALLY FOR YOUR JOY</h1>
            </div>
          </div>
        )}
        <div className='slider'>
          <button
            className='sliderButton'
            onClick={leftHandeler}>
            <AiOutlineArrowLeft />
          </button>
          <div className='sliderButton'>
            <div
              className='smallSquare1'
              style={{ background: `${squareColor}` }}></div>
            <div
              className='smallSquare2'
              style={{ background: `${squareColor2}` }}></div>
            <div
              className='smallSquare3'
              style={{ background: `${squareColor3}` }}></div>
            <div
              className='smallSquare4'
              style={{ background: `${squareColor4}` }}></div>
          </div>
          <button
            className='sliderButton'
            onClick={rightHandeler}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className='offersDiv'>
        <div className='offersDivBranch'>
          <h1 className='offersTitle'>BEST TOURS</h1>
          <h3 className='offersTitle'>CHECK OUT OUR TOP-RATED TOURS</h3>
          <br />
          <div className='specialOfferDiv'>
            {specialOfferPackages.map((item) => {
              return (
                <div className='Card'>
                  <img
                    src={item.image}
                    alt=''
                    className='image'
                  />
                  <div className='Data'>
                    <h2 className='Title'>{item.title}</h2>
                    <h3 className='Category'>{item.createdBy}</h3>
                    <h3 className='Duration'>{item.duration} days</h3>
                    <h3 className='Price'>{item.price} $</h3>
                    <p className='Description'>{item.description}</p>
                    <p
                      className='Wishlist'
                      onClick={() => addToWishlist(item.id)}>
                      Add to Wishlist
                    </p>
                    <p
                      className='Cart'
                      onClick={() => addToCart(item.id)}>
                      Add to Cart
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='whyusDiv'>
        <div className='whyusDivBranch'>
          <h1 className='whyusTitle'>WHY CHOOSE US?</h1>
          <h3 className='whyusTitle'>A BRAND NAME YOU CAN TRUST AND RELY ON</h3>
          <br />
          <div className='whyusCards'>
            <div className='whyusCard'>
              <FaHandHoldingUsd className='symbol' />
              <h3>AFFORDABLE PRICE GUARANTEE</h3>
            </div>
            <div className='whyusCard'>
              <GiEarthAmerica className='symbol' />
              <h3>WIDE VARIETY OF DESTINATIONS</h3>
            </div>
            <div className='whyusCard'>
              <AiTwotoneLike className='symbol' />
              <h3>HIGHLY QUALIFIED SERVICE</h3>
            </div>
          </div>
        </div>
      </div> */}
      {/* <h2>Home packages</h2>
      <br />
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
                <p className="Wishlist" onClick={() => addToWishlist(item.id)}>
                  Add to Wishlist
                </p>
                <p className="Cart" onClick={() => addToCart(item.id)}>
                  Add to Cart
                </p>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default Home;
