import React from "react";
import * as FC from "./AdmPanel.styles";
import { ButtonEditar, ButtonExcluir } from "./Buttons";
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

  function handleCreate() {
    createCategory(category).then((res) => {
      console.log(res);
    });
  }

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <FC.Grid>
      <MenuLateral />
      <FC.ContentBoxRow>
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
        <FC.ContentBoxCol gridSize="repeat(2, 1fr)">
          <FC.StyledH4>Categoria</FC.StyledH4>
        </FC.ContentBoxCol>
        {categories.map((category) => (
          <FC.ContentBoxCol gridSize="repeat(2, 1fr)">
            <FC.StyledP>{category.name}</FC.StyledP>
            <div>
              <FC.ContentBoxRow rowSize="1fr">
                <FC.StyledButton
                  butHeight="20px"
                  butWidth="80px"
                  onClick={() => handleDelete(category.id_category)}
                >
                  Excluir
                </FC.StyledButton>
              </FC.ContentBoxRow>
            </div>
          </FC.ContentBoxCol>
        ))}
      </FC.ContentBoxRow>
    </FC.Grid>
  );
};
