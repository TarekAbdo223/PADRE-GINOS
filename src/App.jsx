import Order from "./Order";
import Pizza from "./Pizza";
import PizzaOfTheDay from "./PizzaOfTheDay";

function App() {
  return (
    <div>
      <h1 className="logo">Padre Gino's Pizza – Order Now</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  );
}

export default App;
