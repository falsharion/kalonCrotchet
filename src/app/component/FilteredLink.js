'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const FilteredLink = ({ category, children, className }) => {
  const router = useRouter();

  const handleClick = () => {
    localStorage.setItem('initialFilter', category);
    router.push('/product');
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default FilteredLink;