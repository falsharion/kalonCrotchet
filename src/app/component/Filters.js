
import { RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
export const Filters = ({
    filters,
    isFilterOpen,
    toggleFilter,
    toggleFilterItem,
    handlePriceFilter,
    resetFilters
}) => {
    return (
        <div className="w-full md:w-64 flex-shrink-0">
            <div className="space-y-6">
                {/* Categories */}
                <div className="border-b pb-4">
                    <button
                        onClick={() => toggleFilter('categories')}
                        className="flex justify-between items-center w-full font-medium"
                    >
                        <span>Categories</span>
                        {isFilterOpen.categories ? 
                            <ChevronUp className="w-4 h-4 ml-2" /> : 
                            <ChevronDown className="w-4 h-4 ml-2" />
                        }
                    </button>
                    {isFilterOpen.categories && (
                        <div className="mt-2 space-y-2">
                            {['tops', 'skirts', 'dresses', 'bottoms', 'accessories'].map(category => (
                                <label key={category} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={filters.categories.includes(category)}
                                        onChange={() => toggleFilterItem('categories', category)}
                                        className="mr-2"
                                    />
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sizes */}
                <div className="border-b pb-4">
                    <button
                        onClick={() => toggleFilter('size')}
                        className="flex justify-between items-center w-full font-medium"
                    >
                        <span>Size</span>
                        {isFilterOpen.size ? 
                            <ChevronUp className="w-4 h-4 ml-2" /> : 
                            <ChevronDown className="w-4 h-4 ml-2" />
                        }
                    </button>
                    {isFilterOpen.size && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {['S', 'M', 'L', 'XL'].map(size => (
                                <button
                                    key={size}
                                    onClick={() => toggleFilterItem('sizes', size)}
                                    className={`px-3 py-1 border rounded ${filters.sizes.includes(size)
                                            ? 'bg-gray-900 text-white'
                                            : 'bg-white text-gray-900'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Colors */}
                <div className="border-b pb-4">
                    <button
                        onClick={() => toggleFilter('color')}
                        className="flex justify-between items-center w-full font-medium"
                    >
                        <span>Color</span>
                        {isFilterOpen.color ? 
                            <ChevronUp className="w-4 h-4 ml-2" /> : 
                            <ChevronDown className="w-4 h-4 ml-2" />
                        }
                    </button>
                    {isFilterOpen.color && (
                        <div className="mt-2 flex flex-wrap gap-2">
                            {['black', 'white', 'blue', 'orange'].map(color => (
                                <button
                                    key={color}
                                    onClick={() => toggleFilterItem('colors', color)}
                                    className={`w-6 h-6 rounded-full border ${filters.colors.includes(color) ? 'ring-2 ring-offset-2 ring-gray-900' : ''
                                        }`}
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {/* Price Filter */}
                <div className="border-b pb-4">
                    <button
                        onClick={() => toggleFilter('price')}
                        className="flex justify-between items-center w-full font-medium"
                    >
                        <span>Price</span>
                        {isFilterOpen.price ? 
                            <ChevronUp className="w-4 h-4 ml-2" /> : 
                            <ChevronDown className="w-4 h-4 ml-2" />
                        }
                    </button>
                    {isFilterOpen.price && (
                        <div className="mt-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={filters.priceRange === 'low'}
                                    onChange={(e) =>
                                        handlePriceFilter(e.target.checked ? 'low' : '')
                                    }
                                    className="mr-2"
                                />
                                Show lowest price
                            </label>
                        </div>
                    )}
                </div>
            </div>
            {(filters.categories.length > 0 || filters.sizes.length > 0 || filters.colors.length > 0) && (
                <button
                    onClick={resetFilters}
                    className="mt-4 flex items-center text-sm text-gray-600 hover:text-gray-900"
                >
                    <RotateCcw className="w-4 h-4 mr-1" />
                    Reset Filters
                </button>
            )}
        </div>
    );
};