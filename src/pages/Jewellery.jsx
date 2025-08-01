import React, {useState} from 'react'
import { Link } from 'react-router'
import { SlashIcon, X, Settings2, ArrowDownUp, ChartNoAxesGantt } from "lucide-react"
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
import InitialFilter from "@/api/initialFilter";
import productData from "@/api/productData"
import ProductCard from '@/components/ProductCard';
import StickyBox from "react-sticky-box";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination } from 'swiper/modules';
import useWindowSize from '@/hooks/useWindowSize';
//drawer
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Badge } from "@/components/ui/badge"
import FilterSidebar from '@/components/FilterSidebar';
import {RingSizeFilter, PriceFilter, DiscountsFilter, ProductTypeFilter} from '@/api/FilterData';
import { Separator } from "@/components/ui/separator";

const FilterBottomSheet = ({ open, setOpen, type }) => {
  const getTitle = () => {
    if (type === 'categories') return 'Categories';
    if (type === 'sort') return 'Sort';
    if (type === 'filter') return 'Filter';
    return 'Drawer';
  };

  const getDescription = () => {
    if (type === 'categories') return 'Choose a category';
    if (type === 'sort') return 'Select a sort order';
    if (type === 'filter') return 'Set your filters';
    return '';
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{getTitle()}</DrawerTitle>
            <DrawerDescription>{getDescription()}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">test</div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};


const Jewellery = () => {
  const [open, setOpen] = useState(false);
  const [activeType, setActiveType] = useState(null);
  const { width } = useWindowSize();
  const [selected, setSelected] = useState("all");

  const setSelectedCategory = (label) => {
    setSelected(label);
  }

  return (
    <div className="section-list">
      {
        width >= 1023 &&      
        <>
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
        </>
     }
      {width <= 1023 &&  
        <div className="filter-list my-6">
            <Swiper
               slidesPerView={'auto'}
               spaceBetween={15}
               modules={[Pagination]}
            >
                  {
                    InitialFilter.map((item) => (
                      <SwiperSlide key={item.label}>
                            <Button                              
                              onClick={() => setSelectedCategory(item.label)}
                              variant={selected === item.label ? "default" : "secondary"}
                              className="cursor-pointer"
                            >
                              {item.name}
                            </Button>
                      </SwiperSlide>
                    ))
                  }
            </Swiper>
        </div>        
      }

      <div className="product-list-section block lg:grid lg:grid-cols-[20%_80%] px-5 lg:px-20">
         {
          width > 1023 &&  
            <div className="filter-sidebar block pe-10">
              <div className="pb-4 flex justify-between items-center">
                <div className="uppercase text-sm">
                  Filters
                  <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums ml-2" variant="secondary">1</Badge>
                </div>
                <div className="uppercase text-sm cursor-pointer text-red-500">clear All</div>
              </div>
            
                  <StickyBox offsetTop={20} offsetBottom={5}>
                    <Separator className="my-2" />
                    <FilterSidebar filterItem={[RingSizeFilter, PriceFilter, DiscountsFilter, ProductTypeFilter]}/>
                  </StickyBox>
            </div>
          }           
        <div className="product-list block">
          {
            width > 1023 &&          
            <div className="selected-filter w-full flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4 mb-6">
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
          }
          <div className="product-list-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {
              productData.map((item)=>(
                <ProductCard item={item} key={item.product_id}/>  
              ))
            }
          </div>
        </div>
      </div>
        {width <= 1023 && 
          <div className="fixed bottom-0 left-0 w-full bg-black flex items-center justify-between text-white px-2">
            <div className="h-14 flex justify-center items-center text-white">
              <Button variant="none" onClick={() => {"menu will be open"}}>
                <ChartNoAxesGantt /> <span className="text-[12px] uppercase">Categories</span>
              </Button>
            </div>
            <div className="h-14 flex justify-center items-center text-white">
              <Button variant="none" onClick={() => { setActiveType('sort'); setOpen(true); }}>
                <ArrowDownUp /> <span className="text-[12px] uppercase">Sort</span>
              </Button>
            </div>
            <div className="h-14 flex justify-center items-center text-white">
              <Button variant="none" onClick={() => { setActiveType('filter'); setOpen(true); }}>
                <Settings2 /> <span className="text-[12px] uppercase">Filter</span>
              </Button>
            </div>
          </div>
        }
       <FilterBottomSheet open={open} setOpen={setOpen} type={activeType} />
    </div>
  )
}

export default Jewellery
