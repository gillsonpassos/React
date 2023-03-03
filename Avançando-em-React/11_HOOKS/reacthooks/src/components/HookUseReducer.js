import { useReducer } from "react";

const HookUseReducer = () => {
  // 1 Começando com useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  return (
    <div>
      <h2>useReducer</h2>
      <p>Numero: {number}</p>
      <button onClick={dispatch}>Aterar Numero!</button>
      <hr />
    </div>
  );
};

export default HookUseReducer;
