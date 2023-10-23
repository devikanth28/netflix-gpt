import React from 'react'
import { ImageCDN } from './util/Constants'

const MovieCard = ({movie}) => {
  return (
    <div>
        <img alt='Movie Card' src={ImageCDN + (movie?.poster_path || movie?.profile_path)
}/>
    </div>
  )
}

export default MovieCard