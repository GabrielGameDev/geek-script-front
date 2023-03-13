import React from "react";
import * as FC from "./AdmPanel.styles";
import { Grid } from "../AA/grid.styles";
import { MenuLateral } from "./MenuLateral";
import {
  getCategories,
  deleteCategory,
  createCategory,
} from "../../api/category";
import { useEffect, useState } from "react";

export const AdmCategorias: React.FC = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");

  function handleCategory(e: any) {
    setCategory(e.target.value);
  }

  function handleDelete(id: number) {
    deleteCategory(id).then((res) => {
      window.location.reload();
    });
  }

  function handleCreate(event: any) {
    event.preventDefault();
    createCategory(category).then((res) => {
      console.log(res);
      window.location.reload();
    });
  }

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Grid gridMedia="1fr">
      <MenuLateral />
      <Grid gridRows="1fr" gridSize="1fr" gridPad="2%">
        <div>
          <FC.StyledH1>Painel Administrativo</FC.StyledH1>
        </div>
        <FC.StyledForm>
          <FC.StyledInput
            placeholder="Categoria"
            onChange={handleCategory}
          ></FC.StyledInput>
          <FC.StyledButton onClick={handleCreate}>
            Adicionar Categoria
          </FC.StyledButton>
        </FC.StyledForm>
        <Grid gridSize="repeat(2, 1fr)" gridRows="1fr">
          <FC.StyledH4>Categoria</FC.StyledH4>
        </Grid>
        {categories.map((category) => (
          <Grid gridSize="repeat(2, 1fr)" gridRows="1fr">
            <FC.StyledP>{category.name}</FC.StyledP>
            <Grid gridRows="1fr" gridSize="1fr">
              <FC.StyledButton
                butHeight="20px"
                butWidth="80px"
                onClick={() => handleDelete(category.id_category)}
              >
                Excluir
              </FC.StyledButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
