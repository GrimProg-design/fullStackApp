import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MorePage from "./components/MorePage";
import Header from "./components/Header"
import Products from "./components/Products1";
import AddProduct from "./components/AddProduct"

function App() {
  return (
    <div className="main">
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/products" element={<Products />}/>
        <Route path="products/addProduct" element={<AddProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
