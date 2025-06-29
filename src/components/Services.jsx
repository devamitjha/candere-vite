import React from 'react';
import Certified from "../assets/image/services/certified.svg";
import Exchange from "../assets/image/services/exchange.svg";
import Refund from "../assets/image/services/refund.svg";

const Services = () => { 
  return (
    <div className="services py-10 px-5 font-body">
        <div className="flex justify-center items-center gap-5 w-full">
              <div className="flex justify-center items-center">
                <img src={Certified} alt="certified" className="w-12 h-12 block"/>
                <div className="ml-8">
                    <div className="text-lg font-semibold text-black">Certified Jewellery</div>
                    <span className="text-base text-gray-600">Authenticity guaranteed by trusted labs</span>
                </div>
                  
              </div>
              <div className="flex justify-center items-center ml-20">
                <img src={Exchange} alt="Exchange" className="w-12 h-12 block"/>
                <div className="ml-8">
                    <div className="text-lg font-semibold text-black">Lifetime Exchange</div>
                    <span className="text-base text-gray-600">Upgrade anytime with flexible value</span>
                </div>
              </div>
              <div className="flex justify-center items-center ml-20">
                    <img src={Refund} alt="Refund" className="w-12 h-12 block"/>
                    <div className="ml-8">
                        <div className="text-lg font-semibold text-black">100% Refund*</div>
                        <span className="text-base text-gray-600">Easy returns within 15 days</span>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default Services
