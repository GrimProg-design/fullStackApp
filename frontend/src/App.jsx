import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import MorePage from "./components/MorePage";
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </>
  );
}

export default App;
