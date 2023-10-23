import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/util/Constants";
import { addNowPlayingMovies } from "../components/util/MovieSlice";

const useNowPlyaingMovies = () =>{
    const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies()
  },[])

  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }


}

export default useNowPlyaingMovies