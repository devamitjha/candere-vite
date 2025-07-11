import React from 'react';
import MainTitle from './MainTitle';
import { Eye, Heart, Star } from 'lucide-react';
import { Button } from './ui/button';
import CompleteLookData from "@/api/CompleteLook";
import StarRatings from 'react-star-ratings';
import clsx from 'clsx';
import useWindowSize from '@/hooks/useWindowSize';


const CompleteLooks = () => {
    const { width } = useWindowSize();
  return (
    <div className="w-full bg-gray-100 pt-1 mt-4 pb-8 xl:px-4">
        <MainTitle
            title="Complete Your Look"
            subTitle="Make your best moments more stylish with our designs of clothing"
      />
      <div className={clsx({
                'w-full': width >= 1280,
                'w-full x-scroll-container hide-scrollbar py-8': width <= 1279,
              })}>
        <div className={clsx({
          'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4': width >= 1280,
          'x-scroll-wrapper lg:px-4': width <= 1279,
        })}>
          {CompleteLookData.map((item, index) => (
            <div className="w-[60vw] xl:w-auto group rounded-lg bg-white p-6" key={index}>
              <div className="flex justify-between items-center mb-4">
                <div className="text-md uppercase text-black">{item.category}</div>
                <div className="flex justify-end group overflow-hidden">
                  <div className="w-7 h-7 flex justify-center items-center lg:relative -bottom-6 group-hover:bottom-0 transition-bottom duration-300 cursor-pointer"><Eye size={24} stroke="#fff" fill="#cdd8e1" strokeWidth={1}/></div>
                  <div className="w-7 h-7 flex justify-center items-center ml-4 cursor-pointer"><Heart size={20} fill={"#cdd8e1"} stroke='0'/></div>           
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:items-stretch gap-4 xl:gap-8">
                <div className="flex-1 bg-gray-100 relative flex items-center justify-center overflow-hidden group rounded-lg">
                  <img src={item.images.primary} alt="ring1" className="max-w-full max-h-full hidden lg:block transition-opacity duration-300 ease-in-out mix-blend-darken group-hover:opacity-0 cursor-pointer"/>
                  <img src={item.images.hover} alt="ring2" className="lg:absolute inset-0 w-full h-full object-cover lg:opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mix-blend-darken cursor-pointer"/>
                </div>
                <div className="flex-1 flex flex-col justify-between h-full relative overflow-hidden group">
                    <div className="text-md">{item.title}</div>
                    <div className="mt-3 flex items-center">
                      <span className="flex">
                        {item.rating?.value && (
                          <StarRatings
                            rating={item.rating.value}
                            starRatedColor="#facc15" 
                            numberOfStars={5}
                            starDimension="16px"
                            starSpacing="2px"
                          />
                        )}
                      </span>
                      <span className="text-xs ml-2 mt-[6px]">({item.rating?.count} {item.rating?.count === 1 ? 'star' : 'stars'})</span>
                    </div>
                    <div className="text-xs text-gray-600 my-6">
                      {item.description}
                    </div>
                  <div className="hidden xl:block text-xl font-bold">{item.price.formatted}</div>
                    <div className="w-full flex items-center justify-between mt-4 xl:absolute left-0 -bottom-25 group-hover:bottom-0 transition-bottom duration-300 bg-white">
                      <div className="text-xl font-bold">{item.price.formatted}</div>
                      <Button className="px-4 py-2 text-white rounded cursor-pointer">Buy Now</Button>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompleteLooks
