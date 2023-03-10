import React from "react";
import * as FC from './AdmPanel.styles'
import { ButtonEditar, ButtonExcluir } from "./Buttons";
import { MenuLateral } from "./MenuLateral";
import { getOrders } from "../../api/checkout";
import { useState, useEffect } from "react";

export const AdmPedidos: React.FC = () => {
    return (
        <Grid gridMedia="1fr">
            <MenuLateral />
            <Grid gridRows="1fr" gridSize="1fr" gridPad="2%">
                <div>
                    <FC.StyledH1>Painel Administrativo</FC.StyledH1>
                </div>

                <Grid gridSize="repeat(6, 1fr)" gridRows="1fr">
                    <FC.StyledH4 >Número do pedido</FC.StyledH4>
                    <FC.StyledH4 >Cliente</FC.StyledH4>
                    <FC.StyledH4 >Valor</FC.StyledH4>
                    <FC.StyledH4 >Itens</FC.StyledH4>
                    <FC.StyledH4 >Quantidade</FC.StyledH4>
                </Grid>
                <Grid gridSize="repeat(6, 1fr)" gridRows="1fr" gridBorder="1px solid white"> 
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
                </Grid>
                <Grid gridSize="repeat(6, 1fr)" >
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
                </Grid>
                <Grid gridSize="repeat(6, 1fr)">
                    <FC.StyledP>Número do pedido</FC.StyledP>
                    <FC.StyledP>Cliente</FC.StyledP>
                    <FC.StyledP>Valor</FC.StyledP>
                    <ol>
                        <FC.StyledLi fontColor="#D1C4E9">Action Figure</FC.StyledLi>
                        <FC.StyledLi fontColor="#D1C4E9">Camiseta do homem-aranha</FC.StyledLi>
                        <FC.StyledLi fontColor="#D1C4E9">Funko Naruto</FC.StyledLi>
                        <FC.StyledLi fontColor="#D1C4E9">Caneca Supernatural</FC.StyledLi>
                    </ol>
                    <FC.StyledP>1</FC.StyledP>
                    <FC.StyledDivForm display='column' justifyC='space-around'>
                        <FC.StyledButton butHeight="20px" butWidth="80px" onClick={() => handleUpdate(product.id_product)}>
                            Editar
                        </FC.StyledButton>
                        <FC.StyledButton butHeight="20px" butWidth="80px" onClick={() => handleDeleteProduct(product.id_product)}>
                            Excluir
                        </FC.StyledButton>
                    </FC.StyledDivForm>
                </Grid>
            </Grid>
        </Grid>
