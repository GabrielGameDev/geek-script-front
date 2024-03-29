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
  ShowMoreButton,
  DescrpDiv,
} from "./producsts.style";
import ProductCard from "../../Components/ProductCard";

import { getProducts, Product } from "../../api/produtos";

export default function ProductsComponent() {
  const [products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedButton, setSelectedButton] = useState("Todos");

  function handleFilterButton(button: string) {
    setSelectedButton(button);
  }

  function handleShowMore() {
    setCurrentPage(currentPage + 1);
  }

  function handleSort(event) {
    const { value } = event.target;
    let sortedProducts = [];
    switch (value) {
      case "filter1":
        sortedProducts = [...products].sort((a, b) => a.id - b.id);
        break;
      case "filter2":
        sortedProducts = [...products].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "filter3":
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
        break;
    }
    setShownProducts(sortedProducts);
  }

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    const categories = [
      "Todos",
      "Tabuleiro",
      "Games",
      "Action Figures",
      "Funkos",
    ];
    const filteredProducts =
      selectedButton === "Todos"
        ? products
        : products.filter(
            (product: Product) =>
              product.category_id === categories.indexOf(selectedButton)
          );
    setShownProducts(filteredProducts.slice(0, currentPage * 8));
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  }, [products, currentPage, selectedButton]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header></Header>
      </ThemeProvider>

      <StoreDescription>
        <DescrpDiv>
          <h1>Products</h1>
          <p>
            Encontre o produto geek que é a sua cara. Decore sua casa, mude seu
            estilo. Aqui você encontra de tudo
          </p>
        </DescrpDiv>
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
              selected={selectedButton === "Tabuleiro" ? true : false}
              onClick={() => handleFilterButton("Tabuleiro")}
            >
              Tabuleiro
            </FilterButton>
            <FilterButton
              selected={selectedButton === "Games" ? true : false}
              onClick={() => handleFilterButton("Games")}
            >
              Games
            </FilterButton>
            <FilterButton
              selected={selectedButton === "Action Figures" ? true : false}
              onClick={() => handleFilterButton("Action Figures")}
            >
              Action Figures
            </FilterButton>
            <FilterButton
              selected={selectedButton === "Funko" ? true : false}
              onClick={() => handleFilterButton("Funko")}
            >
              Funko
            </FilterButton>
          </StyledDiv>

          <FilterSelectDiv>
            <span>Ordenar por</span>
            <Select name="filters" id="filters" onChange={handleSort}>
              <option value="filter1">Padrão</option>
              <option value="filter2">A-Z</option>
              <option value="filter3">Menor preço</option>
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
          <ShowMoreButton onClick={handleShowMore}>Mostrar mais</ShowMoreButton>
        </div>
      </Main>
    </>
  );
}
