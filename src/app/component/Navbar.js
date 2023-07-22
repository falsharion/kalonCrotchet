'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <nav className=" w-full fixed top-0 left-0 right-0 bg-white z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:px-8">
        <div className="md:flex items-center justify-between py-3 md:py-5 ">
          <div className="flex justify-between">
            <button className=" md:hidden p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <XMarkIcon
                  width={30}
                  height={30}
                  alt="cancel" />
              ) : (
                <Bars3Icon
                  width={30}
                  height={30}
                  alt="hamburger" />
              )}
            </button>
            <Link href="/">
              <Image className=" pt-3"
                src="/kalonlogo.png"
                width={30}
                height={30}
                alt="logo of the website"
              />
            </Link>
          </div>
          <div className={` justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 h-[90vh] md:p-0 block' : 'hidden'
            }`}>
            <ul className=" md:flex-row  flex flex-col justify-evenly h-[60vh] md:h-[5vh]">
              <li className=" text-black py-2 px-6  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-400 md:hover:text-red-700 md:hover:bg-transparent">
                <Link href="/about" onClick={() => setNavbar(!navbar)}>About Us</Link>
              </li>
              <li className="text-black py-2 px-6  border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-400  md:hover:text-red-700 md:hover:bg-transparent">
                <Link href="/contact" onClick={() => setNavbar(!navbar)}>Contact</Link>
              </li>
              <li className=" text-black py-2 px-6 border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-400  md:hover:text-red-700 md:hover:bg-transparent">
                <Link href="/product" onClick={() => setNavbar(!navbar)}>Product</Link>
              </li>
              <li className=" text-black py-2 px-6 border-b-2 md:border-b-0  hover:bg-gray-600  border-gray-400  md:hover:text-red-700 md:hover:bg-transparent">
                <Link href="/sales" onClick={() => setNavbar(!navbar)}>Sales</Link>
              </li>
            </ul>
          </div>
          <div className="md:flex hidden ">
            <MagnifyingGlassIcon width={30} />
            <ShoppingCartIcon width={30} />
          </div>
        </div>
      </div>


    </nav>
  )
}

export default Navbar
