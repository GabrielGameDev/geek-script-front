import React from "react";
import * as FC from './LoginContent.styles'


export const LoginContent: React.FC = () => {
    return (
           <FC.Grid>
            <FC.StyledForm>
                <FC.StyledH1>Seja bem-vindo</FC.StyledH1>
                <FC.StyledP>Faça login com seu e-mail</FC.StyledP>
                <FC.StyledInput placeholder="Email Adress"></FC.StyledInput>
                <FC.StyledInput placeholder="Senha"></FC.StyledInput>
                <FC.StyledDiv>
                <label><FC.StyledInput type="checkbox"></FC.StyledInput>Lembre de mim</label>
                <FC.StyledLink>Esqueceu a senha ?</FC.StyledLink>
                </FC.StyledDiv>            
            </FC.StyledForm>
            </FC.Grid>
    )

}