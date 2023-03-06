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

  const [open, setOpen] = useState<FC.IHeader>(false)

  return (
    <FC.HeaderDiv>
      <div>
        <FC.StyledUl open={open}>
          <li> <FC.HeaderLinks href="/">
            <FC.HeaderImage width={60} src={logoGeek}></FC.HeaderImage>
          </FC.HeaderLinks></li>
          <li><FC.HeaderLinks href="/products">Shop</FC.HeaderLinks></li>
          <li><FC.HeaderLinks href="#">Stories</FC.HeaderLinks></li>
          <li><FC.HeaderLinks href="#">About</FC.HeaderLinks></li>
        </FC.StyledUl>
        <FC.StyledBurger open={open} onClick={() => setOpen(!open)}>  
          <div />
          <div />
          <div />
        </FC.StyledBurger>
      </div>
      <div>
        <FC.HeaderLinks href="/cart">
          <FC.Counter>0</FC.Counter>
          <FC.HeaderImage src={iconCart} width={17}></FC.HeaderImage>
        </FC.HeaderLinks>

        {user.id ? (
          <FC.HeaderLinks href="/profile">
            {`Olá, ${user.name}`}
          </FC.HeaderLinks>
        ) : (
          <FC.HeaderLinks href="/login">
            Login
          </FC.HeaderLinks>
        )}
      </div>
    </FC.HeaderDiv>
  );
};
