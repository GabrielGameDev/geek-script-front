import React from "react";
import * as FC from './AdmPanel.styles'
import { MenuLateral } from "./MenuLateral";

export const AdmProdutos: React.FC = () => {
    return (
        <FC.Grid>
            <MenuLateral />
            <FC.ContentBoxRow>
                <div> <FC.StyledH1>Painel Administrativo</FC.StyledH1></div>
                <FC.StyledForm >
                    <FC.StyledInput placeholder='Produto'></FC.StyledInput>
                    <FC.StyledInput placeholder='Categoria'></FC.StyledInput>
                    <FC.StyledInput placeholder='ID'></FC.StyledInput>
                    <FC.StyledInput placeholder='Valor'></FC.StyledInput>
                    <FC.StyledInput placeholder='Estoque'></FC.StyledInput>
                    <FC.StyledButton>Adicionar Produto</FC.StyledButton>
                </FC.StyledForm>
                <FC.ContentBoxCol gridSize="repeat(5, 1fr)">
                    <FC.StyledH4 >Produto</FC.StyledH4>
                    <FC.StyledH4 >Categoria</FC.StyledH4>
                    <FC.StyledH4 >ID</FC.StyledH4>
                    <FC.StyledH4 >Valor</FC.StyledH4>
                    <FC.StyledH4 >Estoque</FC.StyledH4>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="repeat(5, 1fr)">
                    <FC.StyledP>Nome</FC.StyledP>
                    <FC.StyledP>Email</FC.StyledP>
                    <FC.StyledP>ID</FC.StyledP>
                    <FC.StyledP>Perfil</FC.StyledP>
                    <FC.StyledP>Perfil</FC.StyledP>
                    <FC.StyledP>Perfil</FC.StyledP>
                    <FC.StyledP>Perfil</FC.StyledP>
                </FC.ContentBoxCol>

            </FC.ContentBoxRow>

        </FC.Grid>

    )
}