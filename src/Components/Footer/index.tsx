import React from "react";
import * as FC from './Footer.styles'
import logoGeek from '../../../Images/imageLogo.png'
import iconCart from '../../../Images/icon-cart.svg'

export const Footer: React.FC = () => {
    return (

        <FC.Grid>
            <FC.ContentBox gridArea="a">
                <FC.StyledH1>Assine a nossa Newsletter</FC.StyledH1>
                <FC.StyledP>seja o primeiro a receber as novidades da loja, fique por dentro de tudo</FC.StyledP>


            </FC.ContentBox>
            <FC.ContentBox gridArea="b"></FC.ContentBox>
            <FC.ContentBox gridArea="c"></FC.ContentBox>
            <FC.ContentBox gridArea="d"></FC.ContentBox>


        </FC.Grid>
            
    )

}


