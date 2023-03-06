import React from "react";
import * as FC from "../AdmPanel/AdmPanel.styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, updateUser, User } from "../../api/user";

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
    const category = event.target.value;
    setCategory(category);
  };

  const handlePriceChange = (event) => {
    const price = event.target.value;
    setPrice(price);
  };

  const handleDescriptionChange = (event) => {
    const description = event.target.value;
    setDescription(description);
  };

  const handlePhotoChange = (event) => {
    const photo = event.target.value;
    setPhoto(photo);
  };

  function handleUpdate(event) {
    event.preventDefault();
    const product = {
      name: productName,
      category_id: category,
      price: price,
      description: description,
      photo: photo,
    };
    console.log(product);
    updateProduct(id, product)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          window.alert(`Produto ${product.name} atualizado com sucesso!`);
          console.log(response.data);
          window.location.href = "/adm";
        }
      })
      .catch((error) => {
        window.alert("Erro ao atualizar produto!" + error);
        console.log(error);
      });
  }

  useEffect(() => {
    getProduct(id).then((response) => {
      console.log(response.data);
      setProduct(response.data);
      setProductName(response.data.name);
      setCategory(response.data.category_id);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setPhoto(response.data.photo);
    });
  }, []);

  return (
    <>
      <FC.StyledForm action="">
        <FC.StyledInput
          type="text"
          placeholder={product.name}
          onChange={handleProductNameChange}
        />
        <FC.StyledInput
          type="text"
          placeholder={product.category_id}
          onChange={handleCategoryChange}
        />
        <FC.StyledInput
          type="text"
          placeholder={product.price}
          onChange={handlePriceChange}
        />
        <FC.StyledInput
          type="text"
          placeholder={product.description}
          onChange={handleDescriptionChange}
        />
        <FC.StyledInput
          type="text"
          placeholder={product.photo}
          onChange={handlePhotoChange}
        />
        <FC.StyledButton onClick={handleUpdate}>Atualizar</FC.StyledButton>
      </FC.StyledForm>
    </>
  );
};
