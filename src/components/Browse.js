import React from 'react'
import useNowPlyaingMovies from '../customhooks/useNowPlyaingMovies';
import usePopularMovies from '../customhooks/usePopularMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

useNowPlyaingMovies();
usePopularMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse