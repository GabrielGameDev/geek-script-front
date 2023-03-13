import React from "react";
import * as FC from "./AdmPanel.styles";
import { ButtonEditar, ButtonExcluir } from "../AA/button.styles";
import { Grid } from "../AA/grid.styles";
import { MenuLateral } from "./MenuLateral";
import { getOrders, deleteOrder } from "../../api/checkout";
import { useState, useEffect } from "react";

export const AdmPedidos: React.FC = () => {
  const [orders, setOrders] = useState([]);

  function handleDelete(id) {
    deleteOrder(id).then((response) => {
      console.log(response.data);
      setOrders(orders.filter((order) => order.id_purchase !== id));
    });
  }

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Grid gridMedia="1fr">
      <MenuLateral />
      <Grid gridRows="1fr" gridSize="1fr" gridPad="2%">
        <div>
          <FC.StyledH1>Painel Administrativo</FC.StyledH1>
        </div>

        <Grid gridSize="repeat(6, 1fr)" gridRows="1fr">
          <FC.StyledH4>Número do pedido</FC.StyledH4>
          <FC.StyledH4>Cliente</FC.StyledH4>
          <FC.StyledH4>Valor</FC.StyledH4>
          <FC.StyledH4>Itens</FC.StyledH4>
          <FC.StyledH4>Quantidade</FC.StyledH4>
        </Grid>
        {orders.map((order) => (
          <Grid
            gridSize="repeat(6, 1fr)"
            gridRows="1fr"
            gridBorder="1px solid white"
          >
            <FC.StyledP>{order.id_purchase}</FC.StyledP>
            <FC.StyledP>{order.User.name}</FC.StyledP>
            <FC.StyledP>{order.total}</FC.StyledP>
            <ol>
              <FC.StyledLi fontColor="#D1C4E9">Action Figure</FC.StyledLi>
              <FC.StyledLi fontColor="#D1C4E9">
                Camiseta do homem-aranha
              </FC.StyledLi>
              <FC.StyledLi fontColor="#D1C4E9">Funko Naruto</FC.StyledLi>
              <FC.StyledLi fontColor="#D1C4E9">Caneca Supernatural</FC.StyledLi>
            </ol>
            <FC.StyledP>1</FC.StyledP>
            <FC.StyledDivForm display="column" justifyC="space-around">
              <FC.StyledButton
                butHeight="20px"
                butWidth="80px"
                onClick={() => handleDelete(order.id_purchase)}
              >
                Excluir
              </FC.StyledButton>
            </FC.StyledDivForm>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
