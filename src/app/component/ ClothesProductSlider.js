"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import clothingDB from '../constants/clothingDB';
import Link from "next/link";

const ClothesProductSlider = () => {
  // Use refs for values that don't need to trigger re-renders
  const slideIntervalRef = useRef(null);
  const animatingRef = useRef(false);
  

  const [mounted, setMounted] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayCount, setDisplayCount] = useState(4); // Default to desktop view for SSR

  const totalSlides = mounted ? Math.max(1, clothingDB.featuredItems.length - displayCount + 1) : 1;
  

  useEffect(() => {
    setMounted(true);
    updateDisplayCount();
    
    const handleResize = () => {
      updateDisplayCount();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateDisplayCount = () => {
    const width = window.innerWidth;
    let count = 4; 
    
    if (width < 640) count = 1;
    else if (width < 768) count = 2;
    else if (width < 1024) count = 3;
    
    setDisplayCount(count);
  };


  const handleNext = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    
    setStartIndex(prevIndex => {
      const newIndex = prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
    
    setTimeout(() => {
      animatingRef.current = false;
    }, 500);
  };

  const handlePrev = () => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    
    setStartIndex(prevIndex => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : totalSlides - 1;
      return newIndex;
    });
    
    setTimeout(() => {
      animatingRef.current = false;
    }, 500);
  };

  const handleDotClick = (index) => {
    if (animatingRef.current || index === startIndex) return;
    animatingRef.current = true;
    setStartIndex(index);
    setTimeout(() => {
      animatingRef.current = false;
    }, 500);
  };

 
  useEffect(() => {
    if (!mounted) return;
    
    const autoSlide = () => {
      if (!animatingRef.current) {
        setStartIndex(prevIndex => 
          prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
        );
      }
    };

    if (!isPaused) {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
      slideIntervalRef.current = setInterval(autoSlide, 4000);
    }

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPaused, totalSlides, mounted]);


  const progressDots = React.useMemo(() => {
    return Array.from({ length: totalSlides }, (_, i) => i);
  }, [totalSlides]);


  const productItems = React.useMemo(() => {
    return clothingDB.featuredItems.map((product) => (
      <div 
        key={`product-${product.id}`}
        className="relative flex-shrink-0 px-2"
        style={{ width: `${100 / displayCount}%` }}
      >
        <div className="bg-white rounded-lg overflow-hidden shadow-md group">
          <div className="relative aspect-[4/4] md:aspect-[3/4]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <button className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 mb-2 hover:bg-gray-100 transition-colors">
                <Eye size={20} />
                <Link href={`/product/${product.id}`}>View Details</Link>
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="font-medium text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-1">Pattern: {product.stitchPattern}</p>
            <p className="text-xl font-semibold">₦{product.price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    ));
  }, [displayCount]);

  return (
    <div 
      className="relative max-w-6xl mx-auto px-4 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center">
        <button 
          onClick={handlePrev}
          className="absolute left-1 z-10 p-2 rounded-full bg-amber-950/80 text-white hover:bg-amber-950 transition-colors duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        <div className="w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: mounted ? `translateX(-${startIndex * (100 / displayCount)}%)` : "translateX(0%)"
            }}
          >
            {productItems}
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {progressDots.map((index) => (
              <div 
                key={`dot-${index}`}
                className={`w-11 md:w-16 h-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  index === startIndex ? 'bg-amber-900/80' : 'bg-amber-900/30'
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>

        <button 
          onClick={handleNext}
          className="absolute right-1 z-10 p-2 rounded-full bg-amber-950/80 text-white hover:bg-amber-950 transition-colors duration-200"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ClothesProductSlider;
