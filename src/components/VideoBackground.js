import React, { useEffect, useState } from 'react'
import useMovieTrailer from '../customhooks/useMovieTrailer'
import { API_OPTIONS } from './util/Constants'

const VideoBackground = ({ movieId }) => {

    // const [trailer, setTrailer] = useState(undefined);
    console.log("Mid",movieId)
    const [trailer] = useMovieTrailer(movieId)
    // useEffect(() => {
    //     getMovieVideos();
    // }, [])

    // //fetch trailer
    // const getMovieVideos = async () => {
    //     const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
    //     const json = await data.json();
    //     console.log("json", json);
    //     const filterData = json?.results?.filter(video => video.type === "Trailer");
    //     const singletrailer = filterData.length ? filterData[0] : json.results[0]
    //     setTrailer(singletrailer)
    //     // console.log("trailer", trailer)
    // }

    return (
        <div className='w-100'><iframe className='w-100 aspect-ratio'
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe></div>
    )
}

export default VideoBackground