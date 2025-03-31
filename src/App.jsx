import { useState } from "react";
import { CartContext } from "./contexts";
import Headers from "./Headers";
import Order from "./Order";
import Pizza from "./Pizza";
import PizzaOfTheDay from "./PizzaOfTheDay";

function App() {
  const cartHook = useState([]);

  return (
    <div>
      <CartContext.Provider value={cartHook}>
        <Headers />
        <Order />
        <PizzaOfTheDay />
      </CartContext.Provider>
    </div>
  );
}

export default App;
