import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/util/Constants"
import { addTopRatedMovies } from "../components/util/MovieSlice";

const useTopRatedMovies = () =>{

    const dispatch = useDispatch();

    useEffect(()=>{
        getTopRatedMovies();
    },[]);

    const getTopRatedMovies  = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }
}

export default useTopRatedMovies