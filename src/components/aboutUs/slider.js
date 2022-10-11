import React, { useState } from "react";
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
function Slider() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    console.log("selectedIndex", selectedIndex);
    setIndex(selectedIndex);
  };
  console.log("");
  return (
    <>
      <div className="sliderImage">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              width={"100%"}
              height={"500px"}
              className="d-block w-100"
              src={Image6}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={"100%"}
              height={"500px"}
              className="d-block w-100"
              src={Image12}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={"100%"}
              height={"500px"}
              className="d-block w-100"
              src={Image7}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
