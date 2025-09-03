import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img
        alt='logo'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg' 
        />
      </div>

      <form className='w-3/12 absolute p-12 bg-black/80 text-white my-60 mx-auto right-0 left-0 rounded-xl'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>

        { !isSignInForm && (
          <input type='text' placeholder='Full Name' 
        className='p-4 my-4 w-full bg-white text-black' />
          )
        }

        <input type='text' placeholder='Email Address' 
        className='p-4 my-4 w-full bg-white text-black' />

        <input type='text' placeholder='Password' 
        className='p-4 my-4 w-full bg-white text-black' />

        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'> 
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
