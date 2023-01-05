const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou o Evento");
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
    </div>
  );
};

export default Events;
