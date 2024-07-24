

"use client"
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import data from "../lib/Data";
import Card from "./Card";
import CardLoading from "./CardLoading"; 

function HomePagefirst() {
  const [cardLoading, setCardLoading] = useState(true);
  const [limitedData, setLimitedData] = useState([]);

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

  useEffect(() => {
   
    setTimeout(() => {
      const limitedDataFromApi = data.slice(0, 10);
      setLimitedData(limitedDataFromApi);
      setCardLoading(false);
    }, 1000); 
  }, []);

  return (
    <>
      <h1 className='text-xl font-medium my-2'>Popular Owner Properties</h1>
      <div className="slider-container">
        {cardLoading ? (
          <Slider {...settings}>
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </Slider>
        ) : (
          <Slider {...settings}>
            {limitedData.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </Slider>
        )}
      </div>
    </>
  );
}

export default HomePagefirst;


