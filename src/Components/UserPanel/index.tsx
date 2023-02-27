import React from "react";
import * as FC from './UserPanel.styles'
import {theme} from '../Theme/Theme'

export const UserPedidos: React.FC = () => {
    return (
        <FC.Box>
                <FC.StyledH1> -- Meus Pedidos -- </FC.StyledH1>

            <FC.ContentBox>
                <FC.StyledH4 textColor={theme.colors.Accent}>Número do pedido</FC.StyledH4>
                <FC.StyledH4 textColor={theme.colors.Accent}>Cliente</FC.StyledH4>
                <FC.StyledH4 textColor={theme.colors.Accent}>Valor</FC.StyledH4>
                <FC.StyledH4 textColor={theme.colors.Accent}>Itens</FC.StyledH4>
                <FC.StyledH4 textColor={theme.colors.Accent}>Quantidade</FC.StyledH4>
            </FC.ContentBox>
            <FC.ContentBox>
                <FC.StyledP >1</FC.StyledP>
                <FC.StyledP >João</FC.StyledP>
                <FC.StyledP >100</FC.StyledP>
                <FC.StyledP >Homem aranha</FC.StyledP>
                <FC.StyledP >1</FC.StyledP>
            </FC.ContentBox>
            <FC.ContentBox>
                <FC.StyledP >2</FC.StyledP>
                <FC.StyledP >José</FC.StyledP>
                <FC.StyledP >200</FC.StyledP>
                <FC.StyledP >Dragon Ball Z</FC.StyledP>
                <FC.StyledP >2</FC.StyledP>
            </FC.ContentBox>
            <FC.ContentBox>
                <FC.StyledP >3</FC.StyledP>
                <FC.StyledP >Maria</FC.StyledP>
                <FC.StyledP >300</FC.StyledP>
                <FC.StyledP >Camisetas</FC.StyledP>
                <FC.StyledP >10</FC.StyledP>
            </FC.ContentBox>
        </FC.Box>

    )
}