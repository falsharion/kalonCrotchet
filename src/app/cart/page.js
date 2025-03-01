"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Navbar from "../component/Navbar";
import EmptyCart from "../component/EmptyCart";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
        <Navbar />
      <h1 className="text-2xl mt-14 font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="flex flex-col space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 border p-4 rounded"
              >
                {/* Product Image */}
                <div className="w-24 h-24 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    Size: {item.selectedSize} | Color: {item.selectedColor}
                  </p>
                  <p className="text-gray-600">
                    Price: ₦{item.price.toLocaleString()}
                  </p>
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity <= 1}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity + 1
                        )
                      }
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price and Remove */}
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() =>
                      removeFromCart(item.id, item.selectedSize, item.selectedColor)
                    }
                    className="mt-2 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Total Price */}
          <div className="mt-8 text-right">
            <p className="text-2xl font-bold">
              Total: ₦{totalPrice.toLocaleString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
