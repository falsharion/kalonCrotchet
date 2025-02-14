"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  MagnifyingGlassIcon, 
  ShoppingCartIcon, 
  HomeIcon,
  HeartIcon,
  UserIcon,
  XMarkIcon,
  Bars3Icon
} from '@heroicons/react/24/solid';
import { navigationLinks, mobileNavLinks } from '../constants/index';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const IconComponent = {
    HomeIcon,
    HeartIcon,
    ShoppingCartIcon,
    UserIcon
  };

  const NavLink = ({ href, children, onClick }) => (
    <li className="hover:text-red-700 transition-colors">
      <Link 
        href={href} 
        onClick={onClick} 
        className="relative text-lg md:no-underline md:hover:no-underline after:content-[''] after:absolute after:left-1/2 after:bottom-[-4px] after:w-3/4 after:h-[2px] after:bg-black after:translate-x-[-50%] after:transition-all after:duration-300 md:after:hidden hover:after:w-full"
      >
        {children}
      </Link>
    </li>
  );
  

  const Logo = ({ width = 70, height = 80, onClick }) => (
    <Link href="/" onClick={onClick}>
      <Image
        src="/kalonlogo.png"
        width={90}
        height={100}
        alt="logo of the website"
      />
    </Link>
  );

  return (
    <>
      {/* Mobile Top Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 bg-orange-50 z-30">
        <div className="flex justify-between items-center p-4 py-2">
          <Logo />
          <button 
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <XMarkIcon width={30} height={30} alt="cancel" />
            ) : (
              <Bars3Icon width={30} height={30} alt="hamburger" />
            )}
          </button>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="w-full fixed top-0 left-0 right-0 text-amber-950/80 bg-orange-50 z-30 md:block h-0 md:h-auto">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
          <div className="hidden md:flex items-center justify-between py-3">
            <Logo width={90} height={100} />

            <div className="flex items-center space-x-8">
              <ul className="flex items-center space-x-6">
                {navigationLinks.map((link) => (
                  <NavLink key={link.path} href={link.path}>
                    {link.name}
                  </NavLink>
                ))}
              </ul>

              <div className="flex items-center space-x-4">
                <button className="hover:text-red-700 transition-colors">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </button>
                <button className="hover:text-red-700 transition-colors">
                  <ShoppingCartIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Fixed Bottom */}
      <nav className="md:hidden fixed bottom-0 rounded-tl-lg  rounded-tr-lg left-0 right-0 bg-slate-50 z-30 border-t border-gray-200">
        <div className="flex items-center justify-around text-amber-950/80 py-3">
          {mobileNavLinks.map((link) => {
            const Icon = IconComponent[link.icon];
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className="flex flex-col items-center"
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs mt-1">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navbar && (
  <div className="fixed inset-0 bg-orange-50 z-40 md:hidden">
    <div className="p-4 flex justify-between items-center">
      <Logo width={90} height={100} onClick={() => setNavbar(false)} />
      <button onClick={() => setNavbar(false)} className="p-2 text-gray-700">
        <XMarkIcon width={30} height={30} alt="cancel" />
      </button>
    </div>

    <ul className="flex flex-col items-center justify-evenly h-[calc(100vh-200px)]">
      {navigationLinks.map((link) => (
        <NavLink key={link.path} href={link.path} onClick={() => setNavbar(false)}>
          {link.name}
        </NavLink>
      ))}
    </ul>
  </div>
)}
    </>
  );
};

export default Navbar;
