import React from "react";
import * as FC from '../LoginContent/LoginContent.styles'
import { createUser, User } from "../../api/user";
import { useState } from "react";
import { Grid } from "../AA/grid.styles";
import * as Tema from '../Theme/Theme'

export const CreateUser: React.FC = () => {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        password: "",
    });

    function handleNameChange(event) {
        const name = event.target.value;
        setUser({ ...user, name });
    }

    function handleEmailChange(event) {
        const email = event.target.value;
        setUser({ ...user, email });
    }

    function handlePasswordChange(event) {
        const password = event.target.value;
        setUser({ ...user, password });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!user.name || !user.email || !user.password) {
            window.alert("Preencha todos os campos!");
            return;
        }
        if (user.email.indexOf("@") === -1) {
            window.alert("Email inválido!");
            return;
        }

        createUser(user)
            .then((response) => {
                if (response.status === 201) {
                    window.alert(`Usuário ${user.name} cadastrado com sucesso!`);
                    window.location.href = "/";
                }
            })
            .catch((error) => {
                window.alert(error.response.data.message);
            });

        // window.alert(`Usuário ${user.name} cadastrado com sucesso!`);
        // window.location.href = "/";
    }
    return (
    <Grid gridSize="repeat(1, 1fr)" bgColor={Tema.theme.colors.Primary}>
        <FC.StyledDiv>
            <FC.StyledForm action="">
                <FC.StyledH1>Faça Seu Cadastro</FC.StyledH1>
                <FC.StyledP>Cadastre seus dados para acessar</FC.StyledP>

                <FC.StyledInput
                    type="text"
                    placeholder="Nome Completo"
                    onChange={handleNameChange}
                ></FC.StyledInput>
                <FC.StyledInput
                    type="text"
                    placeholder="Email"
                    onChange={handleEmailChange}
                ></FC.StyledInput>
                <FC.StyledInput
                    typeof="text"
                    placeholder="Senha"
                    type="password"
                    onChange={handlePasswordChange}
                ></FC.StyledInput>
                <FC.StyledButton type="submit" onClick={handleSubmit}>
                    Cadastrar
                </FC.StyledButton>
            </FC.StyledForm>
        </FC.StyledDiv>
    </Grid>
        
    );
}
