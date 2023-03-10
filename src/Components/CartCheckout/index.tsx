import React from "react";
import * as FC from './CartCheckout.styles'
import * as CC from '../Cart/Cart.styles'
import { Grid } from "../AA/grid.styles";
import * as Tema from '../Theme/Theme'


export const Checkout: React.FC = () => {
    return (
        <Grid gridSize="repeat(2, 1fr)" bgColor={Tema.theme.colors.White}>

            <CC.ContentBox  gridFractionRows="repeat (5, 1fr)">
                <CC.StyledH4>CHECKOUT</CC.StyledH4>
                <CC.StyledP>Adress ------- Shipping ------- Payment</CC.StyledP>
                <FC.StyledLabel>
                    <FC.StyledInput marginX='0px' type="radio" name="option">
                    </FC.StyledInput>  Sedex
                </FC.StyledLabel>
                <FC.StyledLabel>
                    <FC.StyledInput marginX='0px' type="radio" name="option" >
                    </FC.StyledInput>  Correios
                </FC.StyledLabel>
                <CC.StyledButton>Continue to payment</CC.StyledButton>
            </CC.ContentBox>

            <CC.ContentBox  gridFractionRows="1fr 1fr 2fr">
                <CC.StyledH3>Your Cart</CC.StyledH3>
                <CC.StyledP>Not ready to checkout? <a>continue shopping</a></CC.StyledP>
                <CC.ContentBox gridFractionColumns="0.5fr 1fr" >
                    <CC.StyledImg />
                    <CC.ContentBox gridFractionRows="1fr 1fr 1fr 1fr" height="70px" justifyContent="left">
                        <CC.StyledH5>Nome do produto</CC.StyledH5>
                        <CC.StyledP>categoria</CC.StyledP>
                        <CC.StyledP>Quantidade: </CC.StyledP>
                        <CC.StyledH5>Preço</CC.StyledH5>
                    </CC.ContentBox>

                </CC.ContentBox>
            </CC.ContentBox>
        </Grid>

    )
}