import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/keyboards" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
