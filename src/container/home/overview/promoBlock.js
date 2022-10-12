import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { HeaderPromos, PromosWrapper } from "../styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPromos from "./cardPromos";

const PromosBlock = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  const cardContent = [
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "590,00",
    },
    {
      category: "Smartwatches",
      title: "Smartwatch 2.0 LTE Wifi",
      image: "placeholder.png",
      promos: "72",
      price: "129,00",
      oldPrice: "249,00",
    },
    {
      category: "Smart Phones",
      title: "Smartphone 6S 32GB LTE",
      image: "placeholder.png",
      promos: "72",
      price: "1 300,00",
    },
    {
      category: "Laptops",
      title: 'Laptop Yoga 500 15.6" 6200U 8GB',
      image: "placeholder.png",
      promos: "72",
      price: "1 199,00",
    },
    {
      category: "Accesories",
      title: "Powerbank 1130 mAh Blue",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
    },
    {
      category: "Game Consoles",
      title: "GameConsole Destiny Special Edition",
      image: "placeholder.png",
      promos: "72",
      price: "789,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "590,00",
    },
    {
      category: "Smartwatches",
      title: "Smartwatch 2.0 LTE Wifi",
      image: "placeholder.png",
      promos: "72",
      price: "129,00",
      oldPrice: "249,00",
    },
    {
      category: "Smart Phones",
      title: "Smartphone 6S 32GB LTE",
      image: "placeholder.png",
      promos: "72",
      price: "1 300,00",
    },
    {
      category: "Laptops",
      title: 'Laptop Yoga 500 15.6" 6200U 8GB',
      image: "placeholder.png",
      promos: "72",
      price: "1 199,00",
    },
    {
      category: "Accesories",
      title: "Powerbank 1130 mAh Blue",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
    },
    {
      category: "Game Consoles",
      title: "GameConsole Destiny Special Edition",
      image: "placeholder.png",
      promos: "72",
      price: "789,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "590,00",
    },
    {
      category: "Smartwatches",
      title: "Smartwatch 2.0 LTE Wifi",
      image: "placeholder.png",
      promos: "72",
      price: "129,00",
      oldPrice: "249,00",
    },
    {
      category: "Smart Phones",
      title: "Smartphone 6S 32GB LTE",
      image: "placeholder.png",
      promos: "72",
      price: "1 300,00",
    },
    {
      category: "Laptops",
      title: 'Laptop Yoga 500 15.6" 6200U 8GB',
      image: "placeholder.png",
      promos: "72",
      price: "1 199,00",
    },
    {
      category: "Accesories",
      title: "Powerbank 1130 mAh Blue",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
    },
    {
      category: "Game Consoles",
      title: "GameConsole Destiny Special Edition",
      image: "placeholder.png",
      promos: "72",
      price: "789,00",
    },
  ];
  return (
    <>
      <PromosWrapper>
        <div className="promos-container">
          <HeaderPromos>
            <div>
              <p>Deals of The Day</p>
              <span className="date">Ends in: 09 : 08 : 23</span>
            </div>
            <div>
              <span className="dark-color">
                Go to Daily Deals Section <RightOutlined />
              </span>
            </div>
          </HeaderPromos>
          <div className="carousel-promos-block">
            <Slider {...settings}>
              {cardContent.map((el) => {
                return <CardPromos item={el} />;
              })}
            </Slider>
          </div>
          <div className="bottom-promos-block">
            <p className="dark-color">SHOP AND <strong>SAVE BIG</strong> ON HOTTEST TABLETS</p>
            <span className="dark-color">starting at <strong className="font-face-bold">$7999</strong></span>
          </div>
        </div>
      </PromosWrapper>
    </>
  );
};

export default PromosBlock;
