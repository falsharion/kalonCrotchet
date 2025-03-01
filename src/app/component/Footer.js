"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTwitter, FaEnvelope, FaTiktok } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import KalonLogo from './KalonLogo';

const Footer = () => {
  const router = useRouter();

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push('/#about');
    }
  };

  return (
    <footer className='flex sm:flex-row md:justify-evenly flex-wrap md:flex-nowrap py-10 flex-col items-center justify-between bg-orange-100 px-3'>
      <div className='md:w-[44vw] max-w-2xl'>
        {/* Add explicit width/height and priority to prevent layout shift */}
        <div className="mb-3">
        <KalonLogo className="text-2xl" />
</div>
        <p className='opacity-50 leading-8 w-10/12 text-xl md:text-2xl'>
          Kalon is an organization, passionate about all things crochet and have a love for creating beautiful and unique pieces.
        </p>
        <div className='flex pt-3 gap-4'>
          {/* Add explicit size to social icons */}
          <Link href='https://instagram.com' target='_blank' rel='noopener noreferrer' className="h-8 w-8 flex items-center justify-center">
            <FaInstagram className='text-2xl hover:text-orange-500' />
          </Link>
          <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer' className="h-8 w-8 flex items-center justify-center">
            <FaTwitter className='text-2xl hover:text-orange-500' />
          </Link>
          <Link href='mailto:kalon@gmail.com' className="h-8 w-8 flex items-center justify-center">
            <FaEnvelope className='text-2xl hover:text-orange-500' />
          </Link>
          <Link href='https://tiktok.com' target='_blank' rel='noopener noreferrer' className="h-8 w-8 flex items-center justify-center">
            <FaTiktok className='text-2xl hover:text-orange-500' />
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap gap-8 mt-12 mb-12 w-full md:text-l md:w-[50vw] text-m max-w-lg'>
        <div className="min-w-[150px]"> {/* Add minimum width to prevent layout shift */}
          <p className='pb-4 font-bold'>Quick links</p>
          <ul>
            <li className='pb-2 opacity-50 hover:opacity-100'><Link href='/'>Home</Link></li>
            <li className='pb-2 opacity-50 hover:opacity-100'>
              <a href='/' onClick={handleScrollToAbout}>About</a>
            </li>
            <li className='pb-2 opacity-50 hover:opacity-100'><Link href='/contact'>Contact</Link></li>
            <li className='pb-2 opacity-50 hover:opacity-100'><Link href='/product'>Product</Link></li>
            <li className='pb-2 opacity-50 hover:opacity-100'><Link href="/customForm">Custom Order</Link></li>
          </ul>
        </div>
        <div className="min-w-[150px]"> {/* Add minimum width to prevent layout shift */}
          <p className='font-bold'>Delivery details</p>
          <ul>
            <li className='pb-2 opacity-50 hover:opacity-100'>Within Ajah 2k</li>
            <li className='pb-2 opacity-50 hover:opacity-100'>Outside Ajah 2k</li>
            <li className='pb-2 opacity-50 hover:opacity-100'>Delivery takes 2-4 days</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;