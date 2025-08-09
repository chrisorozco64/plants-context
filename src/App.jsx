import PLANTS from "./data"
import { useState } from "react";
import Plants from "./plants/Plants";
import Cart from "./cart/Cart";

export default function App() {
  const [selectedCart, setSelectedCart] = useState([]);

const addToCart = (plant) => {
  const existing = selectedCart.find(item => item.id === plant.id);
  if (existing) {
    setSelectedCart(selectedCart.map(item =>
      item.id === plant.id
        ? { ...item, quantity: (item.quantity || 1) + 1 }
        : item
    ));
  } else {
    setSelectedCart([...selectedCart, { ...plant, quantity: 1 }]);
  }
      console.log(existing);

};

const removeFromCart = (plant) => {
  if (plant.id === 0) {
    setSelectedCart(selectedCart.filter(item => item.id !== plant.id));
  }
  else {
    setSelectedCart(selectedCart.map(item =>
      item.id === plant.id
        ? { ...item, quantity: (item.quantity || 1) - 1 }
        : item
    ).filter(item => item.quantity > 0));
  }
  console.log(plant);
}
  
  return (
  <>
    <header>
      <h1>Proper Plants</h1>
    </header>
    <main>
      <Plants plants = {PLANTS} cart = {selectedCart} addToCart={addToCart}/>
      <Cart cart = {selectedCart} addToCart = {addToCart} removeFromCart={removeFromCart}/>
    </main>
  </>
  );
}
