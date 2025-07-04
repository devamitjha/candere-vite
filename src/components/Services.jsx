import React from 'react';
import Certified from "../assets/image/services/certified.svg";
import Exchange from "../assets/image/services/exchange.svg";
import Refund from "../assets/image/services/refund.svg";

const Services = () => { 
  return (
    <div className="services py-5 lg:py-10 lg:px-5 font-body">
        <div className="w-full lg:max-w-[1200px] mx-auto x-scroll-container hide-scrollbar">
          <div className="x-scroll-wrapper lg:w-full lg:gap-5 lg:justify-between lg:items-center">
                <div className="flex justify-start items-center w-[80vw]">
                  <img src={Certified} alt="certified" className="w-12 h-12 block"/>
                  <div className="ml-4 lg:ml-8">
                      <div className="text-sm lg:text-lg font-semibold text-black">Certified Jewellery</div>
                      <span className="text-sm lg:text-base text-gray-600">Authenticity guaranteed by trusted labs</span>
                  </div>
                    
                </div>
                <div className="flex justify-start items-center lg:ml-20 w-[80vw]">
                  <img src={Exchange} alt="Exchange" className="w-12 h-12 block"/>
                  <div className="ml-4 lg:ml-8">
                      <div className="text-sm lg:text-lg font-semibold text-black">Lifetime Exchange</div>
                      <span className="text-sm lg:text-base text-gray-600">Upgrade anytime with flexible value</span>
                  </div>
                </div>
                <div className="flex justify-start items-center lg:ml-20 w-[80vw]">
                      <img src={Refund} alt="Refund" className="w-12 h-12 block"/>
                      <div className="ml-4 lg:ml-8">
                          <div className="text-sm lg:text-lg font-semibold text-black">100% Refund*</div>
                          <span className="text-sm lg:text-base text-gray-600">Easy returns within 15 days</span>
                      </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Services
