import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLanguage } from './util/ConfigSlice';
import { LOGO, Photo_Avatar, SUPPORTED_LANGUAGES } from './util/Constants';
import { auth } from './util/firebase';
import { toggleSearchView } from './util/GptSlice';
import { addUser, removeUser } from './util/UserSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gptReducer.showGptSearch)
    const handleSignOut = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
    }

    useEffect(()=>{
     const unSubscribe =  onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // sign in
            const {uid, email, displayName} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}))
             navigate("/browse")
            
          } else {
            // User is signed out
            dispatch(removeUser())
            navigate("/")

          }
        });

        //unsubscribe when the component is unmoutnt
        return() => unSubscribe()
  },[])

const handleGptSearch = () =>{
  dispatch(toggleSearchView())
  // dispatch(addSuggestedMovies())
}

const handleLanguageChange = (value) =>{
  dispatch(changeLanguage(value))
} 
  return (
    <div className='d-flex justify-content-between position-absolute w-100'>
      <div>
        <img src={LOGO} alt='Logo' width={"150px"} background={"repeating-radial-gradient"} />
      </div>
      {user && 
      <div className='float-end me-3 mt-2'>
       {showGptSearch &&  <select className='p-2 bg-dark rounded-2 border-0 text-white' onChange={(e)=>{handleLanguageChange(e.target.value)}}>
          {SUPPORTED_LANGUAGES?.map((eachLan)=>{
            return(

              <option value={eachLan.identifier}>{eachLan.name}</option>
            )
          })}
          
        </select>}
        <button className='p-2 bg-warning rounded-2 border-0 mx-3' onClick={()=>{handleGptSearch()}}>{!showGptSearch ? "GPT Search" :"Go Home"}</button>
        <img src={Photo_Avatar} alt='user icon' style={{"height":"36px"}}/>
        <button className='btn btn-danger rounded-2 p-2' onClick={()=>{handleSignOut()}}>Sign out</button>
      </div>}
    </div>
  )
}

export default Header