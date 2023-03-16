import React from "react";
import * as FC from "./AdmPanel.styles";
import { MenuLateral } from "./MenuLateral";
import { getUsers, User, deleteUser, createUser } from "../../api/user";
import { useState, useEffect } from "react";
import { Grid } from "../AA/grid.styles";

export const AdmUsuarios: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scope, setScope] = useState("");

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event) => {
    const pass = event.target.value;
    setPassword(pass);
  };

  const handleScopeChange = (event) => {
    const scope = event.target.value;
    setScope(scope);
  };

  function handleCreateUser(event) {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      scope: scope,
    };

    createUser(newUser)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          window.location.reload();
        }
      })
      .catch((error) => {
        window.alert("Erro ao criar usuário. Erro: " + error.response.data);
      });
  }

  function handleDeleteUser(id: string) {
    deleteUser(id).then(() => {
      getUsers().then((users) => {
        setUsers(users.data);
      });
    });
  }

  function handleUpdate(id: number) {
    window.location.href = `/updateUser/${id}`;
  }

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users.data);
      console.log(users.data);
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
            placeholder="Nome"
            onChange={handleNameChange}
          ></FC.StyledInput>
          <FC.StyledInput
            placeholder="Email"
            onChange={handleEmailChange}
          ></FC.StyledInput>
          <FC.StyledInput
            placeholder="Senha"
            onChange={handlePasswordChange}
          ></FC.StyledInput>
          <FC.StyledInput
            placeholder="perfil"
            onChange={handleScopeChange}
          ></FC.StyledInput>
          <FC.StyledButton onClick={handleCreateUser}>
            Adicionar Usuário
          </FC.StyledButton>
        </FC.StyledForm>
        <Grid gridSize="repeat(5, 1fr)">
          <FC.StyledH4>Nome</FC.StyledH4>
          <FC.StyledH4>Email</FC.StyledH4>
          <FC.StyledH4>ID</FC.StyledH4>
          <FC.StyledH4>Perfil</FC.StyledH4>
        </Grid>
        {users.map((user) => (
          <Grid gridSize="repeat(5, 1fr)">
            <FC.StyledP>{user.name}</FC.StyledP>
            <FC.StyledP>{user.email}</FC.StyledP>
            <FC.StyledP>{user.id_user}</FC.StyledP>
            <FC.StyledP>{user.scope}</FC.StyledP>
            <div>
              <Grid rowSize="1fr">
                <FC.StyledButton
                  butHeight="20px"
                  butWidth="80px"
                  onClick={() => handleUpdate(user.id_user)}
                >
                  Editar
                </FC.StyledButton>
              </Grid>

              <Grid rowSize="1fr">
                <FC.StyledButton
                  butHeight="20px"
                  butWidth="80px"
                  onClick={() => handleDeleteUser(user.id_user)}
                >
                  Excluir
                </FC.StyledButton>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
