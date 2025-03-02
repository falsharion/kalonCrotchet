'use client'
import { useState, useEffect } from 'react';

export const useProducts = (initialData) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    sizes: [],
    colors: [],
    searchQuery: '',
    priceRange: '',
  });
  const [showMore, setShowMore] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState({
    select: false,
    categories: false,
    size: false,
    color: false,
    price: false,
  });
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  

  useEffect(() => {
    const initialFilter = localStorage.getItem('initialFilter');
    setProducts(initialData);
    
    if (initialFilter) {
      setFilters(prev => ({
        ...prev,
        categories: [initialFilter]
      }));
      localStorage.removeItem('initialFilter');
    }
  }, [initialData]);
  
  const toggleMobileFilters = () => {
    setIsMobileFiltersOpen(!isMobileFiltersOpen);
  };
  
  const toggleFilter = (filterName) => {
    setIsFilterOpen(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };
  
  const handlePriceFilter = (value) => {
    setFilters(prev => ({ ...prev, priceRange: value }));
  };
  
  const handleSearch = (query) => {
    setFilters(prev => ({ ...prev, searchQuery: query }));
    setShowMore(false); 
  };
  
  const toggleFilterItem = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  useEffect(() => {
    if (!products.length) return;
    
    let filtered = [...products];
    
    if (filters.searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }
    
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product =>
        filters.categories.includes(product.category)
      );
    }
    
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => filters.sizes.includes(size))
      );
    }
    
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product => {
        const productColors = Array.isArray(product.color)
          ? product.color
          : [product.color];
        return productColors.some(color =>
          filters.colors.includes(color)
        );
      });
    }
    
    if (filters.priceRange) {
      filtered = filtered.sort((a, b) => {
        return filters.priceRange === 'low' ? a.price - b.price : b.price - a.price;
      });
    }
    
    setFilteredProducts(filtered);
  }, [filters, products]);
  

  useEffect(() => {
    setDisplayedProducts(showMore ? filteredProducts : filteredProducts.slice(0, 10));
  }, [filteredProducts, showMore]);
  
  const resetFilters = () => {
    setFilters({
      categories: [],
      sizes: [],
      colors: [],
      searchQuery: '',
      priceRange: '',
    });
    setShowMore(false);
  };
  
  const totalFilteredProducts = filteredProducts.length;
  const hasMoreProducts = filteredProducts.length > displayedProducts.length;
  
  return {
    displayedProducts,
    filteredProducts,
    totalFilteredProducts,
    filters,
    isFilterOpen,
    showMore,
    setShowMore,
    toggleFilter,
    handleSearch,
    toggleFilterItem,
    resetFilters,
    isMobileFiltersOpen,
    toggleMobileFilters,
    handlePriceFilter,
    hasMoreProducts
  };
};