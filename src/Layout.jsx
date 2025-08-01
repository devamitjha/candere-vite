import React, {useState} from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="candereApp">           
        <Header/>
        <Outlet />
        <Footer />
    </div>
  );
};

export default Layout;
