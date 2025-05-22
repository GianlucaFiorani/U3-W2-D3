import { useParams } from "react-router-dom";
import CommentArea from "./CommentArea";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [response, setResponse] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchMovies = async () => {
    console.log("fetching...");
    setIsLoading(true);
    try {
      const response = await fetch(`http://www.omdbapi.com/?i=${params.movieId}&apikey=f5beaab6&plot=full`);
      if (response.ok) {
        const movieData = await response.json();
        setResponse(movieData.Response);
        setMovies(movieData);
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
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <img src={movies.Poster} alt="" width={"100%"} />
        </Col>
        <Col>
          <div className="info-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <h3 className="mb-0">{movies.Title}</h3>
              {movies.Director !== "N/A" && <span>{`by ${movies.Director}`}</span>}
            </div>
            <span className=" fw-semibold">{`${movies.Year} • ${movies.Runtime} • ${movies.Rated} • ${movies.Genre}`}</span>
            <p className="mt-2 font-monospace">{movies.Plot}</p>
            <span>{`With: ${movies.Actors}`}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <CommentArea asin={params.movieId} />
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
