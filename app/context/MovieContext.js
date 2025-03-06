// "use client";
// import React, { createContext, useState } from "react";

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//     const [movies, setMovies] = useState([]);

//     function fetchMovies(query) {
//         fetch(`https://www.omdbapi.com/?s=${query}&apikey=9ac3240b`)
//             .then(res => res.json())
//             .then(data => {
//                 // console.log("API Response:", data);
//                 if (data.Response === "True") {
//                     setMovies(data.Search);
//                 }
//                 else {
//                     setMovies([]);
//                 }
//             })
//         .catch(error => console.error("Sorry Network Error:", error));
//     }

//     return (
//         <>
//             <MovieContext.Provider value={{ movies, fetchMovies }}>
//                 {children}
//             </MovieContext.Provider>
//         </>
//     );
// };

"use client";
import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    function fetchMovies(query) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=9ac3240b`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                }
            })
            .catch(error => console.error("Some Network Error:", error));
    }

    function fetchMovieDetails(imdbID) {
        fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=9ac3240b`)
            .then(res => res.json())
            .then(data => {
                if (data.Response === "True") {
                    setSelectedMovie(data);
                }
            })
            .catch(error => console.error("Some Network Error:", error));
    }

    return (
        <MovieContext.Provider value={{ movies, fetchMovies, selectedMovie, fetchMovieDetails }}>
            {children}
        </MovieContext.Provider>
    );
};
