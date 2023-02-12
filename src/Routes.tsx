import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Products from "./pages/products";

export function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
