const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou o Evento");
  };

  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>;
    } else {
      return <h1>Tambem posso renderizar isso!</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>
          Click aqui tambem
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              console.log("isso não deveria existir =)");
            }
          }}
        >
          clique aqui por favor
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
