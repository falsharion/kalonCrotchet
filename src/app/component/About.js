import React from 'react';
import { AnimatedTooltip } from "../component/ui/animated-tooltip";
import AnimatedStars from "./AnimatedStars"; // Add this import

const people = [
  {
    id: 1,
    name: "#1 crotchet yarn ",
    designation: "Quality yarn",
    image:"/yarnhook.png",
  },
];

const About = () => {
  return (
    <section className="flex gap-6 pb-9 flex-col-reverse md:flex-row bg-amber-50 justify-around md:p-10 ">
      <img src="image 22.png" className="m-auto w-3/5 rounded-md md:w-56 lg:w-80 lg:pl-6" />
      <div>
        <h3 className="text-center text-2xl lg:text-3xl px-4 pt-10 pb-5 text-orange-600 font-semibold md:text-left lg:px-8">
          About Kalon
        </h3>
        <div className="text-center text-sm leading-8 text-amber-950/80 px-4 md:text-left lg:px-8 lg:text-xl lg:leading-9">
          Introducing our new e-commerce crochet website
          , the ultimate destination for all your crochet needs. We offer a wide range of high-quality products, including yarn{" "}
          <span className="inline-flex items-center justify-center align-middle mr-2">
            <AnimatedTooltip 
              items={people} 
              className="h-2 w-2"
            />
          </span>{" "}
          , hooks, patterns, kits, and other accessories, all organized in a clear and user-friendly way. Our mission is to provide a seamless and enjoyable shopping experience for all our customers. Our customer service team is <span className='inline-flex items-center justify-center align-middle'><AnimatedStars /> </span> and always available to help you with any questions you may have. We also have a blog section where you can find helpful tips, tutorials, and news about upcoming events and sales. Shop with us today and discover the joy of crochet!
        </div>
      </div>
    </section>
  );
};

export default About;