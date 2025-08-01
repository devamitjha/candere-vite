import React, { useState } from "react";
import TopNav from './TopNav';
import Menu from './Menu';
import useWindowSize from '@/hooks/useWindowSize';
import MobileMenu from './MobileMenu';

const header = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <header className="w-full bg-white pt-3">
      <TopNav openMenu={toggleSidebar} />
      {width > 1280 ? <Menu/> : <MobileMenu isOpen={isOpen} toggleSidebar={toggleSidebar}/> }      
    </header>
  )
}

export default header
