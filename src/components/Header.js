import { signOut } from 'firebase/auth';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from './util/firebase';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
    const handleSignOut = () =>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
    }
  return (
    <div className=''>
      <div className='position-absolute'>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='Logo' width={"150px"} background={"repeating-radial-gradient"} />
      </div>
      {user && 
      <div className='float-end me-3'>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt='user icon' style={{"height":"36px"}}/>
        <button className='btn btn-danger rounded-2 p-2' onClick={()=>{handleSignOut()}}>Sign out</button>
      </div>}
    </div>
  )
}

export default Header