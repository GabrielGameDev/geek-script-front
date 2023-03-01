import React from "react";
import * as FC from './Cart.styles'


export const CartContent: React.FC = () => {
    return (
        <FC.Grid>
            <FC.ContentBox gridArea="a" gridFractionRows="1fr 1fr 2fr">
                <FC.StyledH3>Your Cart</FC.StyledH3>
                <FC.StyledP>Not ready to checkout? <a>continue shopping</a></FC.StyledP>
                <FC.ContentBox gridFractionColumns="0.5fr 1fr" >
                    <FC.StyledImg />
                    <FC.ContentBox gridFractionRows="1fr 1fr 1fr 1fr" height="70px" justifyContent="left">
                        <FC.StyledH5>Nome do produto</FC.StyledH5>
                        <FC.StyledP>categoria</FC.StyledP>
                        <FC.StyledP>Quantidade: </FC.StyledP>
                        <FC.StyledH5>Preço</FC.StyledH5>
                    </FC.ContentBox>

                </FC.ContentBox>
            </FC.ContentBox>
            <FC.ContentBox gridArea="b">
                <FC.StyledForm>
                    <FC.StyledH4>Resumo do pedido</FC.StyledH4>
                    <FC.StyledInput placeholder="Cupom de desconto"></FC.StyledInput>
                    <FC.ContentBox displayContent="flex" justifyContent="space-between" width="180px"> 
                        <FC.StyledP>Subtotal</FC.StyledP>
                        <FC.StyledP>R$00,00</FC.StyledP>
                    </FC.ContentBox>
                    <FC.StyledP>Frete</FC.StyledP>
                    <FC.StyledP>Total</FC.StyledP>
                    <FC.StyledButton href="http://localhost:5173/checkout">Seguir para o checkout</FC.StyledButton>
                </FC.StyledForm>
            </FC.ContentBox>
        </FC.Grid>

    )
}