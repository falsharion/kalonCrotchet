
import Hero from "./component/Hero"
import Image from "next/image"
import Link from "next/link"

const HomePage = () => {


  return (
    <div>
      <div className=" bg-orange-50 text-center h-[70vh] grid pt-6 ">
        <div className=" flex flex-col justify-evenly h-4/5  ">
          <h1 className=" font-semibold w-10/12 m-auto text-xl p-3 ">With every loop and stitch, crochet your way to happiness and bliss</h1>
          <p className=" text-xs  mb-10 font-light pb-2 m-auto w-10/12 ">Welcome to our crochet wonderland! Explore our vast collection of high-quality yarns, patterns, and tools to fuel your creativity and make your crochet dreams a reality. </p>
          <button className=" bg-red-400 w-30 p-7 m-auto hover:bg-red-600 text-white font-bold py-2 px-4 rounded"><Link href="/Accessories">SHOP NOW</Link></button>
        </div>
        <div className=" flex justify-center">
          <Image src="/heroimage.png"
            width="500"
            height="500" /></div>
      </div>



      <div>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 mx-5 my-10 gap-x-2 gap-y-7">
            <div className="flex flex-col items-center justify-center">
              <img src="/carticons.png" alt="Free Shipping" className="w-18 h-18" />
              <p className="text-center">Free Shipping</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/shopicon.png" alt="Buy Online" className="w-18 h-18" />
              <p className="text-center">Buy Online</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/shopicon.png" alt="Buy Online" className="w-18 h-18" />
              <p className="text-center">Buy Online</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src="/shopicon.png" alt="Buy Online" className="w-18 h-18" />
              <p className="text-center">Buy Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
