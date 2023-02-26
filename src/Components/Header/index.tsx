import React from "react";
import * as FC from "./Header.styles";
import logoGeek from "../../../Images/imageLogo.png";
import iconCart from "../../../Images/icon-cart.svg";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <FC.HeaderDiv>
      <div>
        <FC.HeaderLinks href="">
          <FC.HeaderImage width={60} src={logoGeek}></FC.HeaderImage>
        </FC.HeaderLinks>

        <FC.HeaderLinks href="/products">Shop</FC.HeaderLinks>

        <FC.HeaderLinks href="#">Stories</FC.HeaderLinks>
        <FC.HeaderLinks href="#">About</FC.HeaderLinks>
      </div>
      <div>
        <FC.HeaderLinks href="#">
          <FC.HeaderImage src={iconCart} width={15}></FC.HeaderImage>
        </FC.HeaderLinks>
        <FC.HeaderLinks href="#">Login</FC.HeaderLinks>
      </div>
    </FC.HeaderDiv>
  );
};
