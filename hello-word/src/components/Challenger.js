import React from "react";

export const Challenger = () => {
  const a = 20;
  const b = 15;

  return (
    <div>
      <p> A: {a}</p>
      <p> B: {b}</p>
      <button onClick={() => console.log(a + b)}>Click para ver a soma</button>
    </div>
  );
};

export default Challenger;
