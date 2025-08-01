import React from 'react';
import Slider from 'react-slick';
import { MoveRight, MoveLeft } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image1 from '../assets/image/sliderMobile/1.jpg';
import Image2 from '../assets/image/sliderMobile/2.jpg';
import Image3 from '../assets/image/sliderMobile/3.jpg';
import Image4 from '../assets/image/sliderMobile/4.jpg';
import Image5 from '../assets/image/sliderMobile/5.jpg';

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

const HeroSliderMobile = () => {
  const images = [
    { src: Image1, alt: 'Modern Gold Necklace Design' },
    { src: Image2, alt: 'Elegant Diamond Rings' },
    { src: Image3, alt: 'New Arrival Bridal Set' },
    { src: Image4, alt: 'New Arrival Bridal Set' },
    { src: Image5, alt: 'New Arrival Bridal Set' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    nextArrow: <NavNextArrow />,
    prevArrow: <NavPrevArrow />
  };

  return (
    <div className="slickSlider w-full mx-auto mt-4">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="w-full h-full block overflow-hidden" key={index}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover block" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSliderMobile;
