import React from "react";
import * as FC from "./Footer.styles";

export const Footer: React.FC = () => {
  return (
    <FC.Grid>
      <FC.ContentBox>
        <FC.StyledH1 textAlign="center">Assine a nossa Newsletter</FC.StyledH1>
        <FC.StyledP>
          seja o primeiro a receber as novidades da loja, fique por dentro de
          tudo.
        </FC.StyledP>
        <FC.StyledForm>
          <FC.StyledInput placeholder="Email Adress" />

          <FC.StyledButton type="submit">Sign up</FC.StyledButton>
        </FC.StyledForm>
      </FC.ContentBox>
      <FC.ContentBox>
        <FC.StyledUl>
          <FC.StyledH1>Shop</FC.StyledH1>
          <FC.StyledLi>
            <FC.StyledA href="/products">Camisetas</FC.StyledA>
          </FC.StyledLi>
          <FC.StyledLi>
            <FC.StyledA href="/products">Funkos</FC.StyledA>
          </FC.StyledLi>
          <FC.StyledLi>
            <FC.StyledA href="/products">Action Figures</FC.StyledA>
          </FC.StyledLi>
          <FC.StyledLi>
            <FC.StyledA href="/products">Games</FC.StyledA>
          </FC.StyledLi>
        </FC.StyledUl>
      </FC.ContentBox>
      <FC.ContentBox>
        <FC.StyledH1>Ajuda</FC.StyledH1>
        <FC.StyledUl>
          <FC.StyledLi>
            <FC.StyledA href="#">Quem somos nós</FC.StyledA>
          </FC.StyledLi>
          <FC.StyledLi>
            <FC.StyledA href="#">Missão, Visão, Valores</FC.StyledA>
          </FC.StyledLi>
          <FC.StyledLi>
            <FC.StyledA href="#">Linha do tempo</FC.StyledA>
          </FC.StyledLi>
        </FC.StyledUl>
      </FC.ContentBox>
      <FC.ContentBox>
        <FC.StyledH1>Contato</FC.StyledH1>
        <FC.StyledUl>
          <FC.StyledLi>
            <FC.StyledA href="#">Fale conosco</FC.StyledA>
          </FC.StyledLi>
        </FC.StyledUl>
      </FC.ContentBox>
    </FC.Grid>
  );
};
