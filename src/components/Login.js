import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);

    const handleSignInForm = () =>{
        setSignIn(!isSignIn)
    }
  return (
    <div>
        <Header/>
        <div>
            <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"} alt="Nrtflix image" className='img-fluid'/>
        </div>
        <form className='bg-black position-absolute p-4 rounded-2 opacity-75' style={{"top":"200px","left":"40%"}}>
            <h3 className='text-white text-start mb-3'>{isSignIn ? "Sign In" : "Sign Up"}</h3>
            {!isSignIn && <input type="text" placeholder='Full Name' className='p-2 d-block mb-4 bg-dark rounded-3 border-0'/>}
            <input type="text" placeholder='email' className='p-2 d-block mb-4 bg-dark rounded-3 border-0'/>
            <input type="password" placeholder='password' className='p-2 d-block mb-5 bg-dark rounded-3 border-0'/>
            <button className='p-2 btn w-100 mb-2' style={{background:"#f10808"}}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='text-white text-start fs-14 cusrsor-pointer ' onClick={()=>{handleSignInForm()}}>{isSignIn ? "New to Netflix ? Sign Up Now" : "already a User Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login