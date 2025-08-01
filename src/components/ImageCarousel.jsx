import React from 'react';
import Slider from "react-slick";
import { Star, MoveRight, MoveLeft } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import products from '@/api/product';


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

const ImageCarousel = ({item}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: Number(item),
    slidesToScroll: 1,
    nextArrow: <NavNextArrow />,
    prevArrow: <NavPrevArrow />,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "30px",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div className="slickSlider w-full">
      <Slider {...settings}>
        {products.map((product, index) => {
          const imageUrl = product.product_data?.images?.[0]?.metal_image || '';
          const hoveredImage = product.product_data?.images?.[1]?.metal_image || '';
          const name = product.product_name;
          const price = product.product_data?.price;
          const discount = product.product_data?.discount_applied_price;
            return (
                <div className="p-3" key={index}>
                <div className="bg-gray-200 rounded-md">
                      <div className="p-7 relative w-full h-auto group">
                        <img
                          src={imageUrl}
                          alt={name}
                          className="w-full h-auto block mix-blend-darken transition-opacity duration-300 ease-in-out group-hover:opacity-0 cursor-pointer"
                        />
                        {hoveredImage && (
                          <img
                            src={hoveredImage}
                            alt={`${name} hover`}
                            className="absolute top-0 left-0 w-full h-auto opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mix-blend-darken cursor-pointer"
                          />
                        )}
                      </div>
                      <div className="p-4 rounded-md w-full">
                        <div className="flex justify-between items-center gap-2">
                          <div className="flex items-center gap-2 text-lg font-semibold">
                            <span className="text-teal-600">₹{price?.toLocaleString('en-IN')}</span>
                            {discount && (
                              <span className="line-through text-gray-500 text-base">
                                ₹{discount?.toLocaleString('en-IN')}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                            <span className="flex items-center gap-1">
                              {product.product_data?.rating} <Star className="text-yellow-500 w-4 h-4 fill-amber-400" />
                            </span>
                            <span className="mx-1">|</span>
                            <span>({product.product_data?.total_rating})</span>
                          </div>
                        </div>                        
                        <h4 className="text-gray-800 font-medium text-base my-1 truncate">
                          {name}
                        </h4>
                        <div className="text-sm text-cyan-600 font-medium">
                          {product.product_data?.discount_label}
                        </div>
                      </div>
                    </div>
                </div>
            );
        })}
      </Slider>
    </div>
  );
}

export default ImageCarousel
