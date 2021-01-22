import "./App.css";
import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

const theme = {
  mainColor: "maroon",
  backgroundColor: "#ffc89f",
  color: "maroon",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductsList />
    </ThemeProvider>
  );
}

export default App;
