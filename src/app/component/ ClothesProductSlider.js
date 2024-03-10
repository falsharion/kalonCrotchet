"use client"
import React, { useState, useEffect } from 'react';
import productsData from './productsData';

const ClothesProductSlider = () => {
  const [clothesData] = useState(productsData);
  const [startIndex, setStartIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 300);

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : clothesData.length - getDisplayCount()));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex < clothesData.length - getDisplayCount() ? prevIndex + 1 : 0
    );
  };

  const getDisplayCount = () => {
    if (windowWidth < 640) {
      return 2; // Small screens, show 2 products
    } else if (windowWidth < 768) {
      return 3; // Medium screens, show 3 products
    } else {
      return 4; // Large screens, show 4 products
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex md:flex-row items-center justify-center">
      <button onClick={handlePrev} className="mx-4">
        &lt;
      </button>

      <div className={`flex justify-center md:justify-between`}>
        {clothesData.slice(startIndex, startIndex + getDisplayCount()).map((product) => (
          <div key={product.id} className="text-center mx-4 my-2">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-72"
            />
            <p className="font-medium text-base pt-4">{product.name}</p>
          </div>
        ))}
      </div>

      <button onClick={handleNext} className="mx-4" type="button">
        &gt;
      </button>
    </div>
  );
};

export default ClothesProductSlider;
