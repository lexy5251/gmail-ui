import React from 'react';
import './Login.css'
import Button from '@mui/material/Button';
import { auth, provider } from './firebase';
import { useDispatch } from 'react-redux';
import { signInWithPopup } from 'firebase/auth';
import { login } from './features/userSlice';

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
    .then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        })
      );
    })
    .catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <div className="login_container">
        <img src="gmail.png" alt="gmail-logo"/>
        <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
      </div>
    </div>
  )
}

export default Login;