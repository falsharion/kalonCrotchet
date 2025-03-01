"use client"
import React from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import pagenotfound from '../../public/pagenotfound.json';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md mb-8">
        <Lottie 
          animationData={pagenotfound} 
          loop={true}
          className="w-full h-64"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4 text-center">
        Oops! Page Not Found
      </h1>
      
      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you're looking for seems to have wandered off. 
        Don't worry, you can always find your way back home.
      </p>
      
      <Link 
        href="/"
        className="px-6 py-3 bg-amber-950 text-white rounded-full 
                 font-medium hover:bg-amber-900 transition-colors 
                 duration-300 flex items-center gap-2"
      >
        Return Home
      </Link>
      
      <div className="mt-8 text-sm text-gray-500 text-center">
        <p>Error Code: 404</p>
      </div>
    </div>
  );
}