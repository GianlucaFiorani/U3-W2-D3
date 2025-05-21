import { Container } from "react-bootstrap";

import { useState } from "react";
import PageTitle from "./PageTitle";
import MyNav from "./MyNav";
import MyFooter from "./MyFooter";
import MovieCarousel from "./MovieCarousel";

const Home = (props) => {
  const [change, setChange] = useState(true);
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const carouselChange = () => {
    setChange(!change);
  };
  const searchSubmit = (s) => {
    setSearch(s);
  };

  const showSelect = () => {
    setShow(true);
  };
  const movieSelect = () => {
    setShow(false);
  };

  return (
    <>
      <Container className="px-2">
        <MyNav show={show} showSelect={showSelect} movieSelect={movieSelect} />
        <PageTitle show={show} search={searchSubmit} changeType={carouselChange} />

        <MovieCarousel show={show} id={"batman"} change={change} />

        <MyFooter />
      </Container>
    </>
  );
};

export default Home;
