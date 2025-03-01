"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // If the same product (with same options) is added again, update its quantity.
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex(
        (i) =>
          i.id === item.id &&
          i.selectedSize === item.selectedSize &&
          i.selectedColor === item.selectedColor
      );
      if (index !== -1) {
        // Increase the quantity if the item already exists.
        const newItems = [...prevItems];
        newItems[index].quantity += 1;
        return newItems;
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove an item from the cart based on its id and options.
  const removeFromCart = (id, selectedSize, selectedColor) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (i) =>
          !(i.id === id && i.selectedSize === selectedSize && i.selectedColor === selectedColor)
      )
    );
  };

  // Update the quantity of an existing cart item.
  const updateQuantity = (id, selectedSize, selectedColor, quantity) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems];
      const index = newItems.findIndex(
        (i) =>
          i.id === id &&
          i.selectedSize === selectedSize &&
          i.selectedColor === selectedColor
      );
      if (index !== -1 && quantity >= 1) {
        newItems[index].quantity = quantity;
      }
      return newItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
