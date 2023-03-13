import React from "react";
import * as FC from "./UserPanel.styles";
import { theme } from "../Theme/Theme";
import { getOrdersByUser } from "../../api/checkout";
import { useState, useEffect } from "react";

export const UserPedidos: React.FC = () => {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    getOrdersByUser().then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);

  return (
    <FC.Box>
      <FC.StyledH1> -- Meus Pedidos -- </FC.StyledH1>

      <FC.ContentBox>
        <FC.StyledH4 textColor={theme.colors.Accent}>
          Número do pedido
        </FC.StyledH4>
        <FC.StyledH4 textColor={theme.colors.Accent}>Cliente</FC.StyledH4>
        <FC.StyledH4 textColor={theme.colors.Accent}>Valor</FC.StyledH4>
        {/* <FC.StyledH4 textColor={theme.colors.Accent}>Itens</FC.StyledH4>
        <FC.StyledH4 textColor={theme.colors.Accent}>Quantidade</FC.StyledH4> */}
      </FC.ContentBox>
      {orders.map((order) => {
        return (
          <FC.ContentBox key={order.id_purchase}>
            <FC.StyledP>{order.id_purchase}</FC.StyledP>
            <FC.StyledP>{order.User.name}</FC.StyledP>
            <FC.StyledP>{order.total}</FC.StyledP>
            {/* <FC.StyledP>Homem aranha</FC.StyledP>
            <FC.StyledP>1</FC.StyledP> */}
          </FC.ContentBox>
        );
      })}
    </FC.Box>
  );
};
