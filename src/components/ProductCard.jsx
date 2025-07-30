import React from 'react'

const ProductCard = ({item}) => {
    console.log(item);
  return (
    <div className="product-card border-1 rounded-2xl bg-white border-gray-300 overflow-hidden group transition-shadow duration-200 ease-in-out hover:shadow-lg ">
      <div className="cardHeader bg-gray-100 relative group">
        {item.product_data?.images && <img src={item.product_data?.images[0]?.metal_image} alt={item.product_name} className="transition-opacity duration-300 ease-in-out mix-blend-darken group-hover:opacity-0 cursor-pointer w-full h-full object-cover"/>}        
        {item.product_data?.images[5] ? <img src={item.product_data?.images[5]?.metal_image} alt={item.product_name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mix-blend-darken cursor-pointer"/> : <img src={item.product_data?.images[4]?.metal_image} alt={item.product_name} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 mix-blend-darken cursor-pointer"/> }        
      </div>
      <div className="cardContent bg-white text-center pb-4 pt-2">
            <div className="flex items-center gap-2 line-clamp-1 justify-center px-4">
                <div className="text-cyan-800 text-md">₹{parseInt(Math.abs(item.offer_price))}</div>
                <div className="text-gray-500 text-sm line-through">₹{parseInt(Math.abs(item.price))}</div>
            </div>
            <div className="text-[12px] text-white my-1 line-clamp-1 bg-cyan-700 px-4">{item.offer_text}</div>
            <div className="text-[12px] text-gray-500 line-clamp-1 px-4">{item.product_name}</div>
      </div>
    </div>
  )
}

export default ProductCard
