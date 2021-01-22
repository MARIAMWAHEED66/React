import products from "../products";
import ProductItem from "./ProductItem";
import { List } from "../styles";

const ProductsList = () => {
  const productsList = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return <List>{productsList}</List>;
};

export default ProductsList;
