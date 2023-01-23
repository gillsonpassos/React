import "./App.css";

import { BrowserRouter, Routes, Route, Navgate } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
