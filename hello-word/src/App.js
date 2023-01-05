// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

// styles/Css
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1>Hello World React</h1>
      <FirstComponent />
      <h2>Emmet Funcionou</h2>
      <p className="title">O Grande Desafio</p>
      <TemplateExpressions />
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
