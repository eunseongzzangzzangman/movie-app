import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="d-flex m-3" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
