import "./App.css";
import Timeline from "./components/Timeline";
import { GlobalStyle } from "./styles";
import { Title } from "./styles";

function App() {
  return (
    <div>
      <Title>Mariam's Timeline</Title>
      <GlobalStyle />
      <Timeline />
    </div>
  );
}

export default App;
