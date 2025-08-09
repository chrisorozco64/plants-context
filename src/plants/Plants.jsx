import AddPlant from "./AddPlant";

export default function Plants({ plants, addToCart }) {
  return (
    <div className = "Plants">
        <h2>Plants</h2>
        <ul>
            {plants.map((plant) => (
      <li 
        key={plant.id}
        >
            <p className = "image">{plant.image}</p>
        <h3>{plant.name}</h3>
        <AddPlant addToCart={addToCart} plant={plant}/>
      </li>
    ))}
    </ul>
    </div>
  )
}
