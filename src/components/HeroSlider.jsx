import React from 'react';
import Slider from 'react-slick';
import { MoveRight, MoveLeft } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../assets/image/slider/1.jpg';
import Image2 from '../assets/image/slider/2.png';
import Image3 from '../assets/image/slider/3.jpg';

function NavNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="navNext"
      onClick={onClick}
    > <MoveRight /></div>
  );
}

function NavPrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="navPrev"
      onClick={onClick}
    ><MoveLeft /></div>
  );
}

const HeroSlider = () => {
  const images = [
    { src: Image1, alt: 'Modern Gold Necklace Design' },
    { src: Image2, alt: 'Elegant Diamond Rings' },
    { src: Image3, alt: 'New Arrival Bridal Set' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <NavNextArrow />,
    prevArrow: <NavPrevArrow />
  };

  return (
    <div className="slickSlider w-full mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="w-full h-[40vw] block overflow-hidden" key={index}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover block" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
