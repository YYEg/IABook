import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import FilmList from "../components/FilmList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchMoviemaker, fetchFilm, fetchGenres } from "../http/filmAPI";
import Pages from "../components/Pages";
import { WATCHLIST_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import GenreBar from "../components/GenreBar";

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
    <div className="h-screen container mx-auto w-7/8 m-auto bg-white shadow-2xl rounded-2xl border-t-8 border-violet-200">
      <div>
        <GenreBar />
        {/* <FilmList /> */}
        {/* <Pages /> */}
      </div>
    </div>
  );
});

export default Cinema;
