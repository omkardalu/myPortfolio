import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header/Header.jsx';
import HeroSection from './components/HeroSection/Hero.jsx';
function App() {

  return (
    <div id='Portfolio'>
      <Header />
      <Routes>
        <Route path='/' element={<HeroSection />} />
      </Routes>
    </div>
  )
}

export default App
