import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Footer from './components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Press from './pages/press';
import OffcanvasNavbar from './components/navbar';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center">

      <BrowserRouter>
        <OffcanvasNavbar />
        <Routes>
          <Route exact path='/' element={<div data-aos="fade-up">< Home /></div>}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/press' element={< Press />}></Route>
        </Routes>
        <div data-aos="fade-up"
          data-aos-duration="3000"><Footer /></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
