import React from "react";
import * as FC from "./Header.styles";
import logoGeek from "../../../Images/imageLogo.png";
import iconCart from "../../../Images/icon-cart.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { User } from "../../api/user";

export const Header: React.FC = () => {
  const [user, setUser] = useState<User>({
    id_user: "",
    name: "",
    email: "",
    password: "",
    scope: "",
  });

  const [counter, setCounter] = useState(0);

  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const newUser = localStorage.getItem("user");

    if (newUser) {
      setUser({
        name: JSON.parse(newUser).name,
        email: JSON.parse(newUser).email,
        id_user: JSON.parse(newUser).id_user,
        password: JSON.parse(newUser).password,
        scope: JSON.parse(newUser).scope,
      });
      if (JSON.parse(newUser).scope === "admin") {
        setIsAdmin(true);
      }
      console.log(user);
    }

    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCounter(JSON.parse(cartItems).length);
    }
  }, []);

  const [open, setOpen] = useState<FC.IHeader>(false);

  return (
    <FC.HeaderDiv>
      <div>
        <FC.StyledUl open={open}>
          <li>
            {" "}
            <FC.HeaderLinks href="/">
              <FC.HeaderImage width={60} src={logoGeek}></FC.HeaderImage>
            </FC.HeaderLinks>
          </li>
          <li>
            <FC.HeaderLinks href="/products">Shop</FC.HeaderLinks>
          </li>
          <li>
            <FC.HeaderLinks href="#">Stories</FC.HeaderLinks>
          </li>
          <li>
            <FC.HeaderLinks href="#">About</FC.HeaderLinks>
          </li>
        </FC.StyledUl>
        <FC.StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </FC.StyledBurger>
      </div>
      <div>
        <FC.HeaderLinks href="/cart">
          <FC.Counter>{counter}</FC.Counter>
          <FC.HeaderImage src={iconCart} width={17}></FC.HeaderImage>
        </FC.HeaderLinks>

        {user.id_user ? (
          <FC.HeaderLinks
            href={isAdmin ? "/adm" : "/perfil"}
          >{`Olá, ${user.name}`}</FC.HeaderLinks>
        ) : (
          <FC.HeaderLinks href="/login">Login</FC.HeaderLinks>
        )}
      </div>
    </FC.HeaderDiv>
  );
};
