import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layout/footer/Footer.jsx";
import Blog from "./pages/Blog.jsx";
function App() {
  return (
    <section id="Portfolio" className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-[#cf81c1] to-[#ffd8b1]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
