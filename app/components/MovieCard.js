import React from "react";
import Rating from "./Rating";
import Detailing from "./Detailing";

const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="moviecard-main">
                <img />
                <div>
                    <p>title</p>
                    <p>year</p>
                </div>
                <div className="detailing-rating">
                    <Rating />
                    <Detailing />
                </div>

            </div>
        </>
    );
};

export default MovieCard;