// "use client";
// import React from "react";

// const Detailing = () => {

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <button className="close-btn" >Close</button>
//                 <h2>Title:</h2>
//                 <img width="200" />
//                 <p>Plot: </p>
//                 <p>Year:</p>
//                 <p>IMDB Rating: </p>
//                 <p>User Rating:</p>
//             </div>
//         </div>
//     );
// };

// export default Detailing;
"use client";
import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const Detailing = ({ onClose }) => {
    const { selectedMovie } = useContext(MovieContext);

    if (!selectedMovie) {
        return null;
    }

    return (
        <>
            <div className="detailing-main">
                <div className="detailing-content">
                    <button className="close-btn" onClick={onClose}>Close</button>
                    <h2 className="detailing-title">Title: {selectedMovie.Title}</h2>
                    <img className="detailing-img" src={selectedMovie.Poster} width="200" />
                    <p className="detailing-pTag">Plot: {selectedMovie.Plot}</p>
                    <p className="detailing-pTag">Year: {selectedMovie.Year}</p>
                    <p className="detailing-pTag">IMDB Rating: {selectedMovie.imdbRating}</p>
                    {/* <p className="detailing-pTag">User Rating: {selectedMovie.Ratings?.[1]?.Value || "N/A"}</p> */}
                </div>
            </div>
        </>
    );
};

export default Detailing;
