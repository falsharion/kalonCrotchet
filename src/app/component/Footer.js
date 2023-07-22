
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=' flex sm:flex-row md:justify-evenly flex-wrap md:flex-nowrap py-10 flex-col items-center justify-between bg-orange-100 px-3'>
      <div className='md:w-[44vw] max-w-2xl'>
        <Image className=" mb-3 "
          src="/kalonlogo.png"
          width={100}
          height={100}
          alt="logo of the website"
        />
        <p className=' opacity-50 leading-8 w-10/12 text-xl md:text-2xl'>Kalon is an organization, passionate about all things crochet and have a love for creating beautiful and unique pieces. </p>
        <div className='flex pt-3'>
          <Image src="/insta.png"
            width={30}
            height={30}
            alt="socials instagram" />
          <Image src="/twitter.png"
            width={30}
            height={30}
            alt="socials twitter" />
        </div>
      </div>
      <div className='flex  flex-wrap gap-8  mt-12 w-full md:text-l md:w-[50vw] text-m max-w-lg'>
        <div>
        <p className='pb-4 font-bold'>Quick links</p>
        <ul className=''>
          <li className='pb-2 opacity-50 hover:opacity-100'><Link href="/">Home</Link></li>
          <li className='pb-2 opacity-50 hover:opacity-100'><Link href="/about">About</Link></li>
          <li className='pb-2 opacity-50 hover:opacity-100'><Link href="/contact">Contact</Link></li>
          <li className='pb-2 opacity-50 hover:opacity-100'><Link href="/product">Product</Link></li>
          <li className='pb-2 opacity-50 hover:opacity-100'><Link href="/customxorder">Custom Order</Link></li>
        </ul></div>
        <div>
          <p className='pb-4 font-bold'>Delivery details</p>
          <ul>
            <li className='pb-2  opacity-50 hover:opacity-100'>within ajah 2k</li>
            <li className='pb-2 opacity-50 hover:opacity-100 '>within outside 2k</li>
            <li className='pb-2 opacity-50 hover:opacity-100'>delivery takes 2-4 days</li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
