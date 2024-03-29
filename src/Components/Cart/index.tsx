import React from "react";
import * as FC from "./Cart.styles";
import { getProduct } from "../../api/produtos";
import { getCategories } from "../../api/category";
import { useEffect, useState } from "react";
import { number } from "prop-types";
import { Grid } from "../AA/grid.styles";
import * as Tema from "../Theme/Theme";
import { checkout, Cart } from "../../api/checkout";

export const CartContent: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  // const [purchaseIdList, setPurchaseIdList] = useState([]);

  function getCategoryById(id: number) {
    return categories.find((category) => category.id_category === id);
  }

  function handleDelete(id: number) {
    const newCart = cartItems.filter((item: any) => item != id);
    setCartItems(newCart);
    console.log(id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.location.reload();
  }

  function handleCheckout(event) {
    event.preventDefault();
    const newCheckout: Cart = {
      purchaseTotal: totalPrice,
      purchaseIdList: cartItems,
    };
    console.log(newCheckout);
    checkout(newCheckout)
      .then((response) => {
        console.log(response.data);
        localStorage.removeItem("cart");
        window.location.href = "/sucesso";
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  useEffect(() => {
    const newUser = localStorage.getItem("user");
    if (!newUser) {
      window.location.href = "/";
    }

    getCategories().then((response) => {
      setCategories(response.data);
    });

    const items = localStorage.getItem("cart");
    if (items) {
      setCartItems(JSON.parse(items));
      // setPurchaseIdList(cart);
    }
  }, []);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((id: any) => {
      getProduct(id).then((response) => {
        // console.log(response.data);
        setProducts((products) => [...products, response.data]);
        total += parseFloat(response.data.price);
        console.log(total);
        setTotalPrice(total);
      });
    });
  }, [cartItems]);

  return (
    <Grid gridSize="repeat(2, 1fr)" bgColor={Tema.theme.colors.White}>
      <FC.ContentBox gridFractionRows="1fr 1fr 2fr">
        <FC.StyledH3>Your Cart</FC.StyledH3>
        <FC.StyledP>
          Not ready to checkout? <a href="/products">continue shopping</a>
        </FC.StyledP>
        {products.map((product: any) => (
          <FC.ContentBox gridFractionColumns="0.5fr 1fr">
            <FC.StyledImg src={product.photo} />
            <FC.ContentBox
              gridFractionRows="repeat(4, 1fr)"
              height="70px"
              justifyContent="right"
              textAlign="end"
            >
              <FC.StyledH5>{product.name}</FC.StyledH5>
              <FC.StyledP>
                {getCategoryById(product.category_id).name}
              </FC.StyledP>
              {/* <FC.StyledP>Quantidade: </FC.StyledP> */}
              <FC.StyledH5>Preço:{product.price}</FC.StyledH5>
              <div>
                <FC.StyledButton
                  onClick={() => handleDelete(product.id_product)}
                  bgWidth="50px"
                  bgHeight="15px"
                  bgColor={Tema.theme.colors.DarkGray}
                >
                  Excluir
                </FC.StyledButton>
              </div>
            </FC.ContentBox>
          </FC.ContentBox>
        ))}
      </FC.ContentBox>
      <FC.ContentBox>
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
          {cartItems.length > 0 && (
            <FC.StyledButton onClick={handleCheckout}>
              Confirmar pedido
            </FC.StyledButton>
          )}
        </FC.StyledForm>
      </FC.ContentBox>
    </Grid>
  );
};
