import React from "react";
import * as FC from './AdmPanel.styles'


export const MenuLateral: React.FC = () => {
    return (
<FC.StyledUl>
    <FC.StyledA href="http://localhost:5173/adm"><FC.StyledLi>Produtos</FC.StyledLi></FC.StyledA>
    <FC.StyledA href="http://localhost:5173/adm/users"><FC.StyledLi>Usuários</FC.StyledLi></FC.StyledA>
    <FC.StyledA href="http://localhost:5173/adm/pedidos"><FC.StyledLi>Pedidos</FC.StyledLi></FC.StyledA>
    <FC.StyledA href="http://localhost:5173/adm/categorias"><FC.StyledLi>Categorias</FC.StyledLi></FC.StyledA>
    <FC.StyledButton >Logout</FC.StyledButton>
</FC.StyledUl>)

}