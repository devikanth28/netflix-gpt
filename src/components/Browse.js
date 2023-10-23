import React from 'react'
import useNowPlyaingMovies from '../customhooks/useNowPlyaingMovies';
import usePopularMovies from '../customhooks/usePopularMovies';
import useTopRatedMovies from '../customhooks/useTopRatedMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

useNowPlyaingMovies();
usePopularMovies();
useTopRatedMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse