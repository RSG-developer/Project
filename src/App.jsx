import './App.css'
import Netflixseries from './components/Netflixseries'
import Navbar from './components/Navbar'
import Login from './components/login'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HindiMovies from './components/HindiMovies';
import Api from './components/Api';
function App() {


  return (

    <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Netflixseries />} />
        <Route path="/news" element={<Api />} />
        <Route path="/bollywood" element={<HindiMovies />} />
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
