import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/*CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/*CSS COMPONENTE */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
    </div>
  );
}

export default App;
