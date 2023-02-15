import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import Products from "./pages/products";
import Produto from "./pages/Produto";

export function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Produto />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
