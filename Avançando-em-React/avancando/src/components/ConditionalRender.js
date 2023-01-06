import { useState } from "react";

function ConditionalRender() {
  const [x] = useState(false);

  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
    </div>
  );
}

export default ConditionalRender;
