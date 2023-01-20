//import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
//import { CounterContext } from "../context/CounterContext";

// 4 - refactorando hook
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Contador: {counter}</p>
      {/* 3 - alterando valor contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
