import { useState } from "react";

const HookUseState = () => {
  // 1 useState
  let userName = "João";

  const [name, setName] = useState("Gilson");

  const changeNames = () => {
    userName = "João Souza";

    setName("Gilson Passos");
  };

  return (
    <div>
      {/* 1 useState */}
      <h2>useState</h2>
      <p>variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar Nomes!</button>
    </div>
  );
};

export default HookUseState;
