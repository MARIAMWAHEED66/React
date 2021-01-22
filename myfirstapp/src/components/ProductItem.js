import products from "../products";
import { Product, Item } from "../styles";

const ProductItem = (props) => {
  return (
    <Product>
      <img src={props.product.image} alt={props.product.name} />
      <Item>{props.product.name}</Item>
      <p> Price:{props.product.price}</p>
    </Product>
  );
};

export default ProductItem;
