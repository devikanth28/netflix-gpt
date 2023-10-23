import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log("Movies", movies)
    return (
        <div className='p-3 bg-black'>
            <div>
                <h3 className='text-start text-white'>{title}</h3>
            </div>
            <div className='d-flex gap-3 overflow-x-scroll'>
                {movies?.map((eachMovie) => {
                    return (
                        <>
                            <MovieCard key ={eachMovie.id} movie={eachMovie}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default MovieList