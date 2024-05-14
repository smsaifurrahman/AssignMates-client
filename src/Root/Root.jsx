import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Home from '../Pages/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='my-10 max-w-7xl mx-auto px-2 md:px-2 lg:px-0 '>
          {/* Navbar */}
          <Navbar></Navbar>
         <div className='min-h-screen'>
         <Outlet></Outlet>
         </div>
          {/* Footer */}
          <Footer></Footer>
        </div>
    );
};

export default Root;