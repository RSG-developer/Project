import './App.css'
import Netflixseries from './components/Netflixseries'
import Navbar from './components/Navbar'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HindiMovies from './components/HindiMovies';
import Api from './components/Api';
import React,{ useState } from 'react';

function App() {

  const [searchQuery,setSearchQuery]=useState("");

  return (
    <>
    <BrowserRouter>
      <Navbar  searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
     <main>
      <Routes>
        <Route path="/" element={<Netflixseries  searchQuery={searchQuery}/>} />
        <Route path="/bollywood" element={<HindiMovies searchQuery={searchQuery} />} />
        <Route path="/news" element={<Api />} />
      </Routes>
    </main>
    </BrowserRouter>
   
    </>
  )
}

export default App
