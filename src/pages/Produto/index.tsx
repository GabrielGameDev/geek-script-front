import { useParams } from "react-router-dom";
import { Header } from "../../Components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Components/Theme/Theme";
import { Main } from "../products/products.styles";
import * as style from "./product.styles";

export default function Produto() {
  const { id } = useParams();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>

      <Main>
        <style.Section>
          <style.Images>
            <img src="../../../Images/imageTeste.jpg" alt="" />
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
