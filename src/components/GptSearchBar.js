import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from './util/Constants'
import { addSuggestedMovies } from './util/GptSlice'
import Language from './util/langaugeconstants'
// import OpenAI from 'openai'
import Openai from './util/Openai'

const GptSearchBar = () => {

  const selectedLanguage = useSelector(store => store.configLanguage.language);
  const dispatch = useDispatch();

  const searchText = useRef();

  const searchMovieTMDB = async(movieName) => {
    const data = await  fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  }

  const handleGPTSearchClick = async() => {

  //   const gptQuery =
  //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
  //   searchText.current.value +
  //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  // const gptResults = await Openai.chat.completions.create({
  //   messages: [{ role: "user", content: gptQuery }],
  //   model: "gpt-3.5-turbo",
  // });

  //   console.log(gptResults.choices)

    const suggestedGptResults =  "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";

    const gptMovies = suggestedGptResults.split(", ") 
    console.log(gptMovies)

    const promiseArray = gptMovies.map(eachMovie => searchMovieTMDB(eachMovie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults,"tmdbResults")
    dispatch(addSuggestedMovies({movieNames:gptMovies,movieResults:tmdbResults}))
  }

  return (
    <>
      <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"} alt="Nrtflix image" className='img-fluid' />

      <div className='mx-3 position-absolute' style={{ paddingTop: "10%", top: 0, left: "34%", width: "30%" }}>
        <form className='d-flex bg-dark p-2' onSubmit={(e) => e.preventDefault()}>
          <input type="text" ref={searchText} className='p-2 form-control w-100 me-2' placeholder={Language[selectedLanguage].gptSearchPlaceholder} />
          <button className='p-2 text-white rounded-2 border-0' style={{ background: "#bf431c" }} onClick={(e) => {handleGPTSearchClick()}}>{Language[selectedLanguage].search}</button>
        </form>
      </div>
    </>
  )
}

export default GptSearchBar