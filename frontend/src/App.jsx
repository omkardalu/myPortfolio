import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layout/footer/Footer.jsx";
function App() {
  return (
    <div id="Portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
