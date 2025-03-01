import React from 'react';
import Lottie from 'lottie-react';
import { ArrowRight } from 'lucide-react';
import emptyCartAnimation from '../constants/emptycart.json';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4">
      <div className="flex flex-col items-center text-center max-w-lg">
        <div className=" mb-6">
          <Lottie 
            animationData={emptyCartAnimation} 
            loop={true} 
            className="w-60 h-60" 
          />
        </div>
        
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added anything to your cart yet. Start shopping to find amazing products!
        </p>
        
        <button 
          className="inline-flex items-center px-6 py-3 bg-orange-950 text-white font-medium rounded-lg hover:bg-orange-800 transition-colors"
          onClick={() => window.location.href = '/product'}
        >
          Start Shopping
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
