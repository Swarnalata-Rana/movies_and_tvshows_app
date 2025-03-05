"use client";
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import Search from "./Search";
import MovieCard from "./MovieCard";

const HomePage = () => {
    const { movies, fetchMovies } = useContext(MovieContext);

    if (movies.length === 0) {
        fetchMovies("avengers");
        // fetchMovies("batman");
        // fetchMovies("spiderman");
        // fetchMovies("the boss");
    }

    let moviecontent;
    if (movies.length > 0) {
        moviecontent = movies.map((movie) =>
            <MovieCard key={movie.imdbID} movie={movie}
            />);
    } else {
        moviecontent = <p className="no-movies-found">No movies found!</p>;
    }

    return (
        <>
            <Search onSearch={fetchMovies} />
            <div className="homepage-main">
                <div className="movie-list">{moviecontent}</div>
            </div>

        </>
    );
};

export default HomePage;
