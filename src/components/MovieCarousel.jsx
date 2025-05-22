import { Component } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class MovieCarousel extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.fetchMovies(this.props.id);
    }
  }

  render() {
    console.log(this.props.movies);
    return (
      <Container className="movie-container mt-5">
        <h2>{`You are Searching: ${this.props.id} `} </h2>
        {this.props.isLoading && this.props.id !== "" ? (
          <div>
            {" "}
            Loading... <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          <Row
            className={`movie-row mt-3 py-3 ${this.props.change && "flex-nowrap"}`}
            xs={!this.props.change && 1}
            sm={!this.props.change && 2}
            lg={!this.props.change && 3}
            xl={!this.props.change && 6}
          >
            {this.props.movies === undefined
              ? this.props.id !== "" && <h1 className="text-danger text-center">Not Found</h1>
              : this.props.show
              ? this.props.movies
                  .filter((movie) => movie.Type !== "movie")
                  .map((movie) => (
                    <Col className="my-1" key={`movie-${movie.imdbID}`}>
                      <div className="d-flex justify-content-center">
                        <Link to={"/movie-details/" + movie.imdbID}>
                          <Card style={this.props.change ? { width: "17rem" } : null} data-bs-theme="dark">
                            <Card.Img variant="top" src={movie.Poster} />
                          </Card>
                        </Link>
                      </div>
                    </Col>
                  ))
              : this.props.movies
                  .filter((movie) => movie.Type === "movie")
                  .map((movie) => (
                    <Col className="my-1" key={`movie-${movie.imdbID}`}>
                      <div className="d-flex justify-content-center">
                        <Link to={"/movie-details/" + movie.imdbID}>
                          <Card style={this.props.change ? { width: "17rem" } : null} data-bs-theme="dark">
                            <Card.Img variant="top" src={movie.Poster} />
                          </Card>
                        </Link>
                      </div>
                    </Col>
                  ))}
          </Row>
        )}
      </Container>
    );
  }
}
export default MovieCarousel;
