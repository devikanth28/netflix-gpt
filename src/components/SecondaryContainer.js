import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  console.log("movies.popularMovies",movies.popularMovies)
  return (
    <div style={{marginTop:"-250px"}}>
      <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies = {movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies = {movies.popularMovies}/>
    </div>
  )
}

export default SecondaryContainer