import React from "react";
import * as FC from "./LoginContent.styles";
import { useState } from "react";

import { login } from "../../api/login";

export const LoginContent: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          window.alert(`Usuário ${email} logado com sucesso!`);
          console.log(response.data);
          // window.location.href = "/";
        }
      })
      .catch((error) => {
        window.alert(error.response.data.message);
      });
  }

  return (
    <FC.Grid>
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
            onChange={handlePasswordChange}
          ></FC.StyledInput>
          <button onClick={handleSubmit}>Login</button>
          <FC.StyledDivForm>
            <FC.StyledLabel>
              <FC.StyledInput marginX="0px" type="checkbox"></FC.StyledInput>{" "}
              Lembre de mim
            </FC.StyledLabel>
            <FC.StyledLink>Esqueceu a senha ?</FC.StyledLink>
          </FC.StyledDivForm>
        </FC.StyledForm>
        <FC.StyledLink colorLink="Gray">ou crie uma conta</FC.StyledLink>
      </FC.StyledDiv>
    </FC.Grid>
  );
};
