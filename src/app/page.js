
import dynamic from 'next/dynamic';
import CardLoading from './Components/CardLoading';



const Hero = dynamic(() => import('./Components/Hero'));
const HomePagefirst = dynamic(() => import('./Components/HomePagefirst'));
const Focus = dynamic(() => import('./Components/Focus'));
const HomeBanners = dynamic(() => import('./Components/HomeBanners'));
const FreshProperties = dynamic(() => import('./Components/FreshProperties'));
const Footer = dynamic(() => import('./Components/Footer'));

export default function Home() {
  return (
    <>
   
      <div className="max-w-7xl p-2 mx-auto min-h-screen">
        <Hero />
      </div>
      <div className="max-w-6xl p-2 mx-auto">
        <HomePagefirst />
        <Focus />
      </div>
      <div className="max-w-4xl p-2 mx-auto">
        <HomeBanners />
      </div>
      <div className="max-w-6xl p-2 mx-auto">
        <FreshProperties />
      </div>
      <Footer />
    </>
  );
}
