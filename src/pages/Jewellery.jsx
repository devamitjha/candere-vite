import React, {useState} from 'react'
import { Link } from 'react-router'
import { SlashIcon, X } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import InitialFilter from "@/api/initialFilter";
import products from "@/api/product"
import ProductCard from '@/components/ProductCard';



const Jewellery = () => {
  const [selected, setSelected] = useState("all");

  const setSelectedCategory = (label) => {
    setSelected(label);
  }
  return (
    <div className="section-list">
      <div className="section-breadcrumb bg-green-50 py-4 px-5 lg:px-20">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>         
            <BreadcrumbItem>
              <BreadcrumbPage>All Jewellery</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-start flex-wrap items-center gap-2 md:flex-row px-5 lg:px-20 my-10">
        {
          InitialFilter.map((item) => (
            <Button
              key={item.label}
              onClick={() => setSelectedCategory(item.label)}
              variant={selected === item.label ? "default" : "secondary"}
              className="cursor-pointer"
            >
              {item.name}
            </Button>
          ))
        }
      </div>
      <div className="product-list-section block lg:grid lg:grid-cols-[25%_75%] px-5 lg:px-20">
        <div className="filter-sidebar block">1</div>
        <div className="product-list block">
          <div className="selected-filter w-full flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap gap-2">             
              <Button variant="outline" size="sm" className="py-2 px-4 rounded-full cursor-pointer">
                Rings <X className="cursor-pointer" size={16}/>
              </Button>
              <Button variant="outline" size="sm" className="py-2 px-4 rounded-full cursor-pointer">
                Rs.10001 To Rs.15000 <X className="cursor-pointer" size={16}/>
              </Button>
            </div>          
            <div className="sorting-filter">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Latest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="discount">Discount</SelectItem>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="lowtohigh">Price:Low to High</SelectItem>
                    <SelectItem value="hightolow">Price:High to Low</SelectItem>
                    <SelectItem value="customerrating">Customer Rating</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="product-list-container mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {
              products.map((item)=>(
                <ProductCard item={item} key={item.product_id}/>  
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jewellery
