import React from "react";
import Rating from "./Rating";
import Detailing from "./Detailing";

const MovieCard = ({ movie}) => {
    return (
        <div className="moviecard-main">
            <img src={movie.Poster} width="150" />
            <div>
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
            </div>
            <div className="detailing-rating">
                <button>Rating<Rating /></button>
                <button>Detailing<Detailing /></button>
            </div>
        </div>
    );
};

export default MovieCard;
