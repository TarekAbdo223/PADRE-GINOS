import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { CartContext } from "../contexts";
import { useState } from "react";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Headers from "../Headers";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Headers />
            {/* <Order /> */}
            <Outlet />
            {/* the outlet is the changing component in the screen os it maybe be order or any other page */}
            <PizzaOfTheDay />
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools />
        <ReactQueryDevtools />
      </>
    );
  },
});
