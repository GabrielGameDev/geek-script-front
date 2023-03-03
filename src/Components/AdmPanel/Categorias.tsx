import React from "react";
import * as FC from './AdmPanel.styles'
import { MenuLateral } from "./MenuLateral";

export const AdmCategorias: React.FC = () => {
    return (
        <FC.Grid>
            <MenuLateral />
            <FC.ContentBoxRow>
                <div>
                    <FC.StyledH1>Painel Administrativo</FC.StyledH1>
                </div>
                <FC.StyledForm >
                    <FC.StyledInput placeholder='Categoria'></FC.StyledInput>
                    <FC.StyledButton>Adicionar Categoria</FC.StyledButton>
                </FC.StyledForm>
                <FC.ContentBoxCol gridSize="1fr">
                    <FC.StyledH4 >Categoria</FC.StyledH4>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="1fr">
                    <FC.StyledP>Categoria</FC.StyledP>
                </FC.ContentBoxCol>
            </FC.ContentBoxRow>
        </FC.Grid>

    )
}