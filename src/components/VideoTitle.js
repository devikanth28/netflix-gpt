import React from 'react'
import PlayIcon from "./images/icons8-play-50.png";
import InfoIcon from "./images/icons8-info-50.png";
const VideoTitle = ({title, overview}) => {
  return (
    <div className='px-5 text-start position-absolute text-white aspet-ratio' style={{"margin-top":"25%"}}>
        <h1>{title}</h1>
        <p className='w-25'>{overview}</p>
        <div>
            <button className=' border-0 fs-4 px-5 py-2 rounded-2 text-black text-dark-emphasis text-white'><img src={PlayIcon} alt="play icon" className='me-3'/>Play</button>
            <button className='bg-opacity-75 border-0 fs-4 px-5 py-2 rounded-2 text-black text-dark-emphasis text-white ms-3 fs-4'><img src={InfoIcon} alt="info icon"/>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle