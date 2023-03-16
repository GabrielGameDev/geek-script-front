import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import {
  AdmCategories,
  AdmOrders,
  AdmProducts,
  AdmUsers,
} from "./pages/AdmPanel";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import Products from "./pages/products";
import Produto from "./pages/Produto";
import { CheckoutCart } from "./pages/CartCheckout";
import Cadastro from "./pages/Cadastro";
import { SucessCheck } from "./pages/Sucesso";
import { Profile } from "./pages/Profile";
import { UserOrders } from "./pages/UserPanel";
import { UpdateProductPage } from "./pages/UpdateProduct";
import { UpdateUserPage } from "./pages/UpdateUser";

export function Routes() {
  return (
    <BrowserRouter>
      <WrapperRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Produto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adm" element={<AdmProducts />} />
        <Route path="/adm/users" element={<AdmUsers />} />
        <Route path="/adm/pedidos" element={<AdmOrders />} />
        <Route path="/adm/categorias" element={<AdmCategories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutCart />} />
        <Route path="/sucesso" element={<SucessCheck />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/pedidos" element={<UserOrders />} />
        <Route path="/update/:id" element={<UpdateProductPage />} />
        <Route path="/updateUser/:id" element={<UpdateUserPage />} />
      </WrapperRoutes>
    </BrowserRouter>
  );
}
