"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clothingDB from "../../constants/clothingDB";
import { useCart } from "../../context/CartContext";
import Navbar from "../../component/Navbar";
import { ShoppingCartIcon, ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Noproduct from "../../component/Noproduct"

const ProductDetail = () => {
  const params = useParams();
  const router = useRouter();
  const productId = parseInt(params.id, 10);

  const product = clothingDB.products.find((p) => p.id === productId);
  if (!product) {
    return <Noproduct />;
  }

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showBanner, setShowBanner] = useState(false);
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const otherProducts = clothingDB.products.filter((p) => p.id !== productId);
  
  const [showModal, setShowModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const [modalSelectedSize, setModalSelectedSize] = useState("");
  const [modalSelectedColor, setModalSelectedColor] = useState("");
  const [showModalError, setShowModalError] = useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      setShowErrorBanner(true);
      setTimeout(() => setShowErrorBanner(false), 3500);
      return;
    }

    addToCart({ ...product, selectedSize, selectedColor });
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    }
  };

  const handleModalAddToCart = () => {
    if (!modalSelectedSize || !modalSelectedColor) {
      setShowModalError(true);
      setTimeout(() => setShowModalError(false), 4000);
      return;
    }

    addToCart({
      ...modalProduct,
      selectedSize: modalSelectedSize,
      selectedColor: modalSelectedColor,
    });
    
    setShowBanner(true);
    setTimeout(() => setShowBanner(false), 3000);
    setShowModal(false);
    
    // Reset modal selections for next time
    setModalSelectedSize("");
    setModalSelectedColor("");
    setShowModalError(false);
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, otherProducts.length));
  };

  const openQuickAddModal = (product) => {
    setModalProduct(product);
    setModalSelectedSize("");
    setModalSelectedColor("");
    setShowModalError(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalSelectedSize("");
    setModalSelectedColor("");
    setShowModalError(false);
  };

  const ProductCard = ({ product }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute top-2 right-2">
            <div className="bg-white px-2 py-1 rounded-full shadow-md">
              <span className="text-sm font-medium text-amber-900">
                ₦{product.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h3 className="font-bold text-base mb-1 text-gray-800 truncate">{product.name}</h3>
          <div className="space-y-1 mb-3">
            <p className="text-xs text-gray-600">
              <span className="font-medium">Colors:</span> {product.color.join(", ")}
            </p>
          </div>

          <div className="flex space-x-2">
            <Link href={`/product/${product.id}`} className="flex-1">
              <button className="w-full bg-amber-900 text-white px-3 py-1.5 rounded hover:bg-amber-800 transition-colors text-sm">
                View
              </button>
            </Link>
            <button
              onClick={() => openQuickAddModal(product)}
              className="flex-2 md:flex-1 bg-amber-100 text-amber-900 px-3 py-1.5 rounded hover:bg-amber-200 transition-colors text-sm"
            >
              <span className="block w-5 h-5 text-center md:hidden">
                <ShoppingCartIcon className="w-5 h-5"/>
              </span>
              <span className="hidden md:inline">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 relative">
      {showBanner && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Item added to cart!
        </div>
      )}

      {/* Error Banner */}
      {showErrorBanner && (
        <div className="fixed top-0 left-0 w-full bg-amber-900 text-white px-4 py-3 shadow-lg z-50 flex justify-center animate-slideIn">
          Please select both size and color before adding to cart
        </div>
      )}

      {/* Quick Add Modal */}
      {showModal && modalProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] relative">
      {showModalError && (
        <div className="absolute top-0 left-0 right-0 bg-amber-900 text-white px-4 py-2 text-center rounded-t-lg z-10">
          Please select both size and color
        </div>
      )}
      
      {/* Modal Header with close button */}
      <div className={`flex justify-between items-center p-4 border-b ${showModalError ? 'mt-10' : ''}`}>
        <h3 className="font-bold text-lg text-amber-900">Quick Add to Cart</h3>
        <button 
          onClick={closeModal}
          className="text-gray-500 hover:text-amber-900"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>
      </div>
      
      <div className="p-4 overflow-y-auto" style={{ maxHeight: showModalError ? 'calc(90vh - 126px)' : 'calc(90vh - 70px)' }}>
        {/* Product Image and Details */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
            <Image
              src={modalProduct.image}
              alt={modalProduct.name}
              width={150}
              height={150}
              className="w-full h-auto object-cover rounded"
              priority
            />
          </div>
          
          <div className="w-full sm:w-1/2">
            <h3 className="font-bold text-lg">{modalProduct.name}</h3>
            <p className="text-lg font-semibold text-amber-900 ">
              ₦{modalProduct.price.toLocaleString()}
            </p>
                    {/* Size Selection */}
        <div className="mt-2">
          <p className="font-medium mb-2">Select Size:</p>
          <div className="flex flex-wrap gap-2">
            {modalProduct.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setModalSelectedSize(size)}
                className={`px-3 py-1 border rounded ${
                  modalSelectedSize === size ? "bg-amber-900 text-white" : "bg-white text-amber-900"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        
        {/* Color Selection */}
        <div className="mt-4">
          <p className="font-medium mb-2">Select Color:</p>
          <div className="flex flex-wrap gap-2">
            {modalProduct.color.map((clr) => (
              <button
                key={clr}
                onClick={() => setModalSelectedColor(clr)}
                className={`px-3 py-1 border rounded ${
                  modalSelectedColor === clr ? "bg-amber-900 text-white" : "bg-white text-amber-900"
                }`}
              >
                {clr}
              </button>
            ))}
          </div>
        </div>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <div className="mt-6">
          <button
            onClick={handleModalAddToCart}
            className="w-full bg-amber-900 text-white py-3 rounded hover:bg-amber-800 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      <Navbar />

      {/* Back Icon */}
      <div className="mt-14">
        <button
          onClick={() => router.back()}
          className="flex items-center text-amber-900 hover:text-amber-800"
        >
          <ArrowLeftIcon className="h-6 w-6 mr-2" />
          Back
        </button>
      </div>

      <div className="flex md:mx-6 flex-col pt-5 md:flex-row gap-9 mb-12">
        {/* Product Image */}
        <div className="w-full flex justify-center items-center md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-amber-900 mb-4">
            ₦{product.price.toLocaleString()}
          </p>
          <p className="mb-4">
            <span className="font-medium">Stitch Pattern:</span> {product.stitchPattern}
          </p>

          {/* Sizes */}
          <div className="mb-6">
            <p className="font-medium mb-2">Available Sizes:</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size ? "bg-amber-900 text-white" : "bg-white text-amber-900"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-6">
            <p className="font-medium mb-2">Available Colors:</p>
            <div className="flex flex-wrap gap-2">
              {product.color.map((clr) => (
                <button
                  key={clr}
                  onClick={() => setSelectedColor(clr)}
                  className={`px-4 py-2 border rounded ${
                    selectedColor === clr ? "bg-amber-900 text-white" : "bg-white text-amber-900"
                  }`}
                >
                  {clr}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* More Products Section */}
      <div className="pt-8 md:mx-6">
        <h2 className="text-xl font-bold mb-6">More Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {otherProducts.slice(0, visibleCount).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
        {visibleCount < otherProducts.length && (
          <div className="mt-8 text-center">
            <button
              onClick={loadMore}
              className="bg-amber-900 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
            >
              Load More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
