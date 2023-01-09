import "./App.css";

import City from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";
import Container from "./components/Container";

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
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="branco" km={4500} newCar={false} />
      {/* fragment */}
      <Fragment propFragment="test" />
      {/* children */}
      <Container myValue="testing">
        <p>E este é o Conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
    </div>
  );
}

export default App;
