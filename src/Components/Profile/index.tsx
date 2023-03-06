import React from "react";
import * as FC from "./Profile.styles";
import { getUser } from "../../api/user";
import { useEffect, useState } from "react";

export const ProfileContent: React.FC = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    isAdm: "",
  });

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    window.location.href = "/";
  }

  useEffect(() => {
    const newUser = localStorage.getItem("user");
    if (newUser) {
      setUser({
        name: JSON.parse(newUser).name,
        email: JSON.parse(newUser).email,
        id: JSON.parse(newUser).id_user,
        password: JSON.parse(newUser).password,
        isAdm: JSON.parse(newUser).scope,
      });
    }
  }, []);

  return (
    <FC.Grid>
      <FC.StyledDiv>
        <FC.StyledP>Sobre</FC.StyledP>
        <FC.StyledForm>
          <FC.StyledLabel>Nome do usuário</FC.StyledLabel>
          <FC.StyledInput value={user.name}></FC.StyledInput>
          <FC.StyledLabel>Email</FC.StyledLabel>
          <FC.StyledInput value={user.email}></FC.StyledInput>
          <FC.StyledLabel>Meu pedidos</FC.StyledLabel>
          <FC.StyledA href="/pedidos">Clique aqui</FC.StyledA>
          <FC.StyledLabel>Logout</FC.StyledLabel>
          <FC.StyledA onClick={handleLogout}>Clique aqui</FC.StyledA>
        </FC.StyledForm>
      </FC.StyledDiv>
    </FC.Grid>
  );
};
