import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Components/Theme/Theme";
import { Main } from "../../Components/Products/producsts.style";
import * as style from "./product.styles";
import { getProduct } from "../../api/produtos";
import { useEffect } from "react";
import { useState } from "react";

export default function Produto() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  function AddToCart() {
    const newUser = localStorage.getItem("user");
    if (!newUser) {
      window.location.href = "/login";
      return;
    }

    const cartItems = localStorage.getItem("cart");
    let cart = [];
    if (cartItems) {
      cart = JSON.parse(cartItems);
    }
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    window.location.href = "/cart";
  }

  useEffect(() => {
    getProduct(id).then((response) => {
      console.log(response.data);
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>

      <Main>
        <style.Section>
          <style.Images>
            {Array.from({ length: 4 }).map(() => (
              <img src={product.photo} alt="" />
            ))}
          </style.Images>
          <style.ProductInfo>
            <h1>{product.name}</h1>
            <h2>R${product.price}</h2>
            <p>{product.description}</p>

            {product.category_id === 4 ? (
              <>
                <p>Tamanho</p>
                <style.SizeDiv>
                  <style.SizeButton>P</style.SizeButton>
                  <style.SizeButton>M</style.SizeButton>
                  <style.SizeButton>G</style.SizeButton>
                  <style.SizeButton>GG</style.SizeButton>
                </style.SizeDiv>
              </>
            ) : (
              <></>
            )}

            <div>
              <style.AddToCart onClick={AddToCart}>
                Adicionar ao carrinho - R${product.price}
              </style.AddToCart>
            </div>
          </style.ProductInfo>
        </style.Section>
      </Main>
    </>
  );
}
