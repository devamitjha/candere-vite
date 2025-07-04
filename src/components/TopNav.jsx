import React, { useState } from 'react';
import { Link } from 'react-router';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, Search, User, ShoppingCart, AlignLeft} from 'lucide-react';
import Logo from "../assets/image/logo.png"


const TopNav = () => {
    const [count, setCount] = useState(1)
    return (
    <>
        <div className="px-2 lg:px-5 flex justify-between w-full gap-4">
            <div className="flex justify-start w-[48%] lg:w-[20%]">  
                <div className="w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center mr-2 xl:hidden"><AlignLeft /></div>  
                <Link className="w-12 lg:w-13 h-12 lg:h-13 flex justify-center items-center overflow-hidden p-2 lg:p-0" to="/">
                    <img src={Logo} alt="candere" className="w-full h-full object-cover block"/>        
                </Link>
            </div>
            <div className="hidden lg:flex grow justify-center items-center">
                <div className="flex w-full items-center relative h-14 overflow-hidden border border-gray-300 rounded-lg">
                    <Input type="search" name="search" placeholder="Search jewellery" className="border-0 w-full h-full hover:outline-0 pr-21" />
                    <Button type="submit" className="primary-gradient absolute right-0 top-0 w-20 h-14 rounded-l-none">
                        <Search size={20} className="text-white" />
                    </Button>
                </div>
            </div>
            <div className="flex justify-end w-[48%] lg:w-[20%]">
            <div className="w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center relative">
                <User size={24} />
            </div>
            <Link className="w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center relative">
                <Heart size={24} />                
                {count > 0 && <Badge  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute right-0 top-0" variant="destructive">{count}</Badge>}          
            </Link>
            <Link className="w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center relative" to="/checkout/cart">
                <ShoppingCart size={24} />
                {count > 0 && <Badge  className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute right-0 top-0" variant="destructive">{count}</Badge>}
            </Link>
            </div>
            </div>
            <div className="flex lg:hidden grow justify-center items-center px-2 mt-3">
                <div className="flex w-full items-center relative h-12 overflow-hidden border border-gray-300 rounded-lg">
                    <Input type="search" name="mobile search" placeholder="Search jewellery" className="border-0 w-full h-full hover:outline-0 pr-21" />
                    <Button type="submit" className="primary-gradient absolute right-0 top-0 w-20 h-12 rounded-l-none">
                        <Search size={20} className="text-white" />
                    </Button>
                </div>
            </div>
    </>
  )
}

export default TopNav
