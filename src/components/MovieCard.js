import React from 'react'
import { ImageCDN } from './util/Constants'

const MovieCard = ({movie}) => {
  if(!movie?.poster_path){
    return null;
  }
  return (
    <div>
        <img alt='Movie Card' src={ImageCDN + (movie?.poster_path || movie?.profile_path)
}/>
    </div>
  )
}

export default MovieCard