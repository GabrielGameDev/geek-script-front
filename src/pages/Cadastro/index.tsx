import { createUser, User } from "../../api/user";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Footer } from "../../Components/Footer";
import { GlobalStyle } from "../../Components/GlobalStyleGuide";
import { Header } from "../../Components/Header";
import { theme } from "../../Components/Theme/Theme";
import { CreateUser } from "../../Components/CreateUser";

export default function Cadastro() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <CreateUser />
        <Footer />
      </ThemeProvider>
    )
  
  
  }