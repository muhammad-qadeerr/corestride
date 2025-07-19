"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isLoading, isNavigating, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef(null);
  const isActive = isLoading || isNavigating;

  useEffect(() => {
    if (isActive) {
      setProgress(0);
      
      // Clear any existing interval
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }

      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressIntervalRef.current);
            setTimeout(() => {
              onComplete && onComplete();
            }, 150);
            return 100;
          }
          return prev + Math.random() * 25 + 15;
        });
      }, 60);

      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
      };
    } else {
      // Reset progress when not active
      setProgress(0);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
  }, [isActive, onComplete]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] bg-white/90 dark:bg-black/90 backdrop-blur-sm flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            {/* Rotating Circle */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 0.6, 
                ease: "linear", 
                repeat: Infinity 
              }}
              className="absolute w-32 h-32 border-4 border-gray-200 dark:border-gray-700 rounded-full"
            >
              {/* Progress Arc */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, #3B82F6 0deg, #3B82F6 ${progress * 3.6}deg, transparent ${progress * 3.6}deg, transparent 360deg)`
                }}
              />
            </motion.div>

            {/* Inner Circle with Company Name */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-24 h-24 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-lg font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Core
                  </span>
                  <span className="bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                    Stride
                  </span>
                </div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
                  Labs
                </div>
              </div>
            </motion.div>

            {/* Outer Rotating Elements */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ 
                duration: 0.8, 
                ease: "linear", 
                repeat: Infinity 
              }}
              className="absolute w-40 h-40"
            >
              {[...Array(8)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) rotate(${index * 45}deg) translateY(-20px)`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: index * 0.05
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader; 