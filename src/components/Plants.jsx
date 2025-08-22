import { useCart } from "./CartProvider";

export default function Plants({ plants }) {
  const {addToCart} = useCart();

  return (
    <div className="Plants">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <p className="image">{plant.image}</p>
            <h3>{plant.name}</h3>
            <button className="plant-button" onClick={() => addToCart(plant)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
