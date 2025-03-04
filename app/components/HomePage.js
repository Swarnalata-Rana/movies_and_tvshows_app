import React from 'react'
import MovieCard from './MovieCard';
import Search from './Search';

const HomePage = () => {
    return (
        <>
            <Search />
            <div className="homepage-main">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
            <div className='no-movies-found '>No found page</div>

        </>
    );
};

export default HomePage;