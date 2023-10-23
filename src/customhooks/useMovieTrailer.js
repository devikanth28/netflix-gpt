import { useEffect, useState } from "react";
import { API_OPTIONS } from "../components/util/Constants";

const useMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null); 
    // const movieId = props.movieId;
    console.log("Movie id",movieId)
    useEffect(() => {
        getMovieVideos();
    }, [movieId]); 

    // Fetch trailer
    const getMovieVideos = async () => {
        try {
            const data = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                API_OPTIONS
            );
            const json = await data.json();
            console.log("json", json);

            if (json.results && json.results.length > 0) {
                const filterData = json.results.filter(video => video.type === "Trailer");
                const singletrailer = filterData.length ? filterData[0] : json.results[0];
                setTrailer(singletrailer);
            } else {
                setTrailer(null); 
            }
        } catch (error) {
            console.error("Error fetching movie videos:", error);
        }
    };

    return [trailer];
};

export default useMovieTrailer;
