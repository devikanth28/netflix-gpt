import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { auth } from './util/firebase'
import { addUser, removeUser } from './util/UserSlice'

const Body = () => {

    const dispatch = useDispatch();
   

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              // sign in
              const {uid, email, displayName} = user;
                dispatch(addUser({uid:uid, email:email, displayName:displayName}))
               
              
            } else {
              // User is signed out
              dispatch(removeUser())
              

            }
          });
    },[])

  return (
     <>
        <RouterProvider  router={appRouter}>

        </RouterProvider>
     </>
  )
}

export default Body