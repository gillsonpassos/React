import "./App.css";
import Myform from "./components/Myform";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <Myform
        user={{
          name: "Flavio",
          email: "flavio@gmail.com",
          bio: "Sou um advogado",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
