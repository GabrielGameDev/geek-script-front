import React from "react";
import * as FC from './Cart.styles'


export const CartContent: React.FC = () => {
    return (
        <FC.Grid>
            <FC.ContentBox gridArea="a" gridFractionRows="1fr 1fr 2fr">
                <FC.StyledH3>Your Cart</FC.StyledH3>
                <a>Not ready to checkout? continue shopping</a>
                <FC.ContentBox gridFractionColumns="1fr 1fr" >
                    <FC.StyledImg />
                    <FC.ContentBox gridFractionRows="1fr 1fr 1fr 1fr" height="70px">
                        <FC.StyledH5>Nome do produto</FC.StyledH5>
                        <FC.StyledP>categoria</FC.StyledP>
                        <FC.StyledP>categoria</FC.StyledP>
                        <FC.StyledH5>Preço</FC.StyledH5>
                    </FC.ContentBox>

                </FC.ContentBox>
            </FC.ContentBox>
            <FC.ContentBox gridArea="b">Hello, World</FC.ContentBox>
            <FC.ContentBox gridArea="c">Hello, World</FC.ContentBox>
            <FC.ContentBox gridArea="d">Hello, World</FC.ContentBox>
        </FC.Grid>

    )
}