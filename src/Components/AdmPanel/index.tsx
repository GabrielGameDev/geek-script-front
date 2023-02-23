import React from "react";
import * as FC from './AdmPanel.styles'

export const AdmContent: React.FC = () => {
    return (
        <FC.Grid>
            <FC.StyledUl>
                <FC.StyledLi>Produtos</FC.StyledLi>
                <FC.StyledLi>Clientes</FC.StyledLi>
                <FC.StyledLi>Administradores</FC.StyledLi>
                <FC.StyledLi>Pedidos</FC.StyledLi>
            </FC.StyledUl>
            <FC.ContentBox>
                <FC.StyledH1>Painel Administrativo</FC.StyledH1>
                <FC.StyledButton>Adicionar Produto</FC.StyledButton>
                <FC.StyledH4 gridArea="c">Nome</FC.StyledH4>
                <FC.StyledH4 gridArea="d">Email</FC.StyledH4>
                <FC.StyledH4 gridArea="e">ID</FC.StyledH4>
                <FC.StyledH4 gridArea="f">atração</FC.StyledH4>
                <FC.StyledH4 gridArea="g">ação</FC.StyledH4>
                
            </FC.ContentBox>
        </FC.Grid>

    )
}