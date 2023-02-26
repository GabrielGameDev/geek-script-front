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
            <img src={product.photo} alt="" />
            <img src="../../../Images/imageTeste.jpg" alt="" />
            <img src="../../../Images/imageTeste.jpg" alt="" />
            <img src="../../../Images/imageTeste.jpg" alt="" />
          </style.Images>
          <style.ProductInfo>
            <h1>Boneco Homem de Ferro {id}</h1>
          </style.ProductInfo>
        </style.Section>
      </Main>
    </>
  );
}
