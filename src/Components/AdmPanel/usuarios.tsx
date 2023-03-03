import React from "react";
import * as FC from './AdmPanel.styles'
import { MenuLateral } from "./MenuLateral";

export const AdmUsuarios: React.FC = () => {
    return (
        <FC.Grid>
            <MenuLateral />
            <FC.ContentBoxRow>
                <div><FC.StyledH1>Painel Administrativo</FC.StyledH1></div>
                <FC.StyledForm>
                    <FC.StyledInput placeholder='Nome'></FC.StyledInput>
                    <FC.StyledInput placeholder='Email'></FC.StyledInput>
                    <FC.StyledInput placeholder='ID'></FC.StyledInput>
                    <FC.StyledInput placeholder='perfil'></FC.StyledInput>
                    <FC.StyledButton>Adicionar Usuário</FC.StyledButton>
                </FC.StyledForm>
                <FC.ContentBoxCol gridSize="repeat(4, 1fr)">
                    <FC.StyledH4>Nome</FC.StyledH4>
                    <FC.StyledH4>Email</FC.StyledH4>
                    <FC.StyledH4>ID</FC.StyledH4>
                    <FC.StyledH4>Perfil</FC.StyledH4>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="repeat(4, 1fr)">
                    <FC.StyledP>Nome</FC.StyledP>
                    <FC.StyledP>Email</FC.StyledP>
                    <FC.StyledP>ID</FC.StyledP>
                    <FC.StyledP>Perfil</FC.StyledP>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="repeat(4, 1fr)">
                    <FC.StyledP>Nome</FC.StyledP>
                    <FC.StyledP>Email</FC.StyledP>
                    <FC.StyledP>ID</FC.StyledP>
                    <FC.StyledP>Perfil</FC.StyledP>
                </FC.ContentBoxCol>
            </FC.ContentBoxRow>


        </FC.Grid>

    )
}