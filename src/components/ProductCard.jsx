import React from 'react';
import { Heart, Layers } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

const ProductCard = ({item}) => {
    console.log(item);
  return (
    <div className="product-card rounded-2xl bg-white border-gray-300 overflow-hidden group transition-shadow duration-200 ease-in-out hover:shadow-lg ">
      <div className="cardHeader bg-gray-100 relative group border-1 rounded-2xl overflow-hidden">
        {item.product_data?.images && <img src={item.product_data?.images[0]?.metal_image} alt={item.product_name} className="transition-opacity duration-300 ease-in-out mix-blend-darken group-hover:opacity-0 cursor-pointer w-full h-full object-cover"/>}        
        {item.product_data?.images[5] ? <img src={item.product_data?.images[5]?.metal_image} alt={item.product_name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mix-blend-darken cursor-pointer"/> : <img src={item.product_data?.images[4]?.metal_image} alt={item.product_name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mix-blend-darken cursor-pointer"/> } 
        <Button variant="none" size="icon" className="size-8 absolute top-1 right-1 cursor-pointer">
           <Heart/>     
        </Button>
        <div className="absolute top-1 left-1">
          <Badge variant="secondary" className="text-[12px] uppercase">{item.label}</Badge>
        </div>
        <Button variant="none" size="icon" className="size-8 absolute bottom-1 right-1 cursor-pointer">
           <Layers size={16}/>    
        </Button>
        <span>
          
        </span>
      </div>
      <div className="cardContent bg-white pb-4 pt-2">
            <div className="flex items-center gap-2 line-clamp-1 justify-start px-4">
                <div className="text-cyan-800 text-md">₹{parseInt(Math.abs(item.offer_price))}</div>
                <div className="text-gray-500 text-sm line-through">₹{parseInt(Math.abs(item.price))}</div>
            </div>
            <div className="text-[12px] text-cyan-700 my-1 line-clamp-1 px-4">{item.offer_text}</div>
            <div className="text-[12px] text-gray-500 line-clamp-1 px-4">{item.product_name}</div>
      </div>
    </div>
  )
}

export default ProductCard
