import React from "react";
import * as FC from './LoginContent.styles'


export const LoginContent: React.FC = () => {
    return (
        <FC.Grid>
            <FC.StyledDiv>
                <FC.StyledForm>
                    <FC.StyledH1>Seja bem-vindo</FC.StyledH1>
                    <FC.StyledP>Faça login com seu e-mail</FC.StyledP>
                    <FC.StyledInput placeholder="Email Adress"></FC.StyledInput>
                    <FC.StyledInput placeholder="Senha"></FC.StyledInput>
                    <FC.StyledDivForm>
                        <FC.StyledLabel><FC.StyledInput marginX='0px' type="checkbox"></FC.StyledInput>  Lembre de mim</FC.StyledLabel>
                        <FC.StyledLink>Esqueceu a senha ?</FC.StyledLink>
                    </FC.StyledDivForm>
                </FC.StyledForm>
                <FC.StyledLink colorLink="Gray">ou crie uma conta</FC.StyledLink>
            </FC.StyledDiv>
        </FC.Grid>
    )

}