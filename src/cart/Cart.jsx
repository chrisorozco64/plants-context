import RemovePlant from './RemovePlant';

export default function Cart({ cart, addToCart, removeFromCart }) {
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
                <RemovePlant removeFromCart={removeFromCart} plant={plant} />
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
