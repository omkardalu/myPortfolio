import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./layout/Header/Header.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layout/footer/Footer.jsx";
import Blog from "./pages/Blog.jsx";
function App() {
  return (
    <section
      id="Portfolio"
      className="relative flex min-h-screen flex-col justify-between bg-gradient-to-br from-[#d25eb1] to-[#f3c190] text-[#250d23]"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
