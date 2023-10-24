import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gptReducer)
  const {movieNames, suggestedMovies} = gpt;
  return (
    <div className='m-3 p-3 position-absolute' style={{"top":"25%"}}>
      {movieNames?.map((eachItem, index)=>{
        return(
          <>
            <MovieList title={eachItem} movies={suggestedMovies[index]}/>
          </>
        )
      })}
    </div>
  )
}

export default GptMovieSuggestions