import "./App.css";
import { useState } from "react";
import City from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  function showMessage() {
    console.log("Evento do Componente Pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const users = [
    { id: 1, name: "Gilson", job: "Programador", age: 56 },
    { id: 2, name: "Arly", job: "do lar", age: 52 },
    { id: 3, name: "Alice", job: "estudante", age: 5 },
  ];

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

      {/*Executar Função */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          job={user.job}
          age={user.age}
        />
      ))}
    </div>
  );
}

export default App;
