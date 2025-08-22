import PLANTS from "./data"
import Plants from "./components/Plants";
import Cart from "./components/Cart";

export default function App() {
  return (
  <>
    <header>
      <h1>Proper Plants</h1>
    </header>
    <main>
      <Plants plants = {PLANTS}/>
      <Cart />
    </main>
  </>
  );
}
