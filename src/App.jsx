import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createRouter({ routeTree });
const queryClient = new QueryClient();

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
