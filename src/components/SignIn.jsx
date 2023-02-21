import React from 'react'
import GoogleButton from 'react-google-button'


import { auth } from '../firebase'
import {GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'



const style =  {
   wrapper: 'flex justify-center'
}

const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

const signin = () => {
  return (
    <div className={StyleSheet.wrapper}>
     <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default signin
