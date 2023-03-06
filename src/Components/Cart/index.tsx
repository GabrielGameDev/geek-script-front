import React from "react";
import * as FC from "./Cart.styles";
import { getProduct } from "../../api/produtos";
import { getCategories } from "../../api/category";
import { useEffect, useState } from "react";
import { number } from "prop-types";

export const CartContent: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function getCategoryById(id: number) {
    return categories.find((category) => category.id_category === id);
  }

  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data);
    });

    const cartItems = localStorage.getItem("cart");
    let cart = [];
    if (cartItems) {
      cart = JSON.parse(cartItems);
    }
    let total = 0;
    cart.forEach((id: any) => {
      getProduct(id).then((response) => {
        // console.log(response.data);
        setProducts((products) => [...products, response.data]);
        total += parseFloat(response.data.price);
        console.log(total);
        setTotalPrice(total);
      });
    });
  }, []);

  return (
    <FC.Grid>
      <FC.ContentBox gridArea="a" gridFractionRows="1fr 1fr 2fr">
        <FC.StyledH3>Your Cart</FC.StyledH3>
        <FC.StyledP>
          Not ready to checkout? <a>continue shopping</a>
        </FC.StyledP>
        {products.map((product: any) => (
          <FC.ContentBox gridFractionColumns="0.5fr 1fr">
            <FC.StyledImg src={product.photo} />
            <FC.ContentBox
              gridFractionRows="1fr 1fr 1fr 1fr"
              height="70px"
              justifyContent="left"
            >
              <FC.StyledH5>{product.name}</FC.StyledH5>
              <FC.StyledP>
                {getCategoryById(product.category_id).name}
              </FC.StyledP>
              {/* <FC.StyledP>Quantidade: </FC.StyledP> */}
              <FC.StyledH5>Preço:{product.price}</FC.StyledH5>
            </FC.ContentBox>
          </FC.ContentBox>
        ))}
      </FC.ContentBox>
      <FC.ContentBox gridArea="b">
        <FC.StyledForm>
          <FC.StyledH4>Resumo do pedido</FC.StyledH4>
          <FC.StyledInput placeholder="Cupom de desconto"></FC.StyledInput>
          <FC.ContentBox
            displayContent="flex"
            justifyContent="space-between"
            width="180px"
          >
            <FC.StyledP>Subtotal</FC.StyledP>
            <FC.StyledP>R${totalPrice.toFixed(2)}</FC.StyledP>
          </FC.ContentBox>
          <FC.StyledP>Frete: Grátis</FC.StyledP>
          <FC.StyledP>Total: R${totalPrice.toFixed(2)}</FC.StyledP>
          <FC.StyledButton href="/checkout">
            Seguir para o checkout
          </FC.StyledButton>
        </FC.StyledForm>
      </FC.ContentBox>
    </FC.Grid>
  );
};
