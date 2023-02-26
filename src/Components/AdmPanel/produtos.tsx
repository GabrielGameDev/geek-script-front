import React from "react";
import * as FC from './AdmPanel.styles'

export const AdmProdutos: React.FC = () => {
    return (
        <FC.Grid>
            <FC.StyledUl>
            <FC.StyeledA href="http://localhost:5173/adm"><FC.StyledLi>Produtos</FC.StyledLi></FC.StyeledA>
            <FC.StyeledA href="http://localhost:5173/adm/users"><FC.StyledLi>Usuários</FC.StyledLi></FC.StyeledA>
            <FC.StyeledA href="http://localhost:5173/adm/pedidos"><FC.StyledLi>Pedidos</FC.StyledLi></FC.StyeledA>
            </FC.StyledUl>
            <FC.ContentBox>
                <FC.StyledH1>Painel Administrativo</FC.StyledH1>
                <FC.StyledButton>Adicionar Produto</FC.StyledButton>
                <FC.StyledH4 gridArea="c">Produto</FC.StyledH4>
                <FC.StyledH4 gridArea="d">Categoria</FC.StyledH4>
                <FC.StyledH4 gridArea="e">ID</FC.StyledH4>
                <FC.StyledH4 gridArea="f">Valor</FC.StyledH4>
                <FC.StyledH4 gridArea="g">Estoque</FC.StyledH4>
                
            </FC.ContentBox>
        </FC.Grid>

    )
}