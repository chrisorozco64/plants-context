import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existing = cart.find((item) => item.id === plant.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
    console.log(existing);
  };

  const removeFromCart = (plant) => {
    if (plant.id === 0) {
      setCart(cart.filter((item) => item.id !== plant.id));
    } else {
      setCart(
        cart
          .map((item) =>
            item.id === plant.id
              ? { ...item, quantity: (item.quantity || 1) - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
    console.log(plant);
  };

  const value = {
    cart,
    setCart,
    addToCart,
    removeFromCart
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) 
    throw Error("useCart must be used within a CartProvider");
  return context;
}