import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Mainlayout = () => {
    return (
        <div className='flex flex-col min-h-screen mx-auto '>
         <Navbar></Navbar>  
        <div className=''>
                 <Outlet></Outlet>
              </div>
         <Footer></Footer>
        
        </div>
    );
};

export default Mainlayout;