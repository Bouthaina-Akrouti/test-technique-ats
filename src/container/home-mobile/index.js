import { RightCircleFilled } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { HomeMobileWrapper } from "./styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PromosBlock from "./overview/promoBlock";

const HomeMoboile = () => {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const cardContent = [
    {
      title: "Games",
    },
    {
      title: "Laptops & Computers",
    },
    {
      title: "Accesories",
    },
    {
      title: "Game Consoles",
    },
    {
      title: "Cameras",
    },
    {
      title: "Cameras",
    },
    {
      title: "Smartwatches",
    },
    {
      title: "Smart Phones",
    },
    {
      title: "Laptops",
    },
    {
      title: "Accesories",
    },
    {
      title: "Game Consoles",
    },
    {
      title: "Cameras",
    },
    {
      title: "Cameras",
    },
    {
      title: "Smartwatches",
    },
    {
      title: "Smart Phones",
    },
    {
      title: "Laptops",
    },
    {
      title: "Accesories",
    },
    {
      title: "Game Consoles",
    },
  ];
  return (
    <>
      <HomeMobileWrapper>
        <Row gutter={25}>
          <Col xl={24} sm={24}>
            <p>SELL TO GET WHAT YOU LOVE</p>
            <h1 className="dark-color">
              TIMEPIECES THAT MAKE A STATEMENT UP TO <strong>40% OFF</strong>{" "}
            </h1>
          </Col>
        </Row>
        <Row gutter={25} className="promos-section-mobile">
          <Col xl={24} sm={12}>
            <div>
              <p className="dark-color font-face-light">
                CATCH BIG <strong className="font-face-bold">DEALS</strong> ON
                THE CAMERAS
              </p>
            </div>
            <div>
              <Button
                className="first-section-button font-face-bold"
                type="link"
                block
              >
                Shop now <RightCircleFilled />
              </Button>
            </div>
          </Col>
          <Col xl={24} sm={12}>
            <div>
              <p className="dark-color font-face-light">
                TABLETS, SMARTPHONES
                <strong className="font-face-bold "> AND MORE</strong>
              </p>
            </div>
            <div>
              <Button className="second-section-button" type="link" block>
                UP TO <strong className="font-face-bold ">70%</strong>
                <RightCircleFilled />
              </Button>
            </div>
          </Col>
        </Row>
        <div className="carousel-promos-block">
          <Slider {...settings}>
            {cardContent.map((el) => {
              return (
                <div>
                  <img
                    src={require("../../assets/placeholder.png")}
                    width="54"
                    height="54"
                  />
                  <h2>{el.title}</h2>
                </div>
              );
            })}
          </Slider>
        </div>
        <div>
          <PromosBlock />
        </div>
      </HomeMobileWrapper>
    </>
  );
};

export default HomeMoboile;
