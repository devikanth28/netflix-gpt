import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  console.log("movies.topRatedMovies",movies.topRatedMovies)
  return (
    <div style={{marginTop:"-250px"}}>
      <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated Movies"} movies = {movies.topRatedMovies}/>
      <MovieList title={"Popular Movies"} movies = {movies.popularMovies}/>
    </div>
  )
}

export default SecondaryContainer