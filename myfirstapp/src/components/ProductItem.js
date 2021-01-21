import products from "../products";

const ProductItem = (props) => {
  <div>
    <img src={props.roduct.image} />
    <h4>{props.product.name}</h4>
    <h4>{props.product.price}</h4>
  </div>;
};

export default ProductItem;
