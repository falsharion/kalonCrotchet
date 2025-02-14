import Link from 'next/link'
import Image from "next/image"

const Hero = () => {
    return (
        <section className="relative bg-white text-center lg:text-left  h-[570px] md:h-[800px] lg:h-[500px] grid grid-cols-1 lg:grid-cols-2 mt-16 md:pt-4 md:mt-0">
        <div className="flex flex-col h-full p-6 md:mt-16 relative ">
          <div className=" z-20 pt-6 md:pt-2 ">
            <h1 className="font-semibold text-amber-950 text-2xl md:text-4xl mb-3">Stitched to Perfection</h1>
            <p className="text-xs text-amber-950/80 md:text-lg mb-5">Welcome to our crochet wonderland! Explore our vast collection of high-quality yarns, patterns, and tools to fuel your creativity and make your crochet dreams a reality.</p>
          </div>
          <p className="hover:bg-red-400 z-20 w-32 p-3 m-auto lg:m-0 bg-red-600 text-white  mt-2 font-bold rounded">
            <Link href="/Accessories" className=" text-base text-center">SHOP NOW</Link>
          </p>
        </div>
        <div className=" absolute bottom-0 z-0 lg:right-0 ">
          <Image src="/heroimage.png" width="700" height="700" alt="heroimage" />
        </div>
      </section>
    )
}

export default Hero