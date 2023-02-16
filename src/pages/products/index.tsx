import { Header } from "../../Components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Components/Theme/Theme";
import { useState } from "react";
import {
  StoreDescription,
  Main,
  Categories,
  FilterButton,
  FilterSelectDiv,
  Select,
  ProductsContainer,
} from "./products.styles";
import ProductCard from "../../Components/ProductCard";

export default function Products() {
  const [selectedButton, setSelectedButton] = useState("Action Figure");

  const handleFilterButton = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>

      <StoreDescription>
        <div>
          <h1>Products</h1>
          <p>
            Encontre o produto geek que é a sua cara. Decore sua casa, mude seu
            estilo. Aqui você encontra de tudo
          </p>
        </div>
      </StoreDescription>
      <Main>
        <Categories>
          <div>
            <FilterButton
              selected={selectedButton === "Action Figure" ? true : false}
              onClick={() => handleFilterButton("Action Figure")}
            >
              Action Figure
            </FilterButton>
            <FilterButton
              selected={selectedButton === "Camisetas" ? true : false}
              onClick={() => handleFilterButton("Camisetas")}
            >
              Camisetas
            </FilterButton>
            <FilterButton
              selected={selectedButton === "Canecas" ? true : false}
              onClick={() => handleFilterButton("Canecas")}
            >
              Canecas
            </FilterButton>
            <FilterButton
              selected={selectedButton === "Chaveiros" ? true : false}
              onClick={() => handleFilterButton("Chaveiros")}
            >
              Chaveiros
            </FilterButton>
          </div>

          <FilterSelectDiv>
            <span>Sort by</span>
            <Select name="filters" id="filters">
              <option value="filter1">Filter 1</option>
              <option value="filter2">Filter 2</option>
              <option value="filter3">Filter 3</option>
            </Select>
            <p>Mostrando 1-12 de 100 resultados</p>
          </FilterSelectDiv>
        </Categories>
        <ProductsContainer>
          <ProductCard
            image="https://m.media-amazon.com/images/I/818na3mReIL._AC_SL1500_.jpg"
            name="Homem Aranha"
            price={200}
          ></ProductCard>
          <ProductCard
            image="https://m.media-amazon.com/images/I/813QHsWOlTL._AC_SL1500_.jpg"
            name="Homem Aranha"
            price={200}
          ></ProductCard>
          <ProductCard
            image="https://images-americanas.b2w.io/produtos/6039250189/imagens/pikachu-de-pelucia-boneco-pokemon-30-cm-aproximado/6039250189_1_xlarge.jpg"
            name="Homem Aranha"
            price={200}
          ></ProductCard>
          <ProductCard
            image="https://a-static.mlcdn.com.br/1500x1500/action-figure-son-goku-boneco-articulado-dragon-ball-z-actioncollection/actionkrypton/15962449746/4a986b69c72e2c8f8035a9c673f765b5.jpeg"
            name="Homem Aranha"
            price={200}
          ></ProductCard>
          <ProductCard
            image="https://a-static.mlcdn.com.br/1500x1500/action-figure-son-goku-boneco-articulado-dragon-ball-z-actioncollection/actionkrypton/15962449746/4a986b69c72e2c8f8035a9c673f765b5.jpeg"
            name="Homem Aranha"
            price={200}
          ></ProductCard>
        </ProductsContainer>
      </Main>
    </>
  );
}
