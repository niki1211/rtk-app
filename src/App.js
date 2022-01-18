import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import MovieDetail from "./components/movieDetail/movieDetail";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imbdID" element={<MovieDetail />} />
          <Route element={<PageNotFound />} />
          </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
