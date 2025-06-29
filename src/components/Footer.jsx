import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Payment icons
import ApplePay from "@/assets/image/payment-icon/apple-pay.svg";
import GooglePay from "@/assets/image/payment-icon/google-pay.svg";
import MasterCard from "@/assets/image/payment-icon/master-card.svg";
import Paypal from "@/assets/image/payment-icon/paypal.png";
import Visa from "@/assets/image/payment-icon/visa.svg";

const Footer = () => {
  return (
    <div className="bg-black py-12 px-4 text-center mt-20">
      <h2 className="text-lg font-semibold text-white">
        Subscribe to our newsletter
      </h2>
      <p className="text-sm text-gray-400 mt-2">
        Do you want to be among the first to know about sale time?
      </p>

      {/* Email Input and Button */}
      <div className="mt-6 flex justify-center items-center max-w-md mx-auto gap-2">
        <Input type="email" placeholder="Enter your email" />
        <Button type="submit" variant="outline">
          Subscribe
        </Button>
      </div>

      {/* Payment Icons Row */}
      <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
        <img src={ApplePay} alt="Apple Pay" className="h-6 w-auto" />
        <img src={GooglePay} alt="Google Pay" className="h-6 w-auto" />
        <img src={MasterCard} alt="MasterCard" className="h-6 w-auto" />
        <img src={Visa} alt="Visa" className="h-6 w-auto" />
        <img src={Paypal} alt="Paypal" className="h-6 w-auto" />
      </div>

      {/* Footer Text */}
      <p className="text-xs text-gray-500 mt-6">
        © 2025, Amit Jha
      </p>
    </div>
  );
};

export default Footer;
