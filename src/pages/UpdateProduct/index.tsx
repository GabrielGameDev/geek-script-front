import * as FC from "../../Components/AdmPanel/AdmPanel.styles";
import { getProduct, updateProduct } from "../../api/produtos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleProductNameChange = (event) => {
    const productName = event.target.value;
    setProductName(productName);
  };

  const handleCategoryChange = (event) => {
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
      <form action="">
        <input
          type="text"
          placeholder={product.name}
          onChange={handleProductNameChange}
        />
        <input
          type="text"
          placeholder={product.category_id}
          onChange={handleCategoryChange}
        />
        <input
          type="text"
          placeholder={product.price}
          onChange={handlePriceChange}
        />
        <input
          type="text"
          placeholder={product.description}
          onChange={handleDescriptionChange}
        />
        <input
          type="text"
          placeholder={product.photo}
          onChange={handlePhotoChange}
        />
        <button onClick={handleUpdate}>Atualizar</button>
      </form>
    </>
  );
}
