import React from "react";
import * as FC from "./AdmPanel.styles";
import { ButtonEditar, ButtonExcluir } from "./Buttons";
import { MenuLateral } from "./MenuLateral";
import { getOrders } from "../../api/checkout";
import { useState, useEffect } from "react";

export const AdmPedidos: React.FC = () => {
  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <FC.Grid>
      <MenuLateral />
      <FC.ContentBoxRow>
        <div>
          <FC.StyledH1>Painel Administrativo</FC.StyledH1>
        </div>

        <FC.ContentBoxCol gridSize="repeat(6, 1fr)">
          <FC.StyledH4>Número do pedido</FC.StyledH4>
          <FC.StyledH4>Cliente</FC.StyledH4>
          <FC.StyledH4>Valor</FC.StyledH4>
          <FC.StyledH4>Itens</FC.StyledH4>
          <FC.StyledH4>Quantidade</FC.StyledH4>
        </FC.ContentBoxCol>
        {orders.map((order: any) => {
          return (
            <FC.ContentBoxCol gridSize="repeat(6, 1fr)">
              <FC.StyledH4>{order.id_purchase}</FC.StyledH4>
              <FC.StyledH4>{order.User.name}</FC.StyledH4>
              <FC.StyledH4>{order.total}</FC.StyledH4>
              {/* <FC.StyledH4>
                {order.products.map((product: any) => {
                  return <div>{product.name}</div>;
                })}
              </FC.StyledH4>
              <FC.StyledH4>
                {order.products.map((product: any) => {
                  return <div>{product.quantity}</div>;
                })}
              </FC.StyledH4> */}
            </FC.ContentBoxCol>
          );
        })}
      </FC.ContentBoxRow>
    </FC.Grid>
  );
};
