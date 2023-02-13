import { ProductCardStyles } from "./productCard.styles";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <ProductCardStyles>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </ProductCardStyles>
  );
}
