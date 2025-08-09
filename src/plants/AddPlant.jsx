export default function AddPlant({ addToCart, plant }) {
  return (
    <button className="plant-button" onClick={() => addToCart(plant)}>
      Add to Cart
    </button>
  );
}
