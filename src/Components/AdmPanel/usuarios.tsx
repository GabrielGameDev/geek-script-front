import React from "react";
import * as FC from "./AdmPanel.styles";
import { ButtonEditar, ButtonExcluir } from "./Buttons";
import { MenuLateral } from "./MenuLateral";
import { getUsers, User, deleteUser } from "../../api/user";
import { useState, useEffect } from "react";

export const AdmUsuarios: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  function handleDeleteUser(id: string) {
    deleteUser(id).then(() => {
      getUsers().then((users) => {
        setUsers(users.data);
      });
    });
  }

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users.data);
      console.log(users.data);
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
          <FC.StyledInput placeholder="Nome"></FC.StyledInput>
          <FC.StyledInput placeholder="Email"></FC.StyledInput>
          <FC.StyledInput placeholder="ID"></FC.StyledInput>
          <FC.StyledInput placeholder="perfil"></FC.StyledInput>
          <FC.StyledButton>Adicionar Usuário</FC.StyledButton>
        </FC.StyledForm>
        <FC.ContentBoxCol gridSize="repeat(5, 1fr)">
          <FC.StyledH4>Nome</FC.StyledH4>
          <FC.StyledH4>Email</FC.StyledH4>
          <FC.StyledH4>ID</FC.StyledH4>
          <FC.StyledH4>Perfil</FC.StyledH4>
        </FC.ContentBoxCol>
        {users.map((user) => (
          <FC.ContentBoxCol gridSize="repeat(5, 1fr)">
            <FC.StyledP>{user.name}</FC.StyledP>
            <FC.StyledP>{user.email}</FC.StyledP>
            <FC.StyledP>{user.id_user}</FC.StyledP>
            <FC.StyledP>{user.scope}</FC.StyledP>
            <div>
              <FC.ContentBoxRow rowSize="1fr">
                <FC.StyledButton butHeight="20px" butWidth="80px">
                  Editar
                </FC.StyledButton>
              </FC.ContentBoxRow>

              <FC.ContentBoxRow rowSize="1fr">
                <FC.StyledButton
                  butHeight="20px"
                  butWidth="80px"
                  onClick={() => handleDeleteUser(user.id_user)}
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
