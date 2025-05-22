import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";
import MyNav from "./components/MyNav";

function App() {
  const [show, setShow] = useState(false);

  const showSelect = () => {
    setShow(true);
  };
  const movieSelect = () => {
    setShow(false);
  };
  return (
    <>
      <BrowserRouter>
        <MyNav show={show} showSelect={showSelect} movieSelect={movieSelect} />
        <Routes>
          <Route path="/" element={<Home show={show} />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
