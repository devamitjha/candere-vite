import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import Services from '@/components/Services';
import MarqueeBar from '@/components/MarqueeBar';
import MainTitle from '@/components/MainTitle';
import EvilEye from "../assets/image/collections/Evil-Eye.jpg";
import Glo from "../assets/image/collections/Glo.jpg";
import Peacock from "../assets/image/collections/Peacock.jpg";
import Aruna from "../assets/image/collections/Aruna.jpg";
import HoneyBee from "../assets/image/collections/Honey-Bee.jpg";
import ImageCarousel from '@/components/ImageCarousel';
import Anniversary from '@/assets/image/looks/Anniversary.jpg';
import Birthday from '@/assets/image/looks/Birthday.jpg';
import ForHer from '@/assets/image/looks/Gift-For-Her.jpg';
import ForHim from '@/assets/image/looks/Him.jpg';
import Kids from '@/assets/image/looks/Kids.jpg';
import Gold from '@/assets/image/looks/Gold.jpg';
import HomeVide from "@/assets/videos/hero-video.mp4";
import CompleteLooks from '@/components/CompleteLooks';
import useWindowSize from '@/hooks/useWindowSize';
import HeroSliderMobile from '@/components/HeroSliderMobile';


const Collection = () => {
  return (
    <div className="container mx-auto">
      <MainTitle 
        title="Collections You'll Love" 
        subTitle="Let's take a glimpse at our featured collections before diving in!" 
      />
      <div className="w-full x-scroll-container hide-scrollbar">
        <div className="flex lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 whitespace-nowrap lg:px-4">
          <div className="lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden w-[60vw] lg:w-auto">
            <img src={EvilEye} alt="Evil Eye" className="w-full h-full object-cover" />
          </div>        
          <div className="rounded-2xl overflow-hidden w-[60vw] lg:w-auto">
            <img src={HoneyBee} alt="HoneyBee" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden w-[60vw] lg:w-auto">
            <img src={Peacock} alt="Peacock" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden w-[60vw] lg:w-auto">
            <img src={Glo} alt="Glo" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden w-[60vw] lg:w-auto">
            <img src={Aruna} alt="Aruna" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  )
}

const TrendingItem = () => {
  return (
    <div className="container mx-auto">
    <MainTitle
        title="Stay in trend" 
        subTitle="Jewelry That Matches Your Style" 
    />
      <ImageCarousel item="4"/>
    </div>
  )
}



const looksData = [
  {
    image: Anniversary,
    title: 'Anniversary Gifting',
    subTitle: 'Celebrate Your Milestone with Sparkle',
  },
  {
    image: Birthday,
    title: 'Birthday Bling',
    subTitle: 'Make Their Day Shine Bright',
  },
  {
    image: ForHer,
    title: 'Gifts for Her',
    subTitle: 'Elegant Jewelry She’ll Adore',
  },
  {
    image: ForHim,
    title: 'Gifts for Him',
    subTitle: 'Timeless Pieces for Every Gentleman',
  },
  {
    image: Kids,
    title: 'Jewels for Kids',
    subTitle: 'Charming Pieces for Little Stars',
  },
  {
    image: Gold,
    title: 'Flat 25% Off',
    subTitle: 'On Making Charges of Gold Jewellery',
  },
];

const Looks = () => {
  return (
    <div className="w-full">
      <MainTitle
        title="Shop the look"
        subTitle="Jewelry That Matches Your Style"
      />
      <div className="w-full lg:max-w-[1200px] mx-auto mt-8 x-scroll-container hide-scrollbar">
        <div className="x-scroll-wrapper lg:w-full lg:gap-6 lg:justify-between lg:items-center">
          {looksData.map((look, index) => (
            
            <div key={index} className="flex flex-col items-center text-center transform transition-transform duration-300 hover:-translate-y-1">
              <div
                className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden shadow-md"
              >
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-md  text-black mt-4">
                {look.title}
              </h3>
            </div>
          ))}
          </div>
        </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section className="w-full">
      <MainTitle
        title="Jewelry in Motion"
        subTitle="See the Sparkle, Shop the Magic"
      />
       <div className="w-full h-[40vw] overflow-hidden relative">     
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={HomeVide} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold">Discover Sparkle</h1>
              <p className="mt-4 text-lg">Jewelry that moves with you</p>
            </div>
          </div>
      </div>
    </section>
   
  );
};


const Home = () => {
  const { width } = useWindowSize();
  const HomepageSlider = width > 1280 ? <HeroSlider /> : <HeroSliderMobile />;
  return (
    <section className="w-full">
      {HomepageSlider}
      <Services />
      <MarqueeBar />
      <Looks/>
      <Collection />
      <TrendingItem />
      <VideoSection/>
      <CompleteLooks/>
    </section>
  )
}

export default Home
