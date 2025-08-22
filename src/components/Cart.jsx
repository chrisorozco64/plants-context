import { useCart } from "./CartProvider";
 
export default function Cart() {
  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <>
        <div>
        <h2>Cart</h2>
{(!cart || cart.length === 0) ? (
    <p>Your cart is empty.</p>
) : (
<div className="cart"> 
    {cart.map((plant) => (
        <div key={plant.id}>
            <p>{plant.image} {plant.name}</p>
            <div className="cart-buttons">
                <button onClick={() => removeFromCart(plant)}>-</button>
                <p>{plant.quantity}</p>
                <button onClick={() => addToCart(plant)}>+</button>
            </div>
        </div>
    ))}
</div>
)}
        </div>
    </>
  );
}
