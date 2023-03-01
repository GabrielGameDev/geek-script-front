import React from "react";
import * as FC from './Profile.styles'

export const ProfileContent: React.FC = () => {
    return (
        <FC.Grid>
            <FC.StyledDiv>
                <FC.StyledP>Sobre</FC.StyledP>
                <FC.StyledForm>
                    <FC.StyledLabel>Nome do usuário</FC.StyledLabel>
                    <FC.StyledInput value={'Nome do usuário'}></FC.StyledInput>
                    <FC.StyledLabel>Email</FC.StyledLabel>
                    <FC.StyledInput value={'Email do usuário'}></FC.StyledInput>
                    <FC.StyledLabel>Meu pedidos</FC.StyledLabel>
                    <FC.StyledA href="http://localhost:5173/pedidos">Clique aqui</FC.StyledA>
                </FC.StyledForm>
            </FC.StyledDiv>
        </FC.Grid>
    )
}