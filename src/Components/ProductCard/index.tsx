import { Link } from "react-router-dom";
import { ProductCardStyles } from "./productCard.styles";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Link to={`/products/${props.id}`}>
      <ProductCardStyles>
        <img src={props.image} alt="" />
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </ProductCardStyles>
    </Link>
  );
}
