import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Collections from "./pages/Collections";
import Products from "./pages/Products";
import Product from "./pages/ProductPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path="/collections/:category" element={<Products />} />
        <Route
          path="/collections/:category/products/:slug"
          element={<ProductPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
