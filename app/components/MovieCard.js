// import React from "react";
// import Rating from "./Rating";
// import Detailing from "./Detailing";

// const MovieCard = ({ movie }) => {
//     return (
//         <>
//             <div className="moviecard-main">
//                 <img src={movie.Poster} width="150" />
//                 <div>
//                     <p>{movie.Title}</p>
//                     <p>{movie.Year}</p>
//                 </div>
//                 <div className="detailing-rating">
//                     <button className="rating-btn">Rating<Rating /></button>
//                     <button className="detailing-btn">Detailing<Detailing /></button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default MovieCard;

import React, { useContext, useState } from "react";
import Rating from "./Rating";
import Detailing from "./Detailing";
import { MovieContext } from "../context/MovieContext";

const MovieCard = ({ movie }) => {
    const { fetchMovieDetails } = useContext(MovieContext);
    const [showModal, setShowModal] = useState(false);

    const handleDetailClick = () => {
        fetchMovieDetails(movie.imdbID);
        setShowModal(true);
    };

    return (
        <>
            <div className="moviecard-main">
                <img src={movie.Poster} width="150" />
                <div>
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                </div>
                <div className="detailing-rating">
                    <button className="rating-btn">Rating<Rating /></button>
                    <button className="detailing-btn" onClick={handleDetailClick}>Detailing</button>
                </div>
            </div>
            {showModal && <Detailing onClose={() => setShowModal(false)} />}
        </>
    );
};

export default MovieCard;
