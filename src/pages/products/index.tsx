import { useState } from "react";
import ProductsComponent from "../../Components/Products";

export default function Products() {
  const [selectedButton, setSelectedButton] = useState("Action Figure");

  const handleFilterButton = (button: string) => {
    setSelectedButton(button);
  };

  return (
    <>
      <ProductsComponent />
    </>
  );
}
