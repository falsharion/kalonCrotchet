
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext'; // adjust the path as needed
import Noproduct from './Noproduct';

export const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <Noproduct />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative border bg-white rounded-lg overflow-hidden">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className='px-4 py-2 '> 
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
          
          <p className="text-sm text-orange-800 font-medium ">
          ₦{product.price.toLocaleString()}
        </p>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
    
      </div>
      <div className="mt-2  flex gap-1">
        {product.color.map((color) => (
          <div
            key={color}
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <Link
        href={`/product/${product.id}`}
        className="mt-2 blocktext-sm text-orange-900 hover:text-orange-800"
      >
        View More
      </Link>
      </div>
    </div>
  );
};
