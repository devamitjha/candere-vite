import React, { useState } from 'react';
import { Link } from 'react-router';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, Search, User, ShoppingCart, AlignLeft} from 'lucide-react';
import Logo from "../assets/image/logo.png"
import { ScrollArea } from "@/components/ui/scroll-area";
import useWindowSize from '@/hooks/useWindowSize';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

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

const CartSheet = ({count}) => {
    const { width } = useWindowSize();
     if (width>= 1280) {
        return (
            <Sheet>
                <SheetTrigger asChild>
                    <div className="w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center relative cursor-pointer">
                        <ShoppingCart size={24} />
                        {count > 0 && <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute right-0 top-0" variant="destructive">{count}</Badge>}
                    </div>
                </SheetTrigger>     
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>                            
                    </SheetHeader>
                        <ScrollArea className="w-full min-h-80 px-8">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </ScrollArea>
                    <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                    </SheetFooter>
                </SheetContent>   
            </Sheet> 
        )
    }

    return (
        <Drawer>
            <DrawerTrigger>
                <div className="w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center relative cursor-pointer">
                    <ShoppingCart size={24} />
                    {count > 0 && <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums absolute right-0 top-0" variant="destructive">{count}</Badge>}
                </div> 
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


const TopNav = ({openMenu}) => {
    const [count, setCount] = useState(1);    
    return (
    <>
        <div className="px-2 lg:px-5 flex justify-between w-full gap-4">
            <div className="flex justify-start w-[48%] lg:w-[20%]">  
                <div className="w-12 lg:w-14 h-12 lg:h-14 flex justify-center items-center mr-2 xl:hidden" onClick={openMenu}><AlignLeft /></div>  
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
                    <CartSheet count={count} />              
                
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
