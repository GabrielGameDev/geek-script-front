import { createUser, User } from "../../api/user";
import { useState } from "react";

export default function Cadastro() {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
    isAdm: false,
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

    createUser(user);
    window.alert(`Usuário ${user.name} cadastrado com sucesso!`);
    window.location.href = "/";
  }
  return (
    <div>
      <h1>Faça seu cadastro</h1>
      <form action="">
        <input type="text" placeholder="Nome" onChange={handleNameChange} />

        <input type="text" placeholder="Email" onChange={handleEmailChange} />
        <input
          type="text"
          placeholder="Senha"
          onChange={handlePasswordChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Cadastrar
        </button>
      </form>
    </div>
  );
}
