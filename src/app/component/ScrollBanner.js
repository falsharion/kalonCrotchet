import React from 'react';
import { GiYarn } from "react-icons/gi";
import { items } from '../constants'; 

const BannerItem = ({ text }) => (
  <div className="flex items-center space-x-2 whitespace-nowrap h-10"> {/* Add fixed height */}
    <span className="inline-flex items-center">
      Knit <span className="ml-1">{text}</span>
    </span>
    <GiYarn className="text-2xl w-6 h-6" /> {/* Add fixed dimensions */}
  </div>
);

const ScrollBanner = () => {
  return (
    <div className="relative text-white py-2 bg-orange-700 flex overflow-hidden group h-14"> {/* Add fixed height */}
      <div className="flex space-x-10 animate-scroll-slow">
        {Array.from({ length: 2 }, (_, i) => (
          <div key={i} className="flex space-x-10">
            {items.map((item, index) => (
              <BannerItem key={`${i}-${index}`} text={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollBanner;