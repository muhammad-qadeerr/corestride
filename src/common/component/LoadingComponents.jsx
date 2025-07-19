"use client";
import React from 'react';
import { useLoading } from '@/common/context/LoadingContext';
import Loader from './element/Loader';

const LoadingComponents = () => {
  const { isLoading, isNavigating, stopLoading, stopNavigation } = useLoading();

  return (
    <>
      <Loader 
        isLoading={isLoading} 
        isNavigating={isNavigating}
        onComplete={() => {
          if (isLoading) stopLoading();
          if (isNavigating) stopNavigation();
        }}
      />
    </>
  );
};

export default LoadingComponents; 