import "./styles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import Checkout from "./components/Checkout";
import ProductList from "./components/ProductList";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
