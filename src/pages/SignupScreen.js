import React, { useRef } from 'react';
import { auth,provider } from '../firebase';
import './SignupScreen.css';
import googleLogo from "../images/google.png";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInWithGoogleHandler = () => {
		auth
			.signInWithPopup(provider)
			.then((signInedUser) => {
			})
			.catch((error) => {
				// An error happened.
				// console.log(error);
			});
	};
  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign Up</h1>
      
        <input ref={emailRef} type='email' placeholder='Email' />
        <input ref={passwordRef} type='password' placeholder='Password' />
        <button type='submit' onClick={register}>
          Sign Up
        </button>
       
      </form>
      <div className='signupScreen_withGoogle'>
					<img
						onClick={signInWithGoogleHandler}
						src={googleLogo}
						alt='Logo'
					/>
					<h5 onClick={signInWithGoogleHandler}>Login With Google</h5>
				</div>
    </div>
  );
};

export default SignupScreen;
