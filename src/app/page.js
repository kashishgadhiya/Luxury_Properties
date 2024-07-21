import Focus from "./Components/Focus";
import Footer from "./Components/Footer";
import FreshProperties from "./Components/FreshProperties";
import Hero from "./Components/Hero";
import HomeBanners from "./Components/HomeBanners";
import HomePagefirst from "./Components/HomePagefirst";
import HomeSlider from "./Components/HomeSlider";


export default function Home() {
  return (
    <>
      <div className="   ">
        <div className="max-w-7xl p-2 mx-auto  min-h-screen">
          {/* <Navbar /> */}
        <Hero />
        </div>
      {/* <HomeSlider/> */}

       
       
      </div>
      <div className="max-w-6xl p-2 mx-auto  ">
      <HomePagefirst/>

      <Focus/>
      </div>
      <div className="max-w-4xl p-2 mx-auto  ">
      <HomeBanners/>
      </div>
      <div className="max-w-6xl p-2 mx-auto  ">
        <FreshProperties/>
      </div>
      <Footer/>
    </>

  );
}
