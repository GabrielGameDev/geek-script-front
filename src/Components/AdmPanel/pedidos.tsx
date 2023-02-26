import React from "react";
import * as FC from './AdmPanel.styles'

export const AdmPedidos: React.FC = () => {
    return (
        <FC.Grid>
            <FC.StyledUl>
            <FC.StyeledA href="http://localhost:5173/adm"><FC.StyledLi>Produtos</FC.StyledLi></FC.StyeledA>
            <FC.StyeledA href="http://localhost:5173/adm/users"><FC.StyledLi>Usuários</FC.StyledLi></FC.StyeledA>
            <FC.StyeledA href="http://localhost:5173/adm/pedidos"><FC.StyledLi>Pedidos</FC.StyledLi></FC.StyeledA>
            </FC.StyledUl>
            <FC.ContentBox>
                <FC.StyledH1>Painel Administrativo</FC.StyledH1>
                <FC.StyledH4 gridArea="c">Número do pedido</FC.StyledH4>
                <FC.StyledH4 gridArea="d">Cliente</FC.StyledH4>
                <FC.StyledH4 gridArea="e">Valor</FC.StyledH4>
                <FC.StyledH4 gridArea="f">Itens</FC.StyledH4>
                <FC.StyledH4 gridArea="g">Quantidade</FC.StyledH4>
                
            </FC.ContentBox>
        </FC.Grid>

    )
}