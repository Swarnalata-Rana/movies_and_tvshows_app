import React from 'react'
import HomePage from './components/HomePage'
import { MovieProvider } from './context/MovieContext'

const page = () => {
    return (
        <>
            <MovieProvider>
                <HomePage />
            </MovieProvider>
        </>
    )
}

export default page
