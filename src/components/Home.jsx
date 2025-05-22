import { Container } from "react-bootstrap";

import { useState } from "react";
import PageTitle from "./PageTitle";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import MovieCarousel from "./MovieCarousel";

const Home = (props) => {
  const [change, setChange] = useState(true);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [response, setResponse] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const carouselChange = () => {
    setChange(!change);
  };
  const searchSubmit = (s) => {
    setSearch(s);
  };

  const fetchMovies = async (id) => {
    console.log("fetching...");
    setIsLoading(true);
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f5beaab6&s=" + id);
      if (response.ok) {
        const movieData = await response.json();
        setResponse(movieData.Response);
        setMovies(movieData.Search);
      } else {
        throw new Error("Errore nel caricamento film");
      }
    } catch (error) {
      console.log(error);
      setHasError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container className="px-2">
        <PageTitle show={props.show} search={searchSubmit} changeType={carouselChange} />

        <MovieCarousel isLoading={isLoading} movies={movies} fetchMovies={fetchMovies} show={props.show} id={search} change={change} />

        <MyFooter />
      </Container>
    </>
  );
};

export default Home;
