import React from 'react';
import { Link } from 'react-router';
import { ChevronDown } from 'lucide-react';
import ThreeStar from "@/assets/image/three-star.svg";

const Menu = () => {
  return (
    <div className="w-full px-5 bg-primary flex justify-between items-center gap-2 lg:gap-4 mt-4 font-body">
        <ul className="w-[85%] flex justify-start gap-5 md:gap-5 2xl:gap-7 items-center list-none py-1 text-white">
            <li key="1">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/best-seller" title="Bestsellers" >Bestsellers</Link>
            </li>
        
            <li key="2">
                <Link className="menu-item relative text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/new-arrivals" title="New Arrivals" >
                    <span className="candereStars absolute top-1 -left-3">
                        <img src={ThreeStar} alt="new arrivals"/>
                    </span>                            
                    New Arrivals
                </Link>
            </li>
        
            <li key="3">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/rings" title="Rings">Rings</Link>
            </li>
        
            <li key="4">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/earrings" title="Earrings">Earrings</Link>
            </li>
        
            <li key="5">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/necklaces" title="Necklace">Necklace</Link>
            </li>
        
            <li key="6">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/bangles-and-bracelets" title="Bangles & Bracelets">Bangles & Bracelets</Link>
            </li>
        
            <li key="7">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/just-solitaires" title="Solitaires">Solitaires</Link>
            </li>
        
            <li key="8">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery/mangalsutra" title="Mangalsutras & Pendants">Mangalsutras & Pendants</Link>
            </li>
        
            <li key="9">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/jewellery" title="Other Jewellery">Other Jewellery</Link>
            </li>
        
            <li key="10">
                <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/gifts" title="Gifts">Gifts</Link>
            </li>
        
            <li key="11">
                  <Link className="menu-item hover:text-sky-700 transition-colors text-xs 2xl:text-sm" to="/offers-terms-and-conditions" title="Offers" >
                      <span className="border border-sky-700 rounded-sm px-6">Offers</span>
                  </Link>
            </li>                    
        </ul>
        <ul className="w-[15%] flex justify-end gap-5 items-center list-none">
            <li  key="12">
                <Link to="/jewellery/diamond" title="Features">                                                   
                    <div className="flex justify-between items-center border border-sky-700 rounded-sm px-6 text-xs 2xl:text-sm tracking-wide py-1 text-white">
                        Features
                        <span className="ml-1">
                            <ChevronDown/>
                        </span> 
                    </div>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu
