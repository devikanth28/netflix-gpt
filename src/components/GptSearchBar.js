import React from 'react'
import { useSelector } from 'react-redux'
import Language from './util/langaugeconstants'

const GptSearchBar = () => {
    const selectedLanguage = useSelector(store => store.configLanguage.language)
  return (
      <>
    <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"} alt="Nrtflix image" className='img-fluid' />  
    <div className='mx-3 position-absolute' style={{paddingTop:"10%",top:0,left:"34%",width:"30%"}}>
        <form className='d-flex bg-dark p-2'>
            <input type="text" className='p-2 form-control w-100 me-2' placeholder={Language[selectedLanguage].gptSearchPlaceholder}/>
            <button className='p-2 text-white rounded-2 border-0' style={{background:"#bf431c"}}>{Language[selectedLanguage].search}</button>
        </form>
    </div>
      </>
  )
}

export default GptSearchBar