"use client";
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductGrid } from '../component/ProductGrid';
import { Filters } from '../component/Filters';
import { SearchBar } from '../component/SearchBar';
import clothingDB from '../constants/clothingDB';
import { Menu, Loader2 } from 'lucide-react';
import { useEffect, useState, useTransition } from 'react';
import Navbar from '../component/Navbar';
import { useSearchParams } from 'next/navigation';

export default function ProductPage() {
  const searchParams = useSearchParams();
  const [initialData, setInitialData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const loadData = () => {
      setInitialData(clothingDB.products);
      setIsLoading(false);
    };
    
    const timer = setTimeout(loadData, 100);
    return () => clearTimeout(timer);
  }, []);

  const {
    displayedProducts,
    filters,
    isFilterOpen,
    showMore,
    setShowMore,
    toggleFilter,
    handleSearch,
    toggleFilterItem,
    resetFilters,
    hasMoreProducts,
    isMobileFiltersOpen,
    toggleMobileFilters,
    handlePriceFilter,
    totalFilteredProducts
  } = useProducts(initialData);

  // Wrap the search handler with useTransition
  const handleSearchWithTransition = (query) => {
    startTransition(() => {
      handleSearch(query);
    });
  };

  // Handle initial filter
  useEffect(() => {
    const initialFilter = localStorage.getItem('initialFilter');
    if (initialFilter) {
      toggleFilterItem('categories', initialFilter);
      localStorage.removeItem('initialFilter'); // Clear the stored filter
    }
  }, [toggleFilterItem]);

  // Determine if there are actually more products to show
  const shouldShowMoreButton = hasMoreProducts && displayedProducts.length < totalFilteredProducts;

  return (
    <div className="max-w-7xl md:mt-14 mx-auto px-4 py-8 relative">
      <Navbar />

      {/* Loading Overlay */}
      {(isPending || isLoading) && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Loader2 className="w-12 h-12 animate-spin text-orange-700" />
            <p className="mt-2 text-gray-700 font-medium">
              {isPending ? "Searching products..." : "Loading products..."}
            </p>
          </div>
        </div>
      )}

      <div className="md:mt-14 md:hidden mt-10 mb-4">
        <button
          onClick={toggleMobileFilters}
          className="w-full py-2 px-4 bg-orange-950 hover:bg-orange-800 text-white rounded-lg flex items-center justify-center gap-2"
        >
          <Menu className="w-5 h-5" />
          Select preferences
        </button>
      </div>

      <SearchBar
        searchQuery={filters.searchQuery}
        handleSearch={handleSearchWithTransition}
        isSearching={isPending}
      />

      <div className="flex flex-col md:flex-row gap-8">
        {/* Mobile Filters */}
        {isMobileFiltersOpen && (
          <div className="md:hidden fixed top-0 left-0 w-1/2 h-full z-40 bg-white shadow-lg">
            <div className="p-4 pt-7 overflow-hidden">
              <button
                onClick={toggleMobileFilters}
                className="mb-4  text-gray-500"
              >
                ✕ Close
              </button>
              <Filters
                filters={filters}
                isFilterOpen={isFilterOpen}
                toggleFilter={toggleFilter}
                toggleFilterItem={toggleFilterItem}
                resetFilters={resetFilters}
                handlePriceFilter={handlePriceFilter}
              />
            </div>
          </div>
        )}
        
        {/* Desktop Filters */}
        <div className="hidden md:block">
          <Filters
            filters={filters}
            isFilterOpen={isFilterOpen}
            toggleFilter={toggleFilter}
            toggleFilterItem={toggleFilterItem}
            resetFilters={resetFilters}
            handlePriceFilter={handlePriceFilter}
          />
        </div>
        
        <div className="flex-1">
          <ProductGrid products={displayedProducts} />
          
          {shouldShowMoreButton && (
            <button
              onClick={() => setShowMore(true)}
              className="mt-8 w-full py-3 px-4 border bg-orange-950 text-white rounded-lg text-center font-medium hover:bg-orange-800"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}