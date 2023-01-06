import "./App.css";

import City from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/*imagem em assets*/}
      <div>
        <img src={City} alt="cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      <ShowUserName name="Gilson" />
      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" />
    </div>
  );
}

export default App;
