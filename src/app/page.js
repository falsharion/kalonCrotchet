
import Hero from "./component/Hero"
import ClothesProductSlider from "./component/ ClothesProductSlider"
import Link from "next/link"
import {serviceFeatures} from "./constants/index"
import HighlightTextDemo from "./component/HighlightTextDemo"
import React from "react";
import About from "./component/About"
import Navbar from "./component/Navbar"
import FilteredLink from './component/FilteredLink';
import { GiThreeLeaves, GiStarSwirl } from "react-icons/gi";
import { IoPin } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
// import Test404Routes from "./component/Test404Routes"

const iconMap = {
  GGiThreeLeaves: GiThreeLeaves,
  IoPin: IoPin,
  SlBadge: SlBadge,
  GiStarSwirl: GiStarSwirl,
};

const HomePage = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <div className="pb-5">
        <div className="lg:w-[781px] mx-auto">
        <div className="grid grid-cols-4 mx-5 my-10 gap-x-2 gap-y-7">
            {serviceFeatures.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={index} className="flex flex-col items-center justify-center">
                  {IconComponent && (
                    <div className="w-12 h-12 md:w-16 md:h-16 mb-3 border shadow-md shadow-orange-900/25 rounded-full bg-white/50 flex items-center justify-center">
                      <IconComponent 
                        className="w-6 h-6 md:w-8 md:h-8" 
                        style={{
                          color: 'url(#iconGradient)',
                          fill: 'url(#iconGradient)'
                        }}
                      />
                      <svg width="0" height="0">
                        <defs>
                          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#ea580c" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  )}
                  <p className="text-center text-xs md:text-base">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center py-10 gap-16 items-center text-center md:flex-row">
      <div className="text-center">
  <img src="image 21.png" alt="hat" width={300} height={300} className="lg:w-10/12 mx-auto" />
  <p className="font-semibold text-lg pt-4">Accessories</p>
  <FilteredLink 
    category="accessories"
    className="underline-offset-2 decoration-0"
  >
    SHOP NOW
  </FilteredLink>
</div>
        <div className="text-center">
          <img src="image 17.png" alt="hat" width={300} height={300} className="lg:w-10/12 mx-auto" />
          <p>Crochet items</p>
          <Link href="/product">SHOP NOW</Link>
        </div>
      </div>

      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-20 md:w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h3 className="font-semibold px-4 text-lg">Featured items</h3>
        <hr className="w-20 md:w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      </div>

      <ClothesProductSlider />

      <div className="py-16">
        <h2 className="text-center text-2xl font-bold pb-6">Customize Your Design</h2>
        <div className="flex w-full pb-4 px-4 justify-center">
          <img src="image 10.png" className="hidden md:block w-1/3" />
          <img src="image 11.png" className="w-10/12 md:w-1/3" />
          <img src="image 12.png" className="hidden md:block w-1/3" />
        </div>
        <p className="text-center text-amber-950/80 text-sm px-4 md:text-left">
          Explore our extensive collection of high-quality, stylish and comfortable clothing for every occasion.
        </p>
        <p className="w-24 py-2 rounded-sm md:mx-4 m-auto bg-orange-600 text-white mt-6">
          <Link href="/customForm" className="flex justify-center items-center text-sm text-center">
            CUSTOMIZE
          </Link>
        </p>
      </div>

      <section id="about">
        <About />
      </section>
      <HighlightTextDemo />
      {/* <Test404Routes /> */}
    </section>
  );
};

export default HomePage;