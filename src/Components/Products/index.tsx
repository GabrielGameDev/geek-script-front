import { Header } from "../../Components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Components/Theme/Theme";
import { useState, useEffect } from "react";
import {
  StoreDescription,
  Main,
  Categories,
  FilterButton,
  FilterSelectDiv,
  Select,
  ProductsContainer,
  StyledDiv,
} from "./producsts.style";
import ProductCard from "../../Components/ProductCard";

import { getProducts, Product } from "../../api/produtos";

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState("Todos");

  const handleFilterButton = (button: string) => {
    setSelectedButton(button);
  };

  function handleShowMore() {
    setCurrentPage(currentPage + 1);
    setShownProducts(products.slice(0, currentPage * 8));
  }

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    setShownProducts(products.slice(0, 8));
  }, [products]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>

      <StoreDescription>
        <StyledDiv>
          <h1>Products</h1>
          <p>
            Encontre o produto geek que é a sua cara. Decore sua casa, mude seu
            estilo. Aqui você encontra de tudo
          </p>
        </StyledDiv>
      </StoreDescription>
      <Main>
        <Categories>
          <StyledDiv>
            <FilterButton
              selected={selectedButton === "Todos" ? true : false}
              onClick={() => handleFilterButton("Todos")}
            >
              Todos
            </FilterButton>
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
          </StyledDiv>

          <FilterSelectDiv>
            <span>Sort by</span>
            <Select name="filters" id="filters">
              <option value="filter1">Filter 1</option>
              <option value="filter2">Filter 2</option>
              <option value="filter3">Filter 3</option>
            </Select>
            <p>
              Mostrando 1-{shownProducts.length} de {products.length} resultados
            </p>
          </FilterSelectDiv>
        </Categories>
        <ProductsContainer>
          {shownProducts.map((product: any) => {
            return (
              <ProductCard
                key={product.id_product}
                id={product.id_product}
                image={product.photo}
                name={product.name}
                price={product.price}
              ></ProductCard>
            );
          })}
        </ProductsContainer>
        <div>
          <button onClick={handleShowMore}>Mostrar mais</button>
        </div>
      </Main>
    </>
  );
}
