import React from 'react'
import { auth } from './Service/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

const PrivatePage = ({children}) => {
    const [user] = useAuthState(auth);

    if(!user){
      alert("You can't enter in this page. Please Login Your Account")
      return <Navigate to={"/login"} />
    }
  return children
}

export default PrivatePage
