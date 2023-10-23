import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/util/Constants";
import { addPopularMovies } from "../components/util/MovieSlice";
const usePopularMovies = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies()
    },[])

    const getPopularMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/person/popular?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }
}
export default usePopularMovies