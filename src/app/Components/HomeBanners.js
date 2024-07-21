import React from 'react';
import Banner from './Banner';

const HomeBanners = () => {
  return (
    <div className='space-y-8'> 
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/RentList'
        imgUrl='/b_home.jpg'
      />
     
      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore from Apartments, land, builder floors,'
        desc2='villas and more'
        buttonText='Explore Buying'
        linkName='/BuyList'
        imgUrl='/b_buy.jpg'
      />
    </div>
  );
};

export default HomeBanners;
