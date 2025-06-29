import React from 'react';
import TopNav from './TopNav';
import Menu from './Menu';

const header = () => {
  return (
    <header className="w-full bg-white pt-3">
      <TopNav />
      <Menu/>
    </header>
  )
}

export default header
