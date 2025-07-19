"use client";
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const initialLoadRef = useRef(true);
  const navigationTimeoutRef = useRef(null);

  // Initial page load - only run once
  useEffect(() => {
    if (initialLoadRef.current) {
      initialLoadRef.current = false;
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, []);

  // Navigation loading - prevent multiple triggers
  useEffect(() => {
    if (!initialLoadRef.current && pathname) {
      // Clear any existing timeout
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
      
      setIsNavigating(true);
      navigationTimeoutRef.current = setTimeout(() => {
        setIsNavigating(false);
      }, 500);
    }

    return () => {
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, [pathname]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);
  const startNavigation = () => setIsNavigating(true);
  const stopNavigation = () => setIsNavigating(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        isNavigating,
        startLoading,
        stopLoading,
        startNavigation,
        stopNavigation,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}; 