import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; // adjust the path as needed
import Noproduct from './Noproduct';

export const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <Noproduct />;
  }
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  
  return (
    <div className="group relative border bg-white rounded-lg overflow-hidden flex flex-col h-full">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="px-4  flex flex-col flex-1">
        <div className="mt-4 flex justify-between">
          <div className="flex flex-col h-16"> 
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 h-10">{product.name}</h3>
            <p className="text-sm text-orange-800 font-medium mt-auto">
              ₦{product.price.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-gray-500/70 capitalize">{product.category}</p>
          </div>
        </div>
        <Link
          href={`/product/${product.id}`}
          className="mt-1 mb-2 text-sm md:text-base text-orange-900 hover:text-orange-800 self-start"
        >
          View More
        </Link>
      </div>
    </div>
  );
};