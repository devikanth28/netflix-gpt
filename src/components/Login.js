import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateCheckValidateData } from './util/Validate';
import { auth } from './util/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from './util/UserSlice';
import { Photo_Avatar } from './util/Constants';
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignIn, setSignIn] = useState(true);
    const [errorMessage, setErrorMeassage] = useState()

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);

    const handletoggle = () => {
        setSignIn(!isSignIn);

    }

    const handleButtonClick = () => {
        const message = validateCheckValidateData(emailRef?.current?.value, passwordRef?.current?.value, (!isSignIn ? nameRef?.current.value : null))
        console.log(message)
        setErrorMeassage(message)
        if (message) return;

        //sign in / sign up
        if (!isSignIn) {
            // sign up
            createUserWithEmailAndPassword(auth, emailRef?.current?.value, passwordRef?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: nameRef?.current?.value, photoURL: Photo_Avatar
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
                        // navigate("/browse")
                      }).catch((error) => {
                        // An error occurred
                        setErrorMeassage(error)
                      });
                    console.log(user, "user")
                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMeassage(errorCode + " " + errorMessage)
                });
        }

        else {
            // sign in
            signInWithEmailAndPassword(auth, emailRef?.current?.value, passwordRef?.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("sign in", user);
                    // navigate("/browse")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMeassage(errorCode + errorMessage)
                });
        }
    }
    return (
        <div>
            <Header />
            <div>
                <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_small.jpg"} alt="Nrtflix image" className='img-fluid' />
            </div>
            <form onSubmit={(e) => { e.preventDefault() }} className='bg-black position-absolute p-4 rounded-2 opacity-75' style={{ "top": "200px", "left": "40%" }}>
                <h3 className='text-white text-start mb-3'>{isSignIn ? "Sign In" : "Sign Up"}</h3>
                {!isSignIn && <input type="text" placeholder='Full Name' ref={nameRef} className='p-2 d-block mb-4 bg-dark rounded-3 border-0' />}
                <input type="text" placeholder='email' ref={emailRef} className='p-2 d-block mb-4 bg-dark rounded-3 border-0' />
                <input type="password" placeholder='password' ref={passwordRef} className={`p-2 d-block bg-dark rounded-3 border-0 ${!errorMessage ? "mb-5" : ""}`} />
                <p className='text-danger text-start'>{errorMessage}</p>
                <button className='p-2 btn w-100 mb-2' style={{ background: "#f10808" }} onClick={() => { handleButtonClick() }}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className='text-white text-start fs-14 cusrsor-pointer ' onClick={() => { handletoggle() }}>{isSignIn ? "New to Netflix ? Sign Up Now" : "already a User Sign In Now"}</p>
            </form>
        </div>
    )
}

export default Login