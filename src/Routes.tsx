import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Adm } from "./pages/AdmPanel";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Products from "./pages/products";
import Produto from "./pages/Produto";
import Cadastro from "./pages/Cadastro";

export function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Produto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
