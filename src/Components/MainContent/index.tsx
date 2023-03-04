import React from "react";
import { Container, Row, Col } from "react-awesome-styled-grid";
import * as FC from "./MainContent.styles";
import { ShopAll } from "../ButtonShopAll/index";
import mainImage from "../../../Images/images.jpg";
import { getProducts, Product } from "../../api/produtos";
import { useState, useEffect } from "react";

export const MainContent: React.FC = () => {
  const [product, setProduct] = useState<Product>({} as Product);

  useEffect(() => {
    getProducts().then((response) => {
      console.log(response.data);
      setProduct(response.data[0]);
    });
  }, []);

  return (
    <div>
      <FC.Grid>
        <FC.Title>Os melhores produto Geek estão aqui</FC.Title>

        <FC.ContentBox>
          <FC.Subtitle></FC.Subtitle>
          <FC.Subtitle>
            Produto de todo o universo Geek. Bonecos Funko, camisetas, Action
            Figure, e muito mais com qualidade e garantia na entrega.
          </FC.Subtitle>
          <FC.Subtitle></FC.Subtitle>
        </FC.ContentBox>

        <FC.Content1>
          {" "}
          <ShopAll />{" "}
        </FC.Content1>

        <FC.Content2>
          {" "}
          <FC.MainImage src={product.photo} />{" "}
        </FC.Content2>
      </FC.Grid>
    </div>
  );
};
