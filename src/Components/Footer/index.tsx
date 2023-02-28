import React from "react";
import * as FC from './Footer.styles'

export const Footer: React.FC = () => {
    return (

        <FC.Grid>
            <FC.ContentBox>
                <FC.StyledH1 textAlign="center">Assine a nossa Newsletter</FC.StyledH1>
                <FC.StyledP>seja o primeiro a receber as novidades da loja, fique por dentro de tudo.</FC.StyledP>
                <FC.StyledForm>
                    
                    <FC.StyledInput placeholder="Email Adress" />

                    <FC.StyledButton type="submit">Sign up</FC.StyledButton>
                    
                </FC.StyledForm>

            </FC.ContentBox>
            <FC.ContentBox >
                <FC.StyledUl>
                    <FC.StyledH1>Shop</FC.StyledH1>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                </FC.StyledUl>
            </FC.ContentBox>
            <FC.ContentBox >
                <FC.StyledH1>Help</FC.StyledH1>
                <FC.StyledUl>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                </FC.StyledUl>

            </FC.ContentBox>
            <FC.ContentBox >
                <FC.StyledH1 >Contact</FC.StyledH1>
                <FC.StyledUl>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                    <FC.StyledLi>teste</FC.StyledLi>
                </FC.StyledUl>
            </FC.ContentBox>


        </FC.Grid>

    )

}


