import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Dropdown } from "react-bootstrap";

const GenreBar = observer(() => {
  const { film } = useContext(Context);

  const getAllFilms = () => {
    film.setSelectedGenre("all");
    film.setSelectedMoviemaker("all");
  };

  return (
    <div className="my-4 text-center border-b-2">
      <h1 className="text-3xl font-bold text-blue-400 hover:text-violet-400 hover:-translate-y-1 transition mb-3">
        Жанры
      </h1>
      <Dropdown className="mb-4 ">
        <Dropdown.Toggle
          id="dropdown-basic"
          className="text-primary p-3 w-full bg-white rounded-lg text-xl text-blue-400 font-bold text-blue-400 hover:text-violet-400 hover:-translate-y-1 transition hover:border hover:border-violet-400 "
        >
          {film.selectedGenre === "all" ? "All" : film.selectedGenre.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className="w-full">
          <Dropdown.Item
            className="p-3 bg-white rounded-lg text-xl text-blue-400 font-bold text-blue-400 hover:text-violet-400 hover:-translate-y-1 transition hover:border hover:border-violet-400 "
            onClick={getAllFilms}
          >
            All
          </Dropdown.Item>
          {film.genres.map((genre) => (
            <Dropdown.Item
              className="p-3 bg-white rounded-lg text-xl text-blue-400 font-bold text-blue-400 hover:text-violet-400 hover:-translate-y-1 transition hover:border hover:border-violet-400 "
              key={genre.id}
              onClick={() => film.setSelectedGenre(genre)}
            >
              {genre.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
});

export default GenreBar;
