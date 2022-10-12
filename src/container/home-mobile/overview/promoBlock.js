import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { HeaderPromos, PromosWrapper } from "../styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPromos from "./cardPromos";

const PromosBlock = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const cardContent = [
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
      oldPrice: "249,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "590,00",
      oldPrice: "249,00",
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
      oldPrice: "249,00",
    },
    {
      category: "Laptops",
      title: 'Laptop Yoga 500 15.6" 6200U 8GB',
      image: "placeholder.png",
      promos: "72",
      price: "1 199,00",
      oldPrice: "249,00",
    },
    {
      category: "Accesories",
      title: "Powerbank 1130 mAh Blue",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
      oldPrice: "249,00",
    },
    {
      category: "Game Consoles",
      title: "GameConsole Destiny Special Edition",
      image: "placeholder.png",
      promos: "72",
      price: "789,00",
      oldPrice: "249,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
      oldPrice: "249,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "590,00",
      oldPrice: "249,00",
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
      oldPrice: "249,00",
    },
    {
      category: "Laptops",
      title: 'Laptop Yoga 500 15.6" 6200U 8GB',
      image: "placeholder.png",
      promos: "72",
      price: "1 199,00",
      oldPrice: "249,00",
    },
    {
      category: "Accesories",
      title: "Powerbank 1130 mAh Blue",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
      oldPrice: "249,00",
    },
    {
      category: "Game Consoles",
      title: "GameConsole Destiny Special Edition",
      image: "placeholder.png",
      promos: "72",
      price: "789,00",
      oldPrice: "249,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
      oldPrice: "249,00",
    },
    {
      category: "Cameras",
      title: "Camera C430W 4k Waterproof",
      image: "placeholder.png",
      promos: "72",
      price: "590,00",
      oldPrice: "249,00",
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
      oldPrice: "249,00",
    },
    {
      category: "Laptops",
      title: 'Laptop Yoga 500 15.6" 6200U 8GB',
      image: "placeholder.png",
      promos: "72",
      price: "1 199,00",
      oldPrice: "249,00",
    },
    {
      category: "Accesories",
      title: "Powerbank 1130 mAh Blue",
      image: "placeholder.png",
      promos: "72",
      price: "103,00",
      oldPrice: "249,00",
    },
    {
      category: "Game Consoles",
      title: "GameConsole Destiny Special Edition",
      image: "placeholder.png",
      promos: "72",
      price: "789,00",
      oldPrice: "249,00",
    },
  ];
  return (
    <>
      <PromosWrapper>
        <div className="promos-container">
          <HeaderPromos>
            <div>
              <p>Deals of The Day</p>
            </div>
          </HeaderPromos>
          <div className="carousel-promos-block">
            <Slider {...settings}>
              {cardContent.map((el, index) => {
                return <CardPromos title={index % 2 === 0 ? 'End in: 16:09:54' : 'Start in: 16:09:54'} item={el} />;
              })}
            </Slider>
          </div>
          <div className="footer-carousel">
              <span>
                Go to Daily Deals Section <RightOutlined />
              </span>
            </div>
          <div className="bottom-promos-block">
            <p className="dark-color">
              <strong>360 Cameras</strong> with <br /> Ultra 4K HD Display
            </p>
            <span className="dark-color">
            From  <strong className="font-face-bold">$399</strong>
            </span>
          </div>
        </div>
      </PromosWrapper>
    </>
  );
};

export default PromosBlock;
