import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
       // Sign up logic
      createUserWithEmailAndPassword(auth,
      email.current.value,
      password.current.value
      )
      .then((userCredential) => {
      // Signed up successfully, now update the profile
      const user = userCredential.user;

      updateProfile(user, {
      displayName: name.current.value , 
      photoURL: USER_AVATAR
      }).
      then(async () => {
        const {uid, email, displayName , photoURL} = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email, 
                displayName: displayName, 
                photoURL: photoURL})
            ); 
      }).catch((error) => {
        setErrorMessage(error.message);
      });

      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + "-" + errorMessage)
      });

    }else{

      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    });

    }
  }

  return (
    <div>
      <Header />
      <div className='fixed'>
        <img
        className='h-screen w-screen object-cover'
        alt='logo'
        src={BG_URL}
        />
      </div>

      <form className='w-full md:w-3/12 absolute p-12 bg-black/80 text-white my-60 mx-auto right-0 left-0 rounded-xl' 
      onSubmit={(e) => e.preventDefault() }
      >
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>

        { !isSignInForm && (
        <input type='text' placeholder='Full Name' ref={name} 
        className='p-4 my-4 w-full bg-gray-700 text-black' />
          )
        }

        <input type='text' placeholder='Email Address' ref={email}
        className='p-4 my-4 w-full bg-gray-700 text-black' />

        <input type='text' placeholder='Password' ref={password}
        className='p-4 my-4 w-full bg-gray-700 text-black' />

        <p className='text-red-600 font-bold text-lg py-2'> {errorMessage} </p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> 
        {isSignInForm ? "Sign In" : "Sign Up"} 
        </button>

        <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
        </p>

      </form>

    </div>
  )
}

export default Login;
