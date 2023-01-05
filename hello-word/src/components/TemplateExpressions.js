const TemplateExpressions = () => {
  const name = "Gilson";
  const date = {
    age: 56,
    job: "Programer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como {date.job}</p>
    </div>
  );
};

export default TemplateExpressions;
