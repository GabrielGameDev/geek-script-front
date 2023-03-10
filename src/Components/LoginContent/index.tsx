import React from "react";
import * as FC from "./LoginContent.styles";
import { useState } from "react";
import * as Tema from '../Theme/Theme' 
import { login } from "../../api/login";
import { getUser } from "../../api/user";
import { Grid } from "../AA/grid.styles";

export const LoginContent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logando, setLogando] = useState(false);

  function handleEmailChange(event) {
    const email = event.target.value;
    setEmail(email);
  }

  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLogando(true);
    if (!email || !password) {
      window.alert("Preencha todos os campos!");
      return;
    }
    if (email.indexOf("@") === -1) {
      window.alert("Email inválido!");
      return;
    }

    login(email, password)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          getUser(response.data.id).then((response) => {
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response.data.scope);
            window.alert(`Usuário ${email} logado com sucesso!`);
            if (response.data.scope === "admin") {
              window.location.href = "/adm";
            } else {
              window.location.href = "/";
            }
          });
        }
      })
      .catch((error) => {
        window.alert("Usuário ou senha inválidos!");
        console.log(error);
      });
  }

  return (
    <Grid gridPad='0' gridSize="repeat(1, 1fr)" gridRows="repeat(1, 1fr)" bgColor={Tema.theme.colors.Primary}>
      <FC.StyledDiv>
        <FC.StyledForm>
          <FC.StyledH1>Seja bem-vindo</FC.StyledH1>
          <FC.StyledP>Faça login com seu e-mail</FC.StyledP>
          <FC.StyledInput
            placeholder="Email Adress"
            onChange={handleEmailChange}
          ></FC.StyledInput>
          <FC.StyledInput
            placeholder="Senha"
            type="password"
            onChange={handlePasswordChange}
          ></FC.StyledInput>
          <FC.StyledButton onClick={handleSubmit} disabled={logando}>
            Login
          </FC.StyledButton>
          <FC.StyledDivForm>
            <FC.StyledLabel>
              <FC.StyledInput marginX="0px" type="checkbox"></FC.StyledInput>{" "}
              Lembre de mim
            </FC.StyledLabel>
            <FC.StyledLink>Esqueceu a senha ?</FC.StyledLink>
          </FC.StyledDivForm>
        </FC.StyledForm>
        <FC.StyledLink colorLink="LightGray" href="/cadastro" >ou crie uma conta</FC.StyledLink>
      </FC.StyledDiv>
    </Grid>
  );
};
