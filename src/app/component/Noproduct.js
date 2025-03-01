import React from 'react';
import { PackageSearch, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NoProduct = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 animate-fadeIn">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.back()}
          className="flex items-center text-amber-900 hover:text-amber-800"
        >
          <ArrowLeft className="h-6 w-6 mr-2" />
          Back
        </button>
      </div>
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-amber-100 animate-pulse"></div>
          <div className="relative bg-white rounded-full p-4">
            <PackageSearch size={48} className="text-amber-950" />
          </div>
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-amber-950">
          No Products Found
        </h2>
        <p className="mt-2 text-gray-600 max-w-md">
          We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
        </p>
        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-amber-950" />
            <span>Try searching for something else</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-amber-950" />
            <span>Check your spelling for typos</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBag size={16} className="text-amber-950" />
            <span>Use more general search terms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoProduct;

