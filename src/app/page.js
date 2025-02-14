
import Hero from "./component/Hero"
import ClothesProductSlider from "./component/ ClothesProductSlider"
import Link from "next/link"
import {serviceFeatures} from "./constants/index"

const HomePage = () => {

  return (
    <section>
      <Hero />
      <div className="pb-5">
      <div className="lg:w-[781px] mx-auto">
        <div className="grid grid-cols-4 mx-5 my-10 gap-x-2 gap-y-7">
          {serviceFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img src={feature.img} alt={feature.text} className="w-12 h-12 md:w-18 md:h-18 mb-3" />
              <p className="text-center text-xs md:text-base">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      <div className="flex flex-col justify-center py-10 gap-16 items-center text-center md:flex-row">
        <div className="text-center">
          <img src="image 21.png" alt="hat" width={300} height={300} className="lg:w-10/12 mx-auto" />
          <p className="font-semibold text-lg pt-4">Accessories</p>
          <Link href="/Accessories" className="underline-offset-2 decoration-0">SHOP NOW</Link>
        </div>
        <div className="text-center">
          <img src="image 17.png" alt="hat" width={300} height={300} className="lg:w-10/12 mx-auto" />
          <p>Crochet items</p>
          <Link href="/Accessories">SHOP NOW</Link>
        </div>
      </div>

      <div className="inline-flex items-center justify-center w-full">
        <hr className=" w-20 md:w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h3 className=" font-semibold px-4 text-lg ">Feautured items</h3>
        <hr className=" w-20 md:w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      </div>
      <ClothesProductSlider />
      <div className="py-16">
        <h2 className="text-center pb-6">Customize Your Design</h2>
        <div className="flex w-full pb-4 px-4 justify-center ">
          <img src="image 10.png" className="hidden md:block w-1/3 " />
          <img src="image 11.png" className=" w-10/12 md:w-1/3" />
          <img src="image 12.png" className="hidden md:block w-1/3" />
        </div>
        <p className=" text-center text-sm px-4 md:text-left">
        Explore our extensive collection of high-quality, stylish and comfortable clothing for every occasion.
        </p>
        <p className=" w-32 md:mx-4 p-3 m-auto bg-orange-600 text-white  mt-6 ">
            <Link href="/customForm" className=" text-sm text-center ">FILL A FORM</Link>
          </p>
      </div>
      <div className="flex gap-6 flex-col-reverse md:flex-row bg-amber-50 justify-around md:p-10 ">
        <img src="image 22.png" className="m-auto w-3/5 md:w-56 lg:w-80 lg:pl-6" />
        <div>
          <h3 className=" text-center px-4 py-10 text-lg text-orange-600 font-semibold md:text-left lg:px-8">About Kalon</h3>
          <p className=" text-center px-4 md:text-left lg:px-8">Introducing our new e-commerce crochet website, the ultimate destination for all your crochet needs. We offer a wide range of high-quality products, including yarn, hooks, patterns, kits, and other accessories, all organized in a clear and user-friendly way. Our mission is to provide a seamless and enjoyable shopping experience for all our customers. Our customer service team is always available to help you with any questions you may have. We also have a blog section where you can find helpful tips, tutorials, and news about upcoming events and sales. Shop with us today and discover the joy of crochet!</p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
