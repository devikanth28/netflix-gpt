import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlyaingMovies from '../customhooks/useNowPlyaingMovies';
import usePopularMovies from '../customhooks/usePopularMovies';
import useTopRatedMovies from '../customhooks/useTopRatedMovies';
import GPTSearch from './GPTSearchPage';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gptReducer.showGptSearch)

useNowPlyaingMovies();
usePopularMovies();
useTopRatedMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ?  <GPTSearch/> :
     
      <><MainContainer/>
      <SecondaryContainer/></>}
    </div>
  )
}

export default Browse