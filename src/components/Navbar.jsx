import React from 'react';
import SignIn from './SignIn';
import LogOut from './LogOut';
import {auth} from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
   nav: 'bg-purple-400 h-200 flex justify-between item-center p-4 border rounded 30px',
   heading: 'text-white text-3xl'
}

const Navbar = () => {

    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className={style.nav}>
        <h2 className={style.heading}>Chat App</h2>
        {user ? <LogOut /> : <SignIn />}
         
    </div>
  );
};

export default Navbar;

