"use client";

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
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
import { useCart } from "../context/CartContext";
import LoadingUI from './LoadingUI';
import KalonLogo from './KalonLogo';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useCart();
  const pathname = usePathname();

  // Icon mapping object
  const IconComponent = {
    HomeIcon: HomeIcon,
    HeartIcon: HeartIcon,
    ShoppingCartIcon: ShoppingCartIcon,
    UserIcon: UserIcon
  };

  // Handle loading state on route changes
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const handleScrollToSection = useCallback(async (id) => {
    setIsLoading(true);
    if (window.location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
        setTimeout(() => setIsLoading(false), 500);
      }
    } else {
      window.location.href = `/#${id}`;
      setIsLoading(false);
    }
  }, []);

  // Clear loading state if component unmounts
  useEffect(() => {
    return () => setIsLoading(false);
  }, []);

  // Function to check if a link is active
  const isLinkActive = (linkPath) => {
    if (!linkPath) return false;
    return pathname === linkPath;
  };

  const NavLink = ({ href, children, onClick, id }) => {
    const active = href ? isLinkActive(href) : false;
    
    return (
      <li className={`${active ? 'text-orange-700' : 'hover:text-red-700'} transition-colors`}>
        {href ? (
          <Link 
            href={href} 
            onClick={(e) => {
              if (onClick) {
                onClick(e);
              }
            }} 
            className="relative text-lg"
          >
            {children}
          </Link>
        ) : (
          <button 
            onClick={onClick} 
            className="relative text-lg"
          >
            {children}
          </button>
        )}
      </li>
    );
  };
  
  const Logo = ({ width = 70, height = 80, onClick }) => (
    <Link href="/" onClick={onClick}>
      <KalonLogo className="text-xl" />
    </Link>
  );

  return (
    <>
      {isLoading && <LoadingUI />}
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
            <Link href="/">
              <KalonLogo className="text-xl" />
            </Link>

            <div className="flex items-center space-x-8">
              <ul className="flex items-center space-x-6">
                {navigationLinks.map((link) =>
                  link.id ? (
                    <NavLink key={link.id} onClick={() => handleScrollToSection(link.id)} id={link.id}>
                      {link.name}
                    </NavLink>
                  ) : (
                    <NavLink key={link.path} href={link.path}>
                      {link.name}
                    </NavLink>
                  )
                )}
              </ul>

              <div className="flex items-center space-x-4">
                <button className="hover:text-red-700 transition-colors">
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </button>
                <Link 
                  href="/cart" 
                  className={`relative ${isLinkActive('/cart') ? 'text-orange-700' : 'hover:text-red-700'} transition-colors`}
                >
                  <ShoppingCartIcon className="w-6 h-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Fixed Bottom */}
      <div className="md:hidden fixed bottom-0 rounded-tl-lg rounded-tr-lg left-0 right-0 bg-slate-50 z-30 border-t border-gray-200">
        <div className="flex items-center justify-around text-amber-950/80 py-3">
          {mobileNavLinks.map((link) => {
            const Icon = IconComponent[link.icon];
            const active = isLinkActive(link.path);
            
            return (
              <Link 
                key={link.path} 
                href={link.path} 
                className={`flex flex-col items-center relative ${active ? 'text-orange-700' : ''}`}
              >
                <Icon className="w-6 h-6" />
                {link.icon === "ShoppingCartIcon" && cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
                <span className="text-xs mt-1">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

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
            {navigationLinks.map((link) =>
              link.id ? (
                <NavLink 
                  key={link.id} 
                  onClick={() => {
                    handleScrollToSection(link.id);
                    setNavbar(false);
                  }}
                  id={link.id}
                >
                  {link.name}
                </NavLink>
              ) : (
                <NavLink 
                  key={link.path} 
                  href={link.path} 
                  onClick={() => setNavbar(false)}
                >
                  {link.name}
                </NavLink>
              )
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;