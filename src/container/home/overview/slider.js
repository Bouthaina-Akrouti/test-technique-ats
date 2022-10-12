import React from "react";
import SidebarLeft from "./sidebarLeft";
import { Carousel } from "antd";
import CardBottom from './cardBottom'
import { CarouselWrapper } from "../styled";
import SliderItem from "./sliderItem";
import SidebarRight from "./sidebarRight";

const Slider = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const cardsTitles = [ "Smartdevices", "Games & Consoles", "Headphones", "Cameras", "Desktop PCs"]
  return (
    <>
      <CarouselWrapper>
        <div className="carousel-container d-flex">
          <div className="sidbar-left">
            <SidebarLeft />
          </div>
          <div className="carousel-content">
            <Carousel afterChange={onChange}>
              <SliderItem />
              <SliderItem />
              <SliderItem />
              <SliderItem />
              <SliderItem />
              <SliderItem />
            </Carousel>
            <div className="cards-block">
              {
                cardsTitles.map((el, index) => {
                  return(
                    <CardBottom title={el} />
                  )
                })
              }
            </div>
          </div>
          <div>
            <SidebarRight />
          </div>
        </div>
      </CarouselWrapper>
    </>
  );
};

export default Slider;
