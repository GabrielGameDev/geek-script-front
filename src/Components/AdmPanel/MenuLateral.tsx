import React from "react";
import * as FC from './AdmPanel.styles'


export const MenuLateral: React.FC = () => {
    return (
<FC.StyledUl>
    <FC.StyeledA href="http://localhost:5173/adm"><FC.StyledLi>Produtos</FC.StyledLi></FC.StyeledA>
    <FC.StyeledA href="http://localhost:5173/adm/users"><FC.StyledLi>Usuários</FC.StyledLi></FC.StyeledA>
    <FC.StyeledA href="http://localhost:5173/adm/pedidos"><FC.StyledLi>Pedidos</FC.StyledLi></FC.StyeledA>
    <FC.StyeledA href="http://localhost:5173/adm/categorias"><FC.StyledLi>Categorias</FC.StyledLi></FC.StyeledA>
</FC.StyledUl>)
}