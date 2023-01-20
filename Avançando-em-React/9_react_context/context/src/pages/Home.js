//import { useContext } from "react";
import ChangeCounter from "../components/ChangeCounter";
//import { CounterContext } from "../context/CounterContext";

// 4 - refactorando hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do Contador: {counter}</p>
      {/* 3 - alterando valor contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
