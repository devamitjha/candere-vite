import React from 'react';
import TopNav from './TopNav';
import Menu from './Menu';
import useWindowSize from '@/hooks/useWindowSize';
import MobileMenu from './MobileMenu';

const header = () => {
  const { width } = useWindowSize();
  return (
    <header className="w-full bg-white pt-3">
      <TopNav />
      {width > 1280 ? <Menu/> : <MobileMenu/> }      
    </header>
  )
}

export default header
