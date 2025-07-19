"use client";
import React from 'react';
import Navbar from '@/common/component/navbar/Navbar';
import Footer from '@/common/module/Footer';
import LoadingComponents from '@/common/component/LoadingComponents';

const AppWrapper = ({ children }) => {
  return (
    <>
      <LoadingComponents />
      <div className='flex justify-center items-center'>
        <Navbar />
      </div>
      {children}
      <div className='flex justify-center items-center'>
        <Footer />
      </div>
    </>
  );
};

export default AppWrapper; 