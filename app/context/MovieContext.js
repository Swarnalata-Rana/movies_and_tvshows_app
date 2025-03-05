"use client";

import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);

    function fetchMovies(query) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=9ac3240b`)
            .then(res => res.json())
            .then(data => {
                console.log("API Response:", data);
                if (data.Response === "True") {
                    setMovies(data.Search);
                } 
            })
            // .catch(error => console.error("Network error:", error));
    }

    return (
        <MovieContext.Provider value={{ movies, fetchMovies }}>
            {children}
        </MovieContext.Provider>
    );
};
