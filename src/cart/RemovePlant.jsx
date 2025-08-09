export default function RemovePlant({ removeFromCart, plant }) {
  return (
    <button onClick={() => removeFromCart(plant)}>-</button>
  )
}
