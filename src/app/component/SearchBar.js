import { Search, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const SearchBar = ({ searchQuery, handleSearch, isSearching }) => {
  const inputRef = useRef(null);
  
  // Keep focus on the input when updating
  useEffect(() => {
    if (inputRef.current && document.activeElement === inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearching]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  return (
    <div className="relative mb-8">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full p-3 pl-12 border rounded-lg"
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        {isSearching ? (
          <Loader2 className="animate-spin" />
        ) : (
          <Search />
        )}
      </div>
    </div>
  );
};