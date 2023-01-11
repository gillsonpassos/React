import "./App.css";
import MyComponent from "./components/MyComponent";

import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("GILSON");

  const redTitle = false;

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

      {/* CSS Inline dinamico*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinamico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinamico
      </h2>
      <h2
        style={
          name === "GILSON" ? { color: "green", backgroundColor: "#000" } : null
        }
      >
        Teste Nome
      </h2>
      {/* classe dinamica */}

      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica
      </h2>
    </div>
  );
}

export default App;
