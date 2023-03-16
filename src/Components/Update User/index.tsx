import React from "react";
import * as FC from "../AdmPanel/AdmPanel.styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, updateUser, User } from "../../api/user";

export const UpdateUser: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [scope, setScope] = useState("");

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handlePasswordChange = (event) => {
    const pass = event.target.value;
    setPassword(pass);
  };

  const handleScopeChange = (event) => {
    const scope = event.target.value;
    setScope(scope);
  };

  function handleUpdate(event) {
    event.preventDefault();
    const newUser = {
      name: name,
      email: email,
      password: password,
      scope: scope,
    };

    updateUser(id, newUser).then((response) => {
      console.log(response.data);
      window.location.href = "/adm/users";
    });
  }

  useEffect(() => {
    console.log(id);
    getUserById(id).then((response) => {
      console.log(response.data);
      setUser(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      //setPassword(response.data.password);
      setScope(response.data.scope);
    });
  }, []);

  return (
    <>
      <FC.StyledForm action="">
        <FC.StyledInput
          type="text"
          placeholder={user?.name}
          onChange={handleNameChange}
        />
        <FC.StyledInput
          type="text"
          placeholder={user?.email}
          onChange={handleEmailChange}
        />
        <FC.StyledInput
          type="text"
          placeholder={"senha"}
          onChange={handlePasswordChange}
        />
        <FC.StyledInput
          type="text"
          placeholder={user?.scope}
          onChange={handleScopeChange}
        />
        {/* <FC.StyledInput
          type="text"
          placeholder={product.photo}
          onChange={handlePhotoChange}
        /> */}
        <FC.StyledButton onClick={handleUpdate}>Atualizar</FC.StyledButton>
      </FC.StyledForm>
    </>
  );
};
