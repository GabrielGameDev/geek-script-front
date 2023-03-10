import React from "react";
import { Grid } from "../AA/grid.styles";
import * as FC from './AdmPanel.styles'
import { MenuLateral } from "./MenuLateral";

export const AdmPedidos: React.FC = () => {
    return (
        <Grid>
            <MenuLateral />
            <FC.ContentBoxRow>
                <div>
                    <FC.StyledH1>Painel Administrativo</FC.StyledH1>
                </div>

                <FC.ContentBoxCol gridSize="repeat(6, 1fr)">
                    <FC.StyledH4 >Número do pedido</FC.StyledH4>
                    <FC.StyledH4 >Cliente</FC.StyledH4>
                    <FC.StyledH4 >Valor</FC.StyledH4>
                    <FC.StyledH4 >Itens</FC.StyledH4>
                    <FC.StyledH4 >Quantidade</FC.StyledH4>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="repeat(6, 1fr)">
                    <FC.StyledP>Número do pedido</FC.StyledP>
                    <FC.StyledP>Cliente</FC.StyledP>
                    <FC.StyledP>Valor</FC.StyledP>
                    <ol>
                        <FC.StyledLi fontColor="#D1C4E9">Action Figure</FC.StyledLi>
                        <FC.StyledLi fontColor="#D1C4E9">Camiseta do homem-aranha</FC.StyledLi>
                        <FC.StyledLi fontColor="#D1C4E9">Funko Naruto</FC.StyledLi>
                        <FC.StyledLi fontColor="#D1C4E9">Caneca Supernatural</FC.StyledLi>
                    </ol>
                    <FC.StyledP>100</FC.StyledP>
                    <FC.StyledDivForm display='column' justifyC='space-around'>
                        <FC.StyledButton butHeight="20px" butWidth="80px" onClick={() => handleUpdate(product.id_product)}>
                            Editar
                        </FC.StyledButton>
                        <FC.StyledButton butHeight="20px" butWidth="80px" onClick={() => handleDeleteProduct(product.id_product)}>
                            Excluir
                        </FC.StyledButton>
                    </FC.StyledDivForm>
                </FC.ContentBoxCol>
            </FC.ContentBoxRow>
        </Grid>

    )
}