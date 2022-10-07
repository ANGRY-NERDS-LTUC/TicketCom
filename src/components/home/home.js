import React, { useEffect, useState } from "react";

// eslint-disable-next-line
import { AiTwotoneLike } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import Swal from "sweetalert2";

// import { AiOutlineArrowRight } from "react-icons/ai";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import "../assets/style.css"

import { UncontrolledCarousel } from "reactstrap";
import Carousel from "react-bootstrap/Carousel";

import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";
import Image7 from "../assets/7.jpg";
import Image8 from "../assets/8.jpg";
import Image9 from "../assets/9.jpg";
import Image10 from "../assets/10.jpg";
import Image11 from "../assets/11.jpg";
import Image12 from "../assets/12.jpg";
import Image13 from "../assets/13.jpg";

// import icon1 from "./category/icon1.png";
// import icon2 from "./category/icon2.png";
// import icon3 from "./category/icon3.png";
// import icon4 from "./category/icon4.png";
import shape from "./category/shape.svg";

import axios from "axios";
import "./home.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const user = cookies.get("data");

function Home() {
  // const getToken = () => document.cookie.replace("token=", "");

  const [specialOfferPackages, setSpecialOfferPackages] = useState([]);
  // eslint-disable-next-line
  const [homePackages, setHomePackages] = useState([]);
  // const [counter, setCounter] = useState(1);
  // const [background, setBackground] = useState(true);
  // const [background2, setBackground2] = useState(false);
  // const [background3, setBackground3] = useState(false);
  // const [background4, setBackground4] = useState(false);
  // const [squareColor, setSquareColor] = useState("white");
  // const [squareColor2, setSquareColor2] = useState("none");
  // const [squareColor3, setSquareColor3] = useState("none");
  // const [squareColor4, setSquareColor4] = useState("none");

  // function rightHandeler() {
  //   if (counter === 1) {
  //     setBackground(false);
  //     setBackground2(true);
  //     setBackground3(false);
  //     setBackground4(false);
  //     setSquareColor("none");
  //     setSquareColor2("white");
  //     setSquareColor3("none");
  //     setSquareColor4("none");
  //     setCounter(2);
  //   } else if (counter === 2) {
  //     setBackground(false);
  //     setBackground2(false);
  //     setBackground3(true);
  //     setBackground4(false);
  //     setSquareColor("none");
  //     setSquareColor2("none");
  //     setSquareColor3("none");
  //     setSquareColor4("white");
  //     setCounter(3);
  //   } else if (counter === 3) {
  //     setBackground(false);
  //     setBackground2(false);
  //     setBackground3(false);
  //     setBackground4(true);
  //     setSquareColor("none");
  //     setSquareColor2("none");
  //     setSquareColor3("white");
  //     setSquareColor4("none");
  //     setCounter(4);
  //   } else if (counter === 4) {
  //     setBackground(true);
  //     setBackground2(false);
  //     setBackground3(false);
  //     setBackground4(false);
  //     setSquareColor("white");
  //     setSquareColor2("none");
  //     setSquareColor3("none");
  //     setSquareColor4("none");
  //     setCounter(1);
  //   }
  // }

  // function leftHandeler() {
  //   if (counter === 1) {
  //     setBackground(false);
  //     setBackground2(false);
  //     setBackground3(false);
  //     setBackground4(true);
  //     setSquareColor("none");
  //     setSquareColor2("none");
  //     setSquareColor3("white");
  //     setSquareColor4("none");
  //     setCounter(4);
  //   } else if (counter === 4) {
  //     setBackground(false);
  //     setBackground2(false);
  //     setBackground3(true);
  //     setBackground4(false);
  //     setSquareColor("none");
  //     setSquareColor2("none");
  //     setSquareColor3("none");
  //     setSquareColor4("white");
  //     setCounter(3);
  //   } else if (counter === 3) {
  //     setBackground(false);
  //     setBackground2(true);
  //     setBackground3(false);
  //     setBackground4(false);
  //     setSquareColor("none");
  //     setSquareColor2("white");
  //     setSquareColor3("none");
  //     setSquareColor4("none");
  //     setCounter(2);
  //   } else if (counter === 2) {
  //     setBackground(true);
  //     setBackground2(false);
  //     setBackground3(false);
  //     setBackground4(false);
  //     setSquareColor("white");
  //     setSquareColor2("none");
  //     setSquareColor3("none");
  //     setSquareColor4("none");
  //     setCounter(1);
  //   }
  // }

  const specialOfferPackagesHandeler = async () => {
    const data = await (
      await axios.get(`http://localhost:3001/home/specialOffers`)
    ).data;
    console.log(data);
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
    specialOfferPackagesHandeler();
    homePackagesHandeler();
    // const timer = setTimeout(() => {
    //   rightHandeler();
    // }, 3000);
    // return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  function addToCart(id) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your package Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
    createCart(id);
  }

  function addToWishlist(id) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your package Added to Wishlist",
      showConfirmButton: false,
      timer: 1500,
    });
    createWishlist(id);
  }

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={Image1} alt="First slide" />
          <Carousel.Caption>
            <h3>TRAVEL TIME</h3>
            <p>DISCOVER THE WORLD IN A NEW WAY</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image2} alt="Second slide" />
          <Carousel.Caption>
            <p>A LOT OF BRILLIANT VIEWS AND SITES ARE</p>
            <h3>WAITING FOR YOU</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image3} alt="Third slide" />
          <Carousel.Caption>
            <p>LET US TAKE YOU TO YOUR</p>
            <h3>DREAM DESTINATIONS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Image4} alt="Third slide" />
          <Carousel.Caption>
            <p>THERE ARE MANY AMAZING RESORTS AND HOTELS</p>
            <h3>BUILT SPECIALLY FOR YOUR JOY</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="offersDiv">
        <div className="offersDivBranch">
          <h1 className="offersTitle">BEST TOURS</h1>
          <h3 className="offersTitle">Check out our top-rated tours</h3>
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

      <section className="p-5 pt-md-9" id="service">
        <div className="container">
          <div className="position-absolute z-index--1 start-0 d-none d-lg-block">
            <img
              src={`${shape}`}
              style={{
                maxWidth: "200px",
              }}
              alt="service"
            />
          </div>
          <div className="position-absolute z-index--1 end-0 d-none d-lg-block">
            <img
              src={`${shape}`}
              style={{
                maxWidth: "200px",
              }}
              alt="service"
            />
          </div>
          <div className="mb-7 text-center">
            <h3 className="fs-xl-10 fs-lg-8 fs-7 fw-bold font-cursive text-capitalize">
              WHY CHOOSE US?
            </h3>
            <h5 className="text-secondary mb-5">
              A brand name you can trust and rely on
            </h5>
          </div>
          <div className="row">
            <div id="flip-card" className="col-lg-3 col-sm-6 mb-6">
              <div
                id="flip-card-inner"
                className="service-card shadow-hover rounded-3 text-center align-items-center"
              >
                <div
                  id="flip-card-front"
                  className="card card-body p-xxl-5 p-4"
                >
                  {/* <img src={`${icon1}`} width="75" alt="Service" /> */}
                  <FaHandHoldingUsd className="fontAwesome" />
                </div>
                <div id="flip-card-back" className="card card-body p-xxl-5 p-4">
                  <h3 className="mt-2 mb-5 fw-bold">SPARE MONEY</h3>
                  <h4 className="mb-0 fw-none">
                    Affordable and competitive prices guarantee
                  </h4>
                </div>
              </div>
            </div>
            <div id="flip-card" className="col-lg-3 col-sm-6 mb-6">
              <div
                id="flip-card-inner"
                className="service-card shadow-hover rounded-3 text-center align-items-center"
              >
                <div
                  id="flip-card-front"
                  className="card card-body p-xxl-5 p-4"
                >
                  {/* <img src={`${icon2}`} width="75" alt="Service" /> */}
                  <AiTwotoneLike className="fontAwesome" />
                </div>
                <div id="flip-card-back" className="card card-body p-xxl-5 p-4">
                  <h3 className="mt-2 mb-5 fw-bold">BEST SERVICES</h3>
                  <h4 className="mb-0 fw-none">
                    Highly qualified services throughout the journey
                  </h4>
                </div>
              </div>
            </div>
            <div id="flip-card" className="col-lg-3 col-sm-6 mb-6">
              <div
                id="flip-card-inner"
                className="service-card shadow-hover rounded-3 text-center align-items-center"
              >
                <div
                  id="flip-card-front"
                  className="card card-body p-xxl-5 p-4"
                >
                  {/* <img src={`${icon3}`} width="75" alt="Service" /> */}
                  <GiEarthAmerica className="fontAwesome" />
                </div>
                <div id="flip-card-back" className="card card-body p-xxl-5 p-4">
                  <h3 className="mt-2 mb-5 fw-bold">GLOBAL TOURS</h3>
                  <h4 className="mb-0 fw-none">
                    Wide variety of destinations around the world
                  </h4>
                </div>
              </div>
            </div>
            <div id="flip-card" className="col-lg-3 col-sm-6 mb-6">
              <div
                id="flip-card-inner"
                className="service-card shadow-hover rounded-3 text-center align-items-center"
              >
                <div
                  id="flip-card-front"
                  className="card card-body p-xxl-5 p-4"
                >
                  {/* <img src={`${icon4}`} width="75" alt="Service" /> */}
                  {/* <i className="fa-sharp fa-solid fa-people-arrows"></i> */}
                  <FaPeopleArrows className="fontAwesome" />
                </div>
                <div id="flip-card-back" className="card card-body p-xxl-5 p-4">
                  <h3 className="mt-2 mb-5 fw-bold">EXPERIANCE SHARING</h3>
                  <h4 className="mb-0 fw-none">
                    Best consulting services from the most experienced people
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="infoDiv">
        {background && (
          <div className="infoDivBranch">
            <div className="info">
              <h1>TRAVEL TIME</h1>
              <p>DISCOVER THE WORLD IN A NEW WAY</p>
            </div>
          </div>
        )}
        {background2 && (
          <div className="infoDivBranch2">
            <div className="info">
              <p>A LOT OF BRILLIANT VIEWS AND SITES ARE</p>
              <h1>WAITING FOR YOU</h1>
            </div>
          </div>
        )}
        {background3 && (
          <div className="infoDivBranch3">
            <div className="info">
              <p>LET US TAKE YOU TO YOUR</p>
              <h1>DREAM DESTINATIONS</h1>
            </div>
          </div>
        )}
        {background4 && (
          <div className="infoDivBranch4">
            <div className="info">
              <p>THERE ARE MANY AMAZING RESORTS AND HOTELS</p>
              <h1>BUILT SPECIALLY FOR YOUR JOY</h1>
            </div>
          </div>
        )}
        <div className="slider">
          <button className="sliderButton" onClick={leftHandeler}>
            <AiOutlineArrowLeft />
          </button>
          <div className="sliderButton">
            <div
              className="smallSquare1"
              style={{ background: `${squareColor}` }}
            ></div>
            <div
              className="smallSquare2"
              style={{ background: `${squareColor2}` }}
            ></div>
            <div
              className="smallSquare3"
              style={{ background: `${squareColor3}` }}
            ></div>
            <div
              className="smallSquare4"
              style={{ background: `${squareColor4}` }}
            ></div>
          </div>
          <button className="sliderButton" onClick={rightHandeler}>
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
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
      <div className="whyusDiv">
        <div className="whyusDivBranch">
          <h1 className="whyusTitle">WHY CHOOSE US?</h1>
          <h3 className="whyusTitle">A BRAND NAME YOU CAN TRUST AND RELY ON</h3>
          <br />
          <div className="whyusCards">
            <div className="whyusCard">
              <FaHandHoldingUsd className="symbol" />
              <h3>AFFORDABLE PRICE GUARANTEE</h3>
            </div>
            <div className="whyusCard">
              <GiEarthAmerica className="symbol" />
              <h3>WIDE VARIETY OF DESTINATIONS</h3>
            </div>
            <div className="whyusCard">
              <AiTwotoneLike className="symbol" />
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
