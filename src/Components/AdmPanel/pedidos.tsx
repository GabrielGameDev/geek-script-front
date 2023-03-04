import React from "react";
import * as FC from './AdmPanel.styles'
import { MenuLateral } from "./MenuLateral";

export const AdmPedidos: React.FC = () => {
    return (
        <FC.Grid>
            <MenuLateral />
            <FC.ContentBoxRow>
                <div>
                    <FC.StyledH1>Painel Administrativo</FC.StyledH1>
                </div>
                <FC.StyledForm >
                    <FC.StyledInput placeholder='Número do pedido'></FC.StyledInput>
                    <FC.StyledInput placeholder='Cliente'></FC.StyledInput>
                    <FC.StyledInput placeholder='Valor'></FC.StyledInput>
                    <FC.StyledInput placeholder='Itens'></FC.StyledInput>
                    <FC.StyledInput placeholder='Quantidade'></FC.StyledInput>
                    <FC.StyledButton>Adicionar Pedido</FC.StyledButton>
                </FC.StyledForm>
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
                    <FC.StyledP>Itens</FC.StyledP>
                    <FC.StyledP>Quantidade</FC.StyledP>
                    <div>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Excluir</FC.StyledButton>
                        </FC.ContentBoxRow>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Editar</FC.StyledButton>
                        </FC.ContentBoxRow>
                    </div>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="repeat(6, 1fr)">
                    <FC.StyledP>Número do pedido</FC.StyledP>
                    <FC.StyledP>Cliente</FC.StyledP>
                    <FC.StyledP>Valor</FC.StyledP>
                    <FC.StyledP>Itens</FC.StyledP>
                    <FC.StyledP>Quantidade</FC.StyledP>
                    <div>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Excluir</FC.StyledButton>
                        </FC.ContentBoxRow>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Editar</FC.StyledButton>
                        </FC.ContentBoxRow>
                    </div>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="repeat(6, 1fr)">
                    <FC.StyledP>Número do pedido</FC.StyledP>
                    <FC.StyledP>Cliente</FC.StyledP>
                    <FC.StyledP>Valor</FC.StyledP>
                    <FC.StyledP>Itens</FC.StyledP>
                    <FC.StyledP>Quantidade</FC.StyledP>
                    <div>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Excluir</FC.StyledButton>
                        </FC.ContentBoxRow>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Editar</FC.StyledButton>
                        </FC.ContentBoxRow>
                    </div>
                </FC.ContentBoxCol>
                <FC.ContentBoxCol gridSize="repeat(6, 1fr)">
                    <FC.StyledP>Número do pedido</FC.StyledP>
                    <FC.StyledP>Cliente</FC.StyledP>
                    <FC.StyledP>Valor</FC.StyledP>
                    <FC.StyledP>Itens</FC.StyledP>
                    <FC.StyledP>Quantidade</FC.StyledP>
                    <div>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Excluir</FC.StyledButton>
                        </FC.ContentBoxRow>
                        <FC.ContentBoxRow rowSize="0.5fr">
                            <FC.StyledButton butHeight="20px" butWidth="80px">Editar</FC.StyledButton>
                        </FC.ContentBoxRow>
                    </div>
                </FC.ContentBoxCol>
            </FC.ContentBoxRow>
        </FC.Grid>

    )
}