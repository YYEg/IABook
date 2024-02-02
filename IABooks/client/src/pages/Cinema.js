import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import GenreBar from "../components/GenreBar";
import MoviemakerBar from "../components/MoviemakerBar";
import FilmList from "../components/FilmList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchMoviemaker, fetchFilm, fetchGenres } from "../http/filmAPI";
import Pages from "../components/Pages";
import { WATCHLIST_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import heart from "../assets/icons8-heart-30.png";

const Cinema = observer(() => {
  const { film } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGenres().then((data) => film.setGenres(data));
    fetchMoviemaker().then((data) => film.setMoviemakers(data));
    fetchFilm(null, null, 1, 9).then((data) => {
      film.setFilms(data.rows);
      film.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    if (film.selectedGenre === "all") {
      fetchFilm(null, film.selectedMoviemaker.id, film.page, 9).then((data) => {
        film.setFilms(data.rows);
        film.setTotalCount(data.count);
      });
    } else {
      fetchFilm(
        film.selectedGenre.id,
        film.selectedMoviemaker.id,
        film.page,
        9
      ).then((data) => {
        film.setFilms(data.rows);
        film.setTotalCount(data.count);
      });
    }
  }, [film.page, film.selectedGenre, film.selectedMoviemaker]);

  return (
    <div className="container mt-3">
      <Row className="mt-3">
        <Col md={3}></Col>
        <Col md={9}>
          <FilmList />
          <Pages />
        </Col>
      </Row>
    </div>
  );
});

export default Cinema;
