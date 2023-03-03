import React from "react";
import * as FC from "./AdmPanel.styles";
import { getProducts } from "../../api/produtos";
import { useEffect, useState } from "react";
import {
  Product,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../api/produtos";

export const AdmProdutos: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleProductNameChange = (event) => {
    const productName = event.target.value;
    setProductName(productName);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setCategory(category);
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setPrice(price);
  };

  const handleDescriptionChange = (event) => {
    const description = event.target.value;
    setDescription(description);
  };

  const handlePhotoChange = (event) => {
    const photo = event.target.value;
    setPhoto(photo);
  };

  function handleDeleteProduct(id: number) {
    deleteProduct(id)
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          window.alert(`Produto ${productName} deletado com sucesso!`);
          console.log(response.data);
          window.location.reload();
        }
      })
      .catch((error) => {
        window.alert("Erro ao deletar produto!" + error);
        console.log(error);
      });
  }

  function handleUpdate(id: number) {
    window.location.href = `/update/${id}`;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!productName || !category || !price || !description) {
      window.alert("Preencha todos os campos!");
      return;
    }
    const product: Product = {
      name: productName,
      category_id: Number(category),
      price: Number(price),
      description: description,
      photo: photo,
    };
    console.log(product);
    createProduct(product)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          window.alert(`Produto ${productName} cadastrado com sucesso!`);
          console.log(response.data);
          window.location.reload();
        }
      })
      .catch((error) => {
        window.alert("Erro ao cadastrar produto!");
        console.log(error);
      });
  }

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <FC.Grid>
      <FC.StyledUl>
        <FC.StyeledA href="http://localhost:5173/adm">
          <FC.StyledLi>Produtos</FC.StyledLi>
        </FC.StyeledA>
        <FC.StyeledA href="http://localhost:5173/adm/users">
          <FC.StyledLi>Usuários</FC.StyledLi>
        </FC.StyeledA>
        <FC.StyeledA href="http://localhost:5173/adm/pedidos">
          <FC.StyledLi>Pedidos</FC.StyledLi>
        </FC.StyeledA>
      </FC.StyledUl>
      <FC.ContentBoxRow>
        <div>
          {" "}
          <FC.StyledH1>Painel Administrativo</FC.StyledH1>
        </div>
        <FC.StyledForm>
          <FC.StyledInput
            placeholder="Produto"
            onChange={handleProductNameChange}
          ></FC.StyledInput>
          <FC.StyledInput
            placeholder="Categoria"
            onChange={handleCategoryChange}
          ></FC.StyledInput>
          <FC.StyledInput placeholder="ID"></FC.StyledInput>
          <FC.StyledInput
            placeholder="Valor"
            onChange={handlePriceChange}
          ></FC.StyledInput>
          <FC.StyledInput
            placeholder="Descrição"
            onChange={handleDescriptionChange}
          ></FC.StyledInput>
          <FC.StyledInput
            placeholder="Photo"
            onChange={handlePhotoChange}
          ></FC.StyledInput>
          <FC.StyledButton onClick={handleSubmit}>
            Adicionar Produto
          </FC.StyledButton>
        </FC.StyledForm>
        <FC.ContentBoxCol gridSize="repeat(5, 1fr)">
          <FC.StyledH4>Produto</FC.StyledH4>
          <FC.StyledH4>Categoria</FC.StyledH4>
          <FC.StyledH4>ID</FC.StyledH4>
          <FC.StyledH4>Valor</FC.StyledH4>
          <FC.StyledH4>Estoque</FC.StyledH4>
        </FC.ContentBoxCol>

        {products.map((product: any) => {
          return (
            <FC.ContentBoxCol gridSize="repeat(5, 1fr)">
              <FC.StyledP>{product.name}</FC.StyledP>
              <FC.StyledP>{product.category_id}</FC.StyledP>
              <FC.StyledP>{product.id_product}</FC.StyledP>
              <FC.StyledP>{product.price}</FC.StyledP>
              <FC.StyledP>{product.stock}</FC.StyledP>
              <button onClick={() => handleUpdate(product.id_product)}>
                Editar
              </button>
              <button onClick={() => handleDeleteProduct(product.id_product)}>
                Excluir
              </button>
            </FC.ContentBoxCol>
          );
        })}
      </FC.ContentBoxRow>
    </FC.Grid>
  );
};
