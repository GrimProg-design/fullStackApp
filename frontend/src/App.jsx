import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MorePage from "./components/MorePage";
import Header from "./components/Header"
import Products from "./components/Tasks";
import AddProduct from "./components/AddProduct"
import { Navigate } from "react-router-dom";

function App() {
  function RootNavigate() {
    return <Navigate to="/home" replace/>
  }

  return (
    <div className="main">
      <Header/>
      <Routes>
        <Route path="/" element={<RootNavigate/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/more" element={<MorePage />} />
        <Route path="/products" element={<Products />}/>
        <Route path="products/addProduct" element={<AddProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
