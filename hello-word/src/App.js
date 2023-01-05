// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
// Css
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello World React</h1>
      <FirstComponent />
      <h2>Emmet Funcionou</h2>
      <p className="title">O Grande Desafio</p>
      <TemplateExpressions />
      <MyComponent />
    </div>
  );
}

export default App;
