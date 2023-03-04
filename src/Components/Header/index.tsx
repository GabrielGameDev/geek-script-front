import React from "react";
import * as FC from "./Header.styles";
import logoGeek from "../../../Images/imageLogo.png";
import iconCart from "../../../Images/icon-cart.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User } from "../../api/user";

export const Header: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    isAdm: "",
  });

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
      console.log(user);
    }
  }, []);

  return (
    <FC.HeaderDiv>
      <div>
        <FC.HeaderLinks href="/">
          <FC.HeaderImage width={60} src={logoGeek}></FC.HeaderImage>
        </FC.HeaderLinks>
        <FC.HeaderLinks href="/products">Shop</FC.HeaderLinks>
        <FC.HeaderLinks href="#">Stories</FC.HeaderLinks>
        <FC.HeaderLinks href="#">About</FC.HeaderLinks>
      </div>
      <div>
        <FC.HeaderLinks href="/cart">
          <FC.Counter>0</FC.Counter>
          <FC.HeaderImage src={iconCart} width={17}></FC.HeaderImage>
        </FC.HeaderLinks>

        {user.id ? (
          <FC.HeaderLinks href="http://localhost:5173/profile">
            {`Olá, ${user.name}`}
          </FC.HeaderLinks>
        ) : (
          <FC.HeaderLinks href="http://localhost:5173/login">
            Login
          </FC.HeaderLinks>
        )}
      </div>
    </FC.HeaderDiv>
  );
};
