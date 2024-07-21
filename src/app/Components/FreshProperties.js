"use client"
import React from "react";
import Slider from "react-slick";
import data from "../lib/RentData";
import Card from "./Card";


function FreshProperties() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            centerMode: true, 
            centerPadding: '0', 
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: true, 
            centerPadding: '20px', 
          },
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: true, 
            centerPadding: '20px', 
          },
        },
      ],
  };

  
  const limitedData = data.slice(0, 8);

  return (
    <div className="my-16">
      <h1 className='text-xl font-medium mt-16'>Recommended for You</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {limitedData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FreshProperties;
