import "./App.css";
import products from "./products";

function App() {
  const productList = products.map((product) => (
    <div>
      <img src={product.image} />
      <h4>{product.name}</h4>
      <h4>{product.price}</h4>
    </div>
  ));
  return (
    <div className="style">
      <header className="home-header">
        <h1> Nature's Music</h1>
        <h2>Here where you can make your birds happier</h2>
        <img
          className="img-style"
          src="https://thumbs.dreamstime.com/b/pet-shop-store-building-facade-red-brick-barrel-birdcage-fore-cat-dog-birds-butterfly-stickers-window-76971823.jpg"
          width="450"
          hight="450"
          alt="pet shop"
        ></img>
      </header>
      <div>
        <body>{productList}</body>
      </div>
    </div>
  );
}

export default App;
