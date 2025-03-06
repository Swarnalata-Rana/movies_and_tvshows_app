"use client";
import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import Search from "./Search";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HomePage = () => {
    const { movies, fetchMovies } = useContext(MovieContext);

    // if (movies.length === 0) {
    //     fetchMovies("avengers");
    // }

    useEffect(() => {
        fetchMovies("avengers");
    }, []);

    let moviecontent;
    if (movies.length > 0) {
        moviecontent = movies.map((movie) =>
            <MovieCard
                key={movie.imdbID}
                movie={movie}
            />);
    } else {
        moviecontent = <p className="no-movies-found">Oops! Sorry, no movies found.</p>;
    }

    return (
        <>
            <Navbar />
            <Search onSearch={fetchMovies} />
            <div className="homepage-main">
                <div className="movie-list">{moviecontent}</div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;

