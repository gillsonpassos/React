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
      {/* inline css */}
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma Inline
      </p>
      <p
        style={{
          color: "magenta",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Este elemento foi estilizado de forma Inline
      </p>
    </div>
  );
}

export default App;
