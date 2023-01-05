const Events = () => {
  const handleMyEvent = () => {
    console.log("Ativou o Evento");
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Click aqui!</button>
      </div>
    </div>
  );
};

export default Events;
