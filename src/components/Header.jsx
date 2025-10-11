import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });

  };

   // kind of like a event listen, so we need to add it once
   // important bug fix
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    // user is signed-in
    const {uid, email, displayName , photoURL} = user;
    dispatch(
      addUser({
        uid: uid,
        email: email, 
        displayName: displayName, 
        photoURL: photoURL})
    ); 
    navigate("/browse");
    } else {
      // user is signed-out
      dispatch(removeUser());
      navigate("/");
    }
  });

  // clean up logic, unsubscribe the listener when component unmounts
  return () => unsubscribe();
  }, []);

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
      className='w-44'
      alt = "logo"
      src={LOGO}
      />

      {user && (<div className='flex p-2'>
        <img 
        className='w-12 h-12'
        alt='usericon'
        src={user?.photoURL}
        />
        
        <button 
        onClick={handleSignOut}
        className='font-bold text-white px-2'
        >
         Sign Out 
        </button>
      </div>
      )}
      
    </div>
  )
}

export default Header;
