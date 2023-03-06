import React from "react";
import * as FC from "./AdmPanel.styles";
import { useEffect } from "react";

export const MenuLateral: React.FC = () => {
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.href = "/";
  }

  useEffect(() => {
    const newUser = localStorage.getItem("user");
    if (!newUser) {
      window.location.href = "/";
    }
  }, []);

  return (
    <FC.StyledUl>
      <FC.StyledA href="/adm">
        <FC.StyledLi>Produtos</FC.StyledLi>
      </FC.StyledA>
      <FC.StyledA href="/adm/users">
        <FC.StyledLi>Usuários</FC.StyledLi>
      </FC.StyledA>
      <FC.StyledA href="/adm/pedidos">
        <FC.StyledLi>Pedidos</FC.StyledLi>
      </FC.StyledA>
      <FC.StyledA href="/adm/categorias">
        <FC.StyledLi>Categorias</FC.StyledLi>
      </FC.StyledA>
      <FC.StyledButton onClick={handleLogout}>Logout</FC.StyledButton>
    </FC.StyledUl>
  );
};
