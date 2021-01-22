import { Description, ShopImage, Title } from "../styles";
import "./ProductsList";

const Home = () => {
  return (
    <div>
      <Title> Nature's Music</Title>
      <Description>Here where you make your birds happier</Description>
      <ShopImage
        src="https://thumbs.dreamstime.com/b/pet-shop-store-building-facade-red-brick-barrel-birdcage-fore-cat-dog-birds-butterfly-stickers-window-76971823.jpg"
        alt="pet shop"
      />
    </div>
  );
};

export default Home;
